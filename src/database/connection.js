import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool({
  host: process.env.DATABASE_URL,
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: 3306,
});

export default connection;
