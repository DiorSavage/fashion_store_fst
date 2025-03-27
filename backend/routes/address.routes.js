const AddressRouter = require('express')
const addressRouter = new AddressRouter()
const checkAuth = require('../utils/checkAuth')
const addressController = require('../controllers/address.controller')

addressRouter.post('/address/create', checkAuth, addressController.createAddress)
addressRouter.get('/address', checkAuth, addressController.getAddresses)
addressRouter.get('/address/:id', checkAuth, addressController.getAddress)
addressRouter.put('/address/update/:id', checkAuth, addressController.updateAddress)
addressRouter.delete('/address/delete/:id', checkAuth, addressController.deleteAddress)

module.exports = addressRouter