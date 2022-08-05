const db = require('../db')

class AuthControllers {
	async authorizationHandler(req, res) {
		// console.log('body', req.body)
        const {email, password, confirmPassword, agreements} = req.body
		if (email && password && confirmPassword && agreements) {
			console.log('signUp', { email: email, password: password })
            const newAuthData = await db.query('SELECT * FROM auth_data')
            if ((newAuthData.rows.some((obj) => (obj.email === email && obj.password === password)))) {
                res.send({
                    status: "error",
                    type: "singUp",
                    body: "This user is already registered",
					authorized: false
                })
            } else {
                const newAuthData = await db.query('INSERT INTO auth_data (email, password) values($1, $2) RETURNING *',
                    [email, password]).catch(e => console.log('errorzxczczxczxczxc123', e))
                res.json({ ...newAuthData.rows[0], authorized: true })
            }


		} else if (email && password) {
			console.log('login', { email, password })
			const newAuthData = await db.query('SELECT * FROM auth_data')
			if ((newAuthData.rows.some((obj) => (obj.email === email && obj.password === password)))) {
				res.send({
					status: 'success',
					type: 'login',
					body: 'Auth data successfully received',
					authorized: true
				})
			} else {
				res.send({
					status: 'error',
					type: 'login',
					body: 'Wrong email or password',
					authorized: false
				})
			}
		}
		// if (!req.body.email) {
		//     res.send({
		//         err: 'Error: Not all fields are filled'
		//     })
		// } else {
		//     const {email, password} = req.body
		//     // const newAuth = await db.query('INSERT INTO auth (email, password) values($1, $2) RETURNING *',
		//     //     [email, password])
		//     res.headers = {
		//         'Content-Type': '*/*'
		//     }
		//     // res.json(newAuth.rows[0])
		//     // res.send({
		//     //     status: 'success',
		//     //     id: 'qwe',
		//     //     body: 'Auth data successfully received'
		//     // })
		//     res.status(400).json()
		// }
	}
}

module.exports = new AuthControllers()
