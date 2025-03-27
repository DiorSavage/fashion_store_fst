const ProductRouter = require('express')
const productRouter = new ProductRouter()
const productController = require('../controllers/product.controller')
const checkAuth = require('../utils/checkAuth')
const checkRole = require('../utils/checkRole')
const upload = require('../utils/upload')

productRouter.post('/product/create', checkAuth, checkRole, productController.createProduct)
productRouter.get('/product/:id', productController.getProduct)
productRouter.get('/products', productController.getProducts)
productRouter.put('/product/update/:id', checkAuth, checkRole, productController.updateProduct)
productRouter.delete('/product/delete/:id', checkAuth, checkRole, productController.deleteProduct)

productRouter.post('/upload/product', checkAuth, checkRole, upload.single('image'), (req, res, next) => {
	console.log('req.file -> ', req.file)
	res.json({
		url: `/uploads/${req.file.originalname}`, // ссылка на картинку
	})
	req.body.image = `/uploads/${req.file.originalname}`
	next()
})

module.exports = productRouter