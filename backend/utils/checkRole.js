const db = require('../db')

module.exports = async (req, res, next) => {
	console.log(req.user)
	const admin = await db.query('select * from person where id = $1', [req.user.id])
	const { role, ...adminData } = admin.rows[0]
	if (role === 'admin') {
		next()
	} else {
		res.status(403).json({
			success: false,
			message: 'Доступ запрещен. Нужно иметь права администратора'
		})
	}
}