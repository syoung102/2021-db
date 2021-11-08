// 모듈 가져오기
import express from "express"; // express 모듈 불러오기 (이름 동일)
import logger from "morgan"; // morgan 모듈 logger라는 이름으로 불러오기
import path from "path"; // path 모듈 불러오기 (이름 동일) - 경로설정

// 사용자가 만든 파일에서 불러오기
import loginRouter from "../routes/login"; // 로그인
import selectRouter from "../routes/select"; // 조회
import deleteRouter from "../routes/delete"; // 삭제

const PORT = 3000; // 포트번호

const app = express(); //http 기능으로 알아서 서버를 연결해줌

app.use(express.urlencoded({ extended: false}));
app.use(express.json()); // 웹에서 데이터 다루기 편하도록

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs'); // hbs 파일 사용

app.use(logger("dev")); // log 자세히 보기

app.use('/', loginRouter); // localhost:포트번호
app.use('/select', selectRouter); // localhost:포트번호/select
app.use('/delete', deleteRouter); // localhost:포트번호/delete

app.listen(PORT, () => { // 서버 실행
    console.log(`Example app listening at http://localhost:${PORT}`);
})
