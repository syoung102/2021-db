import mysql from "mysql2"

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
      host: 'localhost',
      user: 'root', // 본인의 mysql user id
      database: 'week10', // 본인이 만든 데이터베이스 이름
      password: 'tjdud119', // 본인의 mysql password
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    }
);

// async / await 사용
const promisePool = pool.promise();

// select query
export const selectSql = { // 외부 함수 export
    getUsers : async() => {
        const [rows] = await promisePool.query(`select * from user`);
        // select문 - user 정보
        return rows
    },
    getSubject : async () => {
        const [rows] = await promisePool.query(`select * from subject`);
        // select문 - subject 정보
        return rows
    },
}

// delete query
export const deleteSql = {
    deleteSubject : async (data) => { // data에 Snumber가 들어감
        console.log('deleteSql.deleteSubject:', data.Snumber); // 확인용도
        const sql = `delete from subject where Snumber ="${data.Snumber}"`;
        // delete query문
        await promisePool.query(sql);
    },
}