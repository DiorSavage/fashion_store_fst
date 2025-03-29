const { validationResult } = require('express-validator')
const UserService = require('../services/user.service')
const jwt = require('jsonwebtoken')
const userService = require('../services/user.service')

class UserController {
	async createUser(req, res) {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return res.status(400).json(errors.array())
		}
		try {
			const { refreshToken, accessToken, userData } = await UserService.createUser(req)
			const { passwordhash, ...user } = userData
			// const token = jwt.sign( //! ТОКЕН ДОЛЖЕН ИДТИ В КУКИ
			// 	{
			// 		id: newPerson.id,
			// 		role: newPerson.role
			// 	},
			// 	'secret123',
			// 	{
			// 		expiresIn: '30d' // срок жизни токена
			// 	}
			// )
			// res.cookie('fashionToken', token, {
			// 	maxAge: 30 * 24 * 60 * 60 * 1000
			// })
			// res.headers.authorization = `Bearer ${accessToken}`
			// res.cookie('fashionTokenAccess', accessToken, {
			// 	maxAge: 15 * 60,
			// 	httpOnly: true, //? нельзя изменять и получать внутри браузера
			// })
			res.cookie('fashionTokenRefresh', refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			res.status(200).json({
				success: true,
				user,
				refreshToken,
				accessToken
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Не удалось зарегистрировать пользователя"
			})
			console.log(error)
		}
	}
	async logout(req, res) {
		try {
			const token = await UserService.logout(req)
			res.clearCookie('fashionToken')
			res.status(200).json({
				success: true,
				token
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Не удалось выйти",
				error: error
			})
		}
	}

	async refresh(req, res, next) {
		try {
			const idOfToken = req.headers.cookie.indexOf('fashionTokenRefresh')
			const refreshToken = req.headers.cookie.slice(idOfToken, ).replace('fashionTokenRefresh=', '')
			const userData = await UserService.refresh(req, refreshToken)
			// res.cookie('fashionTokenAccess', accessToken, {
			// 	maxAge: 15 * 60,
			// 	httpOnly: true,
			// })
			res.cookie('fashionTokenRefresh', refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			})
			return res.status(200).json(userData)
		} catch (error) {
			res.status(500).json({
				success: false,
				message: "Не удалось обновить токен"
			})
		}
	}

	async loginUser(req, res) {
		const person = await UserService.loginUser(req)
		if (person) {
			try {
				const { refreshToken, accessToken, userData } = person
				// const token = jwt.sign( //! лучше будем юзать refresh и access токены
				// 	{
				// 		id: user.id,
				// 		role: user.role
				// 	},
				// 	'secret123',
				// 	{
				// 		expiresIn: '30d'
				// 	}
				// )
				// res.cookie('fashionTokenAccess', accessToken, {
				// 	maxAge: 15 * 60,
				// 	httpOnly: true,
				// })
				res.cookie('fashionTokenRefresh', refreshToken, {
					maxAge: 30 * 24 * 60 * 60 * 1000,
					httpOnly: true,
				})
				// res.set('Authorization', )
				res.status(200).json({
					success: true,
					userData,
					accessToken
				})
			} catch (error) {
				console.log(error)
				res.status(500).json({
					success: false,
					message: 'Не удалось войти'
				})
			}
		} else {
			res.status(404).json({
				success: false,
				message: 'Неправильная почта или пароль'
			})
		}
	}
	async getUser(req, res, next) {
		try {
			const userData = await UserService.getUser(req)
			const { passwordhash, ...user } = userData
			res.status(200).json({
				success: true,
				user
			})
		} catch (error) {
			next(error)
		}
	}

	async updateUserRole(req, res) {
		try {
			const updatedUser = await UserService.updateUserRole(req, res)
			console.log(updatedUser)
			res.status(200).json({
				success: true,
				updatedUser: updatedUser
			})
		} catch (error) {
			console.log(error)
			res.status(Number(error.status)).json({
				success: false,
				message: error.message
			})
		}
	}

	async getAllUsers(req, res, next) {
		try {
			const users = await UserService.getAllUsers()
			return res.json(users)
		} catch (error) {
			next(e)
		}
	}

	async updateUser(req, res) {
		try {
			const updatePerson = await UserService.updateUser(req, res)
			res.status(200).json({
				success: true,
				updatedUser: updatePerson.rows[0]
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось войти'
			})
		}
	}
	async deleteUser(req, res) {
		try {
			const deletedUser = await userService.deleteUser(req)
			if (deletedUser.rowCount > 0) {
				res.clearCookie('fashionTokenRefresh')
				res.status(200).json({
					success: true,
					message: 'Пользователь удален'
				})
			} else {
				throw new Error('Не удалось удалить пользователя')
			}
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось удалить пользователя'
			})
		}
	}
}

module.exports = new UserController()

// РЕФРЕШ ТОКЕНЫ НАХУЙ И ВТОРЫЕ КАКИЕ ТО