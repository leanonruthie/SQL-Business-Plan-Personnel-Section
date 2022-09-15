// I already changed my root password so I don't mind db.js not being inside .gitignore
// ALSO, we will be using .env next assignnment for best practice

const mysql = require('mysql2'); 
const db = mysql.createConnection(
    {
      host:'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'MyNew#1PW!',
      database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
  );
  
  module.exports = db;