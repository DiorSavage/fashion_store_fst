const UserRouter = require('express')
const userRouter = new UserRouter()
const userController = require('../controllers/user.controller')
const checkAuth = require('../utils/checkAuth')
const { check } = require('express-validator')
const checkRole = require('../utils/checkRole')
// const registerValidation = require('../validations/auth')
const upload = require('../utils/upload')

userRouter.post('/auth/registration', userController.createUser)
userRouter.post('/auth/login', userController.loginUser)
userRouter.get('/auth/me', checkAuth, userController.getUser)
userRouter.get('/auth/refresh', checkAuth, userController.refresh)
userRouter.put('/auth/update/:id', checkAuth, userController.updateUser)
userRouter.delete('/auth/delete/:id', checkAuth, userController.deleteUser)
userRouter.post('/auth/logout', checkAuth, userController.logout)
userRouter.put('/auth/updateRole', checkAuth, userController.updateUserRole)
userRouter.put("/auth/update-basket", userController.updateBasket)
userRouter.delete("/auth/remove-from-basket/:id", userController.deleteProductFromBasket)

// userRouter.post('/upload', checkAuth, upload.single('image'), (req, res) => {
//   res.json({
//     url: `/uploads/${req.file.originalname}`, // ссылка на картинку
//   })
// })
// // router.delete('/upload/:id', checkAuth, upload.single('image')) //! УДАЛЕНИЕ КАРТИНКИ ПРОРАБОТАТЬ

module.exports = userRouter