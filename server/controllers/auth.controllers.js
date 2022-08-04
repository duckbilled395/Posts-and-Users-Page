const db = require('../db')

class AuthControllers {
    async sendAuthData(req, res) {
        console.log('body', req.body)
        if (!req.body.email) {
            res.send({
                err: 'Error: Not all fields are filled'
            })
        } else {
            const {email, password} = req.body
            const newAuth = await db.query('INSERT INTO auth (email, password) values($1, $2) RETURNING *',
                [email, password])
            res.headers = {
                'Content-Type': '*/*'
            }
            res.json(newAuth.rows[0])
            // res.send({
            //     status: 'success',
            //     id: 'qwe',
            //     body: 'Auth data successfully received'
            // })
            res.status(400).json()
        }
    }
}

module.exports = new AuthControllers()
