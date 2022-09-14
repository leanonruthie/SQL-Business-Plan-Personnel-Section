// Work Reference #2 -RUT-VIRT-FSF-PT-06-2022-U-LOLC/12-SQL/01-Activities/12-Stu_Connect-Node - I already changed my root password so I don't mind db.js not in .gitignore
// ALSO, we will be using .env next assignnment which we've been practicing this week

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