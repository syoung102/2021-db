// 입력

import express from "express" // express 모듈
import {insertSql} from "../database/sql";
//삽입과 관련된 insertSql 모듈 불러오기

const router = express.Router(); // router 객체

router.get('/', (req, res) => {
    res.render('home'); // home.hbs 파일 찾아서 웹브라우저에
});

router.post('/', (req, res) => { // 삽입버튼 누르면 실행됨
    const vars = req.body;
    const var_length = Object.keys(req.body).length;

    // employee와 department 구분
    if (var_length > 4){ // department데이터는 4개 - employee
        const data = { // date 객체
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        insertSql.setEmployee(data);  // date 삽입
    } else{ // department
        const data = {
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };

        insertSql.setDepartment(data); // date 삽입
    }
    res.redirect('/'); // 입력한 후 똑같이 home 화면으로 (새로고침)
})

module.exports = router;