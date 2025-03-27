const db = require('../db')

class OrderService {
	async createOrder(req) {
		const { products, status, result, sizes } = req.body
		const userId = req.user.id
		const date = new Date().toISOString()
		const newOrder = await db.query('insert into orders (userid, products, status, date, result, sizes) values ($1, $2, $3, $4, $5, $6) returning *', [userId, products, status, date, result, sizes])
		return newOrder.rows[0]
		//? 2024-06-30T17:18:13 - new Date().toISOString() - так дату
	}

	async getAllOrders(req) {
		const orders = await db.query('select * from orders')
		return orders.rows
	}
	async getOrders(req) {
		const userid = req.user.id
		console.log(req.user)
		const orders = await db.query('select * from orders where userid = $1', [userid])
		return orders.rows
	}
	async getOrder(req) {
		const order = await db.query('select * from orders where id = $1', [req.params.id])
		return order.rows[0]
	}
	async updateOrder(req) {
		const { id } = req.params
		const { status } = req.body
		const updatedOrder = await db.query('update orders set status = $1 where id = $2 returning *', [status, id])
		return updatedOrder.rows[0]
	}
}

module.exports = new OrderService()