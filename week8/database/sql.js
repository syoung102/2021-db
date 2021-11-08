import mysql from "mysql2"

// 데이터베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
      host: 'localhost',
      user: 'root', // 본인의 mysql user id
      database: 'week8', // 본인이 만든 데이터베이스 이름
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
    getEmployee : async() => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);

        return rows
    },
}

export const insertSql = {
    setEmployee : async (data) => {
        const sql = `insert into employee values (
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}",
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`
            
            await promisePool.query(sql);
    },

    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}" )`;
            
            await promisePool.query(sql);
    },
}

// update query
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set salary = "${data.Salary}" where Lname = "Seo"`;
        await promisePool.query(sql);
    },

    updateDepartment : async (data) => {
        const sql = `update department set dname = "${data.Dname}" where Dnumber = "1"`;
        await promisePool.query(sql);
    },
}