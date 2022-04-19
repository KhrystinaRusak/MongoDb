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

}

// запись полученного токена в localStorage
localStorage.setItem('token', token);

headers: {
    'Authorization': 'Bearer token'
}

start();