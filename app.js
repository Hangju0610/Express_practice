const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

// express 패키지를 호출하여 app 변수 객체를 생성한다.
const app = express();

const users = [
    {
        id: 0,
        name: 'Jack',
    },
    {
        id: 1,
        name: 'HJ',
    },
];

//라우팅
// URL(또는 경로), 및 특정한 HTTP 요청 메소드(GET, Post등)인 특정 엔드포인트에 대한
// 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말한다.

// app.METHOD(Path, HANDLER)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.json(users);
});

// route parameters
// 경로 매개변수 : URL의 해당 위치에 지정된 값을 캡쳐하는 데 사용되는 기능
// 사용 방법 내가 원하는 경로 쪽 매개변수 앞에 :을 붙인다.
// req.params.(원하는 값) 을 넣어줘서 찾아준다.
app.get('/users/:userid', (req, res) => {
    const userId = Number(req.params.userid);
    const user = users[userId];
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
});

// 서버 시작하기
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
