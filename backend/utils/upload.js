const multer = require('multer')

const storage = multer.diskStorage({
	destination: (_, __, callback) => {
		callback(null, 'uploads')
	},
	filename: (_, file, callback) => {
		callback(null, file.originalname)
	},
})

module.exports = multer({ storage })