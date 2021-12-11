const Pool = require('pg').Pool;
const pool = new Pool({
	user: "postgres",
	password: "dba",
	database: "waddata",
	host: "localhost",
	port: "5432"
});
module.exports = pool;