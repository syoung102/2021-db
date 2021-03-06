import mysql from "mysql2"

const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
      host: 'localhost',
      user: 'dbuser', // 본인의 mysql user id
      database: 'dbdesign', // 본인이 만든 데이터베이스 이름
      password: 'tjdud119', // 본인의 mysql password
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    }
  );

  const promisePool = pool.promise();

  const sql = {
      getUsers : async () => {
          const [rows] = await promisePool.query(`
          SELECT * FROM STUDENT         
          `)

          return rows
      },
  }

  module.exports = sql
  