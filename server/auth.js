const express = require('express')
const router = express.Router()

router.post('/authData', (req, res) => {
	console.log('body', req.body)
	if (!req.body.email) {
		res.send({
			err: 'Error: Not all fields are filled'
		})
	} else {
		res.headers = {
			'Content-Type': '*/*'
		}
		res.send({
			status: 'success',
			id: 'qwe',
			body: 'Auth data successfully received'
		})
		res.status(400).json()
	}
})

module.exports = router
