// 로그인 페이지

import express from "express" // express 모듈
import {selectSql} from "../database/sql";
//selectSql 불러오기

const router = express.Router(); // router 객체

router.get('/', (req, res) => {
    res.render('login'); // login.hbs 파일 찾아서 웹브라우저에
});

router.post('/', async (req, res) => { // 삽입버튼 누르면 실행됨
    const vars = req.body; // 오브젝트
    const users = await selectSql.getUsers(); // user의 정보 가져오기

    let whoAmI = ''; // 빈 string, let은 값을 바꿀 수 있는 변수
    let checklogin = false; // 로그인 상태, 처음엔 false

    // for(let i = 0; i < users.length; i++){
    //     if(vars.id === users[i].id && vars.password ===user[i].password){
    //     }
    // }
    users.map((user)=>{
        if(vars.id === user.Id && vars.password === user.Password){
            checklogin = true; // 로그인 성공
            if(vars.id === 'admin'){ // 로그인 한 사람이 누군지
                whoAmI = 'admin';
            } else{
                whoAmI = 'users';
            }
        }
    })

    console.log('whoAmI:', whoAmI);

    if (checklogin && whoAmI === 'admin'){ // 로그인 성공 & admin일때
        res.redirect('/delete'); // delect로 이동
    } else if (checklogin && whoAmI === 'users'){ // 로그인 성공 & users일때
        res.redirect('/select'); // select로 이동
    } else{ // 로그인 실패
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
        // login 페이지에서 경고창 띄우기
    }
    
})

module.exports = router;