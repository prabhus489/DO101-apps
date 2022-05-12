require('dotenv').config();
const DBCONFIG = process.env.DBCONFIG || 'postgresql://contacts:contacts@localhost:5432/contacts';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DBCONFIG,
    ssl: false,
});
  
module.exports = { pgconn }