const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "",
    localhost: "localhost",
    port: 5432,
    database: "posts_users_page"
})

module.exports = pool