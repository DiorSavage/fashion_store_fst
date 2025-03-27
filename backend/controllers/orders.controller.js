const orderService = require('../services/order.service')

class OrderController {
	async createOrder(req, res) {
		try {
			const newOrder = await orderService.createOrder(req)
			res.status(200).json({
				success: true,
				newOrder
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось создать заказ',
			})
		}
	}
	async getOrders(req, res) {
		try {
			const orders = await orderService.getOrders(req)
			res.status(200).json({
				success: true,
				orders
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось получить заказы',
			})
		}
	}
	async getOrder(req, res) {
		try {
			const order = await orderService.getOrder(req)
			res.status(200).json({
				success: true,
				order
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось получить заказ',
			})
		}
	}
	async updateOrder(req, res) {
		try {
			const updatedOrder = await orderService.updateOrder(req)
			res.status(200).json({
				success: true,
				updatedOrder
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось обновить заказ',
			})
		}
	}
}

module.exports = new OrderController()