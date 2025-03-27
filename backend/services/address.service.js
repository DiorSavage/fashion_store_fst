const db = require('../db')

class AddressService {
	async getAddresses(req, res) {
		const addresses = await db.query('select * from address where userid = $1', [req.userId])
		return addresses.rows
	}
	async createAddress(req, res) {
		const { firstname, surname, country, city, index, apartment, phone, company } = req.body
		const newAddress = await db.query('insert into address (firstname, surname, country, city, index, apartment, phone, company, userid) values ($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *', [firstname, surname, country, city, index, apartment, phone, company, req.userId])
		return newAddress.rows[0]
	}
	async getAddress(req, res) {
		const address = await db.query('select * from address where id = $1 and userid = $2', [req.params.id, req.userId])
		return address.rows[0]
	}
	async updateAddress(req, res) {
		const { firstname, surname, country, city, index, apartment, phone, company } = req.body
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const updatedAddress = await db.query('update address set firstname = $1, surname = $2, country = $3, city = $4, index = $5, apartment = $6, phone = $7, company = $8 where id = $9 returning *', [firstname, surname, country, city, index, apartment, phone, company, id])
			return updatedAddress
		}
	}
	async deleteAddress(req, res) {
		const { id } = req.params
		if (!id) {
			res.status(400).json({
				success: false,
				message: 'Не передан ID'
			})
		} else {
			const deletedAddress = await db.query('delete from addresss where id = $1', [id])
			return deletedAddress
		}
	}
}

module.exports = new AddressService()