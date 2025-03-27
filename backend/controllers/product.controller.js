const productService = require('../services/product.service')

class ProductController {
	async createProduct(req, res) {
		try {
			const newProduct = await productService.createProduct(req, res)
			res.status(200).json({
				success: true,
				product: newProduct
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось создать продукт',
			})
		}
	}
	async getProduct(req, res) {
		try {
			const product = await productService.getProduct(req)
			if (product.rows.length !== 0) {
				res.status(200).json({
					success: true,
					product: product.rows[0]
				})
			} else {
				res.status(404).json({
					success: false,
					message: 'Нет такого продукта',
				})
			}
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось получить продукт',
			})
		}
	}
	async getProducts(req, res) {
		try {
			const products = await productService.getProducts(req)
			res.status(200).json({
				success: true,
				products
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось получить продукты',
			})
		}
	}
	async updateProduct(req, res) {
		try {
			const updatedProduct = await productService.updateProduct(req, res)
			res.status(200).json({
				success: true,
				updatedProduct
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось обновить продукт',
			})
		}
	}
	async deleteProduct(req, res) {
		try {
			const deletedProduct = await productService.deleteProduct(req)
			if (deletedProduct.rowCount > 0) {
				res.status(200).json({
					success: true,
					message: 'Продукт удален'
				})
			} else {
				res.status(400).json({
					success: false,
					message: 'Нет такого продукта',
				})
			}
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось удалить продукт',
			})
		}
	}

	async updatePhoto(req, res) {
		try {
			const updatedProduct = await productService.updatePhoto(req)
			res.status(200).json({
				success: true,
				updatedProduct: updatedProduct.rows[0]
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: error.message
			})
		}
	}
}

module.exports = new ProductController()

// () => ref.current.click() ДЛЯ ФРОНТЕНДА