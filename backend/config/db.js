import mysql from "mysql2";

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: Number(process.env.MYSQLPORT),  
  ssl: {
    rejectUnauthorized: false           
  },
  connectTimeout: 10000                 
});

db.connect((err) => {
  if (err) {
    console.error("DB connection error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

export default db;