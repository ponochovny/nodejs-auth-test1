const express = require('express')
const { default: mongoose } = require('mongoose')
const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

const start = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://admin:qwerty123@cluster0.jnzusts.mongodb.net/auth_roles?retryWrites=true&w=majority`
		)
		app.listen(PORT, () => console.log(`server started on port ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

start()
