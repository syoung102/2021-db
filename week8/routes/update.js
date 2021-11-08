import express from "express";
import { selectSql, updateSql } from "../database/sql";

const router = express.Router();

//GET: 데이버 받아서 보여줌

// 기존 값 불러오기
router.get('/employee', async (req, res) => { // /update/employee
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', { // updateEmployee.hbs
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존 값 불러오기
router.get('/department', async (req, res) => { // /update/department
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {  // updateDepartment.hbs
        title: "부서 테이블 갱신",
        dept_res
    });
});

// POST : 데이터 처리할 때 데이터 받아서 기능 수행

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/employee', async (req, res) => { 
    const vars = req.body;
    console.log(vars.salary);
    const data = {
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);

    res.redirect('/select'); // localhost:포트번호/select로 이동
});

// 수정 버튼을 눌렀을 경우 update query를 실행하며 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body;
    console.log(vars.dname);

    const data = {
        Dname: vars.dname,
    }
    await updateSql.updateDepartment(data);

    res.redirect('/select'); // localhost:포트번호/select로 이동
});

module.exports = router;