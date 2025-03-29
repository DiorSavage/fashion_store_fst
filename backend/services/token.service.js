const jwt = require('jsonwebtoken')
const db = require('../db')

class TokenService {
	generateToken(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: '5m'
		})
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: '15d'
		})
		return {
			accessToken,
			refreshToken
		}
	}

	async findToken(refreshToken) {
		const tokenData = await db.query('select * from tokens where refreshToken = $1', [refreshToken])
		return tokenData
	}

	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
			return userData
		} catch (error) {
			return null
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
			return userData
		} catch (error) {
			return null
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await db.query('select * from tokens where userId = $1', [userId])
		if (tokenData.rows.length) {
			const token = await db.query('update tokens set refreshToken = $1 where userId = $2  returning *', [refreshToken, userId])
			return token
		}
		const token = await db.query('insert into tokens (userId, refreshToken) values ($1, $2) returning *', [userId, refreshToken])
		return token
	}
	async removeToken(userid) {
		const token = await db.query('delete from tokens where userid = $1 returning *', [userid])
		return token
	}
}

module.exports = new TokenService()