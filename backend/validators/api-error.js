module.exports = class ApiError extends Error {
	constructor(status, message, errors=[]) {
		super(message)
		this.status = status
		this.errors = errors
	}

	static NoToken(message="Нет токена доступа") {
		throw new ApiError(404, message)
	}
	static NoUser() {
		throw new ApiError(404, 'Нет пользователя')
	}
	static UnauthorizedError(message="Пользователь не авторизован") {
		throw new ApiError(401, message)
	}
	static ForbiddenForUser(message="Доступ запрещен") {
		throw new ApiError(403, message)
	}
	static BadRequest(message, errors=[]) {
		throw new ApiError(400, message, errors)
	}
	static ErrorInServer(message, errors=[]) {
		throw new ApiError(500, message, errors)
	}
}