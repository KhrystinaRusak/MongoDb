/* Реализовать сервер  Express. Будет обрабатывать GET, POST, PUT, DELETE
запросы на один и тот же УРЛ.
Получение одного по id
Получение всех
Создание
Обновление одного по id 
Удаление по id
Структура папок должна быть как я показывал на занятии
*/
const express = require('express');
const cors = require('cors');
const mogoose = require('mogoose');
const auth = require('./router.auth');
const passport = require('.middleware/authJwtMiddleware')(passport);

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', auth);
app.use(passport.initialize())

require('./middleware/authJwtMiddleware')(passport);

async function start() {
    // запись полученного токена в localStorage
    localStorage.setItem('token', token);

    start();
    let bGround = require('fcc-express-bground');
    let myApp = require('./myApp');
    let express = require('express');

    if (!process.env.DISABLE_XORIGIN) {
        app.use(function(req, res, next) {
            var allowedOrigins = ['https://narrow-plane.gomix.me', 'https://www.freecodecamp.com'];
            var origin = req.headers.origin || '*';
            if (!process.env.XORIG_RESTRICT || allowedOrigins.indexOf(origin) > -1) {
                console.log(origin);
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            }
            next();
        });
    }

    let port = process.env.PORT || 3000;
    bGround.setupBackgroundApp(app, myApp, __dirname).listen(port, function() {
        bGround.log('Node is listening on port ' + port + '...')
    });
}