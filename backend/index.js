const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')
const orderRouter = require('./routes/orders.routes')
const addressRouter = require('./routes/address.routes')
const cookieParser = require('cookie-parser')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use('/uploads', express.static('uploads'))
// app.use(cookieParser)
app.use(cors({
	credentials: true, // разрешение на куки
	origin: process.env.CLIENT_HOST,
}))

app.get('/', (req, res) => {
	res.status(200).send('GAy chlen popa')
})

app.use('/', userRouter)
app.use('/', productRouter)
app.use('/', orderRouter)
app.use('/', addressRouter)
app.use('/uploads/product', express.static('uploads'))

const startApp = async () => {
	try {
		app.listen(PORT, () => console.log('SERVER STARTED ON PORT: ' + PORT))
	} catch (error) {
		console.log(error)
	}
}

startApp()