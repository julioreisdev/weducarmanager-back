import mysql from "mysql2/promise";

const connection = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sua_senha",
  database: "nome_do_banco",
  port: 3306,
});

export default connection;
