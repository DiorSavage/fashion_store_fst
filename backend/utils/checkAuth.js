const jwt = require('jsonwebtoken')
const tokenService = require('../services/token.service')
const ApiError = require('../validators/api-error')

module.exports = (req, res, next) => {  //! здесь непонятная ошибка
	try {
		const authorizationHeader = req.headers.authorization
		const cookie = req.headers.cookie.split(";")
		if (Object.keys(req.headers).find(key => key === 'cookie') === undefined || authorizationHeader === undefined && authorizationHeader === "Bearer " || req.headers.cookie.indexOf("fashionTokenRefresh") === -1) {
			return ApiError.UnauthorizedError()
		}
		const refresh_token = cookie.filter(cook => cook.includes("fashionTokenRefresh"))[0].replace("fashionTokenRefresh=", "")
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