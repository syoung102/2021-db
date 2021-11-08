import express from "express";
import { selectSql } from "../database/sql"; // 사용자가 만든 모듈

const router = express.Router(); // router 객체

router.get('/', async function(req, res){ // localhost:포트번호/select
    const subject = await selectSql.getSubject();

    res.render('select', { // select.hbs
        title: '정보통신공학과 과목',
        subject
    });
});

module.exports = router;