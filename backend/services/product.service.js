const db = require('../db')

class ProductService {
	async createProduct(req, res) {
		const { price, description, title, sizes, article, quantity, discount, category, color, brand, model, collaboration, mainimg } = req.body
		const newProduct = await db.query('insert into product (discount, description, price, title, sizes, article, category, typeproduct, color, brand, model, collaboration, mainimg) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) returning *', [discount, description, price, title, sizes, article, category.split(',')[0], category.split(',')[1], color, brand, model, collaboration, mainimg, quantity])
		return newProduct.rows[0]
	}
	
	async getProduct(req, res) {
		const { id } = req.params
		if (!id) {
			res.status(404).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const product = await db.query('select * from product where id = $1',[id])
			return product
		}
	}
	async getProducts(req) {
		let response = await db.query('select * from product')
		let products = response.rows
		if (Object.keys(req.query).length) {
			products = products.slice(req.query.start, req.query.end).filter(product => product.category === req.query.category)
		}
		return products
	}
	async updateProduct(req, res) {
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const { prices, sizes } = req.body
			const updatedProduct = await db.query('update product set prices = $1, sizes = $2 where id = $3 returning *', [prices, sizes, id])
			return updatedProduct.rows[0]
		}
	}
	async deleteProduct(req) {
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const deletedProduct = await db.query('delete from product where id = $1 returning *', [id])
			return deletedProduct
		}
	}

	// async updatePhoto(req) {
	// 	const { id, image } = req.body
	// 	if (!id) {
	// 		res.status(400).json({
	// 			success: false,
	// 			message: 'Не передан ID'
	// 		})
	// 	} else {
	// 		const updatedProduct = await db.query('update product set mainimg = $1 where id = $2 returning *', [image, id])
	// 		return updatedProduct
	// 	}
	// }
}

module.exports = new ProductService()

// create 
// {
// 	"prices": [3699, 3799, 3899, 4099, 4199,4299, 4399,4499,4599,4699],
// 	"sizes": [36,37,38,39,40,41,42,43,43.5,44],
// 	"title": "Кроссовки Nike Court Zoom Cage 2",
// 	"article": "46765753",
// 	"category": "Обувь",
// 	"color": "Голубой",
// 	"brand": "Nike",
// 	"model": "Nike Air Force",
// 	"collaboration": "Nike X OFF-WHITE"
// }