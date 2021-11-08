import express from "express";
import { selectSql } from "../database/sql"; // 사용자가 만든 모듈

const router = express.Router(); // router 객체

router.get('/', async function(req, res){ // localhost:포트번호/select
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    res.render('select', { // select.hbs
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;