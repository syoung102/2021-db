import express from "express";
import { selectSql, deleteSql } from "../database/sql";

const router = express.Router();

// localhost::포트번호/delete
router.get('/', async (req, res) => {
    const subject = await selectSql.getSubject();
    res.render('delete', {
        title: "삭제 기능",
        subject  // subject 테이블 출력
    });
});

// POST : 데이터 처리할 때 데이터 받아서 기능 수행
router.post('/', async (req, res) => { 
    const data = {
        Snumber: req.body.delBtn, // 버튼 정보
    }

    await deleteSql.deleteSubject(data); // 삭제 - 버튼 value값 넘겨주기

    res.redirect('/delete'); // localhost:포트번호/delete로 이동
});

module.exports = router;