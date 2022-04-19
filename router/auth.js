// пути для отправки или получения данных
const Router = require('express');
const controller = require('../controller/auth');

const router = new Router();

router.post('/registaration', controller.registration);
router.get('/user', passport.authenticate('jwt', { session: false }), controller.getUser);

module.exports = router;