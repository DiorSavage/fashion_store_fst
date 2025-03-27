const addressService = require('../services/address.service')

class AddressController {
	async getAddresses(req, res) {
		try {
			const addresses = await addressService.getAddresses(req)
			res.status(200).json({
				success: true,
				addresses
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось получить адреса',
			})
		}
	}
	async getAddress(req, res) {
		try {
			const address = await addressService.getAddress(req)
			res.status(200).json({
				success: true,
				address
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Не удалось получить адрес',
			})
		}
	}
	async createAddress(req, res) {
		try {
			const newAddress = await addressService.createAddress(req)
			res.status(200).json({
				success: true,
				newAddress
			})
		} catch (error) {
			console.log(error)
			res.status(500).json({
				success: false,
				message: 'Не удалось создать адрес'
			})
		}
	}
	async updateAddress(req, res) {
		try {
			const updatedAddress = await addressService.updateAddress(req)
			res.status(200).json({
				success: true,
				updatedAddress
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Не удалось обновить адрес',
			})
		}
	}
	async deleteAddress(req, res) {
		try {
			const deletedAddress = await addressService.deleteAddress(req)
			res.status(200).json({
				success: true,
				deletedAddress
			})
		} catch (error) {
			res.status(500).json({
				success: false,
				message: 'Не удалось удалить адрес',
			})
		}
	}
}

module.exports = new AddressController()