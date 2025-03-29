const db = require('../db')

class OrderService {
	async createOrder(req) {
		const { total_price, delivery_address, products } = req.body
		// const userId = req.user.id
		const userId = 3
		var queryProducts = ""
		const date = new Date().toISOString()
		const newOrder = await db.query('insert into orders (user_id, status, total_price, delivery_address, payment_method) values ($1, $2, $3, $4, $5) returning *', [userId, "canceled", total_price, delivery_address, "card"])
		products.map((product, index) => {
			queryProducts += `(${newOrder.rows[0].id}, ${product.id}, ${product.quantity}, ${product.price}, ${product.size}, '${product.color}')${index === products.length - 1 ? "" : ", "}`
		})
		console.log(`insert into order_product (order_id, product_id, quantity, price_per_unit, size, color) values ${queryProducts} returning *`)
		const newOrderProduct = await db.query(`insert into order_product (order_id, product_id, quantity, price_per_unit, size, color) values ${queryProducts} returning *;`)
		newOrder.rows[0]["products"] = newOrderProduct.rows
		return newOrder.rows[0]
	}

	async getAllOrders(req) {
		const orders = await db.query('select * from orders')
		return orders.rows
	}
	async getOrders(req) {
		const userid = req.user.id
		console.log(req.params)
		// const orders = await db.query('select * from orders where user_id = $1', [userid])
		const orders = await db.query("select * from orders where user_id = $1", [userid])
		for (let orderIndex = 0; orderIndex < orders.rowCount; orderIndex++) {
			const orderProducts = await db.query("select o.id as order_id, o.created_at, o.status, p.title as product_title, op.quantity, op.price_per_unit, op.size, op.color from orders o join order_product op on o.id = op.order_id join product p on product_id = p.id where (o.user_id = $1 and o.id = $2)", [userid, orders.rows[orderIndex]["id"]])
			orders.rows[orderIndex]["orders"] = orderProducts.rows
		}
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