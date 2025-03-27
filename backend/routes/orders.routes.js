const OrderRouter = require('express')
const orderRouter = new OrderRouter
const orderController = require('../controllers/orders.controller')
const checkAuth = require('../utils/checkAuth')
const checkRole = require('../utils/checkRole')

orderRouter.post('/orders/createOrder', checkAuth, orderController.createOrder)
orderRouter.get('/orders/:id', checkAuth, orderController.getOrder)
orderRouter.get('/orders/', checkAuth, orderController.getOrders)
orderRouter.put('/orders/update/:id', checkAuth, checkRole, orderController.updateOrder)

module.exports = orderRouter