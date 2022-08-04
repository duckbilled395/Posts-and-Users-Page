const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const auth = require('./routes/auth.routes')

const PORT = 8080

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(auth)

app.listen(PORT, () => {
	console.log(`Server is up on port ${PORT}`)
})