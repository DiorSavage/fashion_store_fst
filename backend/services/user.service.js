const db = require('../db')
const bcrypt = require('bcrypt')
const tokenService = require('./token.service')
const ApiError = require('../validators/api-error')

class UserService {
	async createUser(req) {
		const { email, password, role } = req.body
		const candidate = await db.query('select * from person where email = $1', [email])
		if (candidate.rows.length) {
			throw new Error('Пользователь с такой почтой уже существует')
		}
		const salt = await bcrypt.genSalt(10)
		const hashPassword = await bcrypt.hash(password, salt)
		const newPerson = await db.query('insert into person (email, passwordhash, role) values ($1, $2, $3) returning *', [email, hashPassword, role])
		const tokens = tokenService.generateToken({
			id: newPerson.rows[0].id,
			email: newPerson.rows[0].email
		})
		await tokenService.saveToken(newPerson.rows[0].id, tokens.refreshToken)
		return {
			...tokens,
			userData: newPerson.rows[0]
		}
	}
	async loginUser(req) {
		const { email, password } = req.body
		const user = await db.query('select * from person where email = $1', [email])
		if (user.rows.length === 0) {
			return ApiError.NoUser()
		}
		const isValidPass = await bcrypt.compareSync(password, user.rows[0].passwordhash)
		if (!isValidPass) {
			throw new Error('Неправильная почта или пароль')
		}
		const tokens = tokenService.generateToken({
			id: user.rows[0].id,
			email: user.rows[0].email
		})
		await tokenService.saveToken(user.rows[0].id, tokens.refreshToken)
		return {
			...tokens,
			userData: user.rows[0]
		}
	}
	async logout(req) {
		const token = await tokenService.removeToken(req.user.id)
		return token
	}

	async refresh(req, refreshToken) {
		const tokenFromDb = await tokenService.findToken(refreshToken)
		if (!tokenFromDb) {
			return ApiError.UnauthorizedError()
		}
		const user = await db.query('select * from person where id = $1', [req.user.id])
		const tokens = tokenService.generateToken({
			id: req.user.id,
			email: user.email
		})
		await tokenService.saveToken(req.user.id, tokens.refreshToken)

		const userDataFromDb = await db.query('select * from person where id = $1', [req.user.id])
		const { passwordhash, ...userDataWithoutPassword } = userDataFromDb.rows[0]
		
		return {
			...tokens,
			user: userDataWithoutPassword
		}
	}
	async getUser(req, res, next) {
		try {
			const { id, email } = req.user
			const person = await db.query('select * from person where id = $1', [id])
			return person.rows[0]
		} catch (error) {
			res.status(401).json({
				success: false,
				message: error.message
			})
		}
	}
	async updateUser(req, res) {
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const { firstname, surname, email, phone } = req.body
			const updatedUser = await db.query('update person set firstname = $1, surname = $2, email = $3, phone = $4 where id = $5 returning *', [firstname, surname, email, phone, id])
			return updatedUser
		}
	}
	async deleteUser(req, res) {
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const post = await db.query('delete from person where id = $1 returning *', [id])
			return post
		}
	}
	async getAllUsers() {
		const users = await db.query('select * from person')
		return users
	}
	async updateUserRole(req, next) {
		try {
			const { userid, key } = req.body
			console.log(req.headers)
			const refreshTokenUser = req.headers.cookie.split('=')[1]
			const isValide = tokenService.validateRefreshToken(refreshTokenUser)
			if (key === process.env.SPECIAL_KEY_FOR_ADMIN && isValide) {
				const updatedUser = await db.query("update person set role = 'admin' where id = $1 returning *", [userid])
				console.log(updatedUser)
				return updatedUser
			} else {
				console.log(isValide)
				return next(ApiError.ForbiddenForUser(message="Доступ запрещен"))
			}
		} catch (error) {
			console.log(error.message)
			return next(ApiError.ErrorInServer(message="Ошибка сервера, не удалось выдать права администратора"))
			// res.status(500).json({
			// 	success: false,
			// 	message: error.message
			// })
		}
	}
}

module.exports = new UserService()

//! 1:10:00