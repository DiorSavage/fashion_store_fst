const jwt = require('jsonwebtoken')
const tokenService = require('../services/token.service')
const ApiError = require('../validators/api-error')

module.exports = (req, res, next) => {  //! здесь непонятная ошибка
	try {
		if (Object.keys(req.headers).find(key => key === 'cookie') === undefined) {
			return ApiError.UnauthorizedError()
		}
		const authorizationHeader = req.headers.authorization
		const cookie = req.headers.cookie
		const refresh_token = cookie.slice(cookie.slice(cookie.indexOf('fashionToken='), ), cookie.slice(cookie.indexOf('fashionToken='), ).indexOf(';')).replace('fashionToken=', '')
		if (!refresh_token) {
			return next(ApiError.NoToken("Refresh token is not found __checkAuth"))
		}
		if (!authorizationHeader) {
			return next(ApiError.NoToken())
		}
		const accessToken = authorizationHeader.split(' ')[1]
		if (!accessToken) {
			return next(ApiError.NoToken())
		}
		const userData = tokenService.validateAccessToken(accessToken)
		// console.log(refresh_token)
		var val_refresh = false
		if (!userData) {
			if (refresh_token) {
				val_refresh = tokenService.validateRefreshToken(refresh_token)
				if (!val_refresh) {
					return next(ApiError.ForbiddenForUser(message="Закончилось время токена"))
				}
			} else {
				return next(ApiError.UnauthorizedError("Refresh token is shit"))
			}
		}
		req.user = userData ? userData : val_refresh
		return next()
	} catch (error) {
		console.log(error)
		res.status(Number(error.status)).json({
			success: false,
			message: error.message
		})
	}
}