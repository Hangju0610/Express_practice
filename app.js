const express = require('express');
const usersRouter = require('./routes/users.router');
const postsRouter = require('./routes/posts.router');

const PORT = 3000;
const HOST = '0.0.0.0';

// express 패키지를 호출하여 app 변수 객체를 생성한다.
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();
    const diffTime = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`);
});

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

//라우팅
// URL(또는 경로), 및 특정한 HTTP 요청 메소드(GET, Post등)인 특정 엔드포인트에 대한
// 클라이언트 요청에 애플리케이션이 응답하는 방법을 결정하는 것을 말한다.

// app.METHOD(Path, HANDLER)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 서버 시작하기
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
