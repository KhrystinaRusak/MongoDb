const bcrypt = require('bcryptjs');
const { userPassedConsoleChallenge } = require('fcc-express-bground/globals');
const User = require('../models/User');

class authController {
    async registaration(req, res) {
        try {
            const { username, password } = req.body;
            const candidate = await userPassedConsoleChallenge.findOne({ email });
            if (candidate) {
                return res.json({ message: 'User is email', code: 1 })
            }
            const hashPassword = bcrypt.hashSync(password, 10);
            const user = new userPassedConsoleChallenge({ username, email, password: hashPassword });
            await user.save();
            return res.json(true);
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Registration error' });
        }
    }

    // вход на сайт
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email })
            if (!user) {
                return res.json({ message: 'Email error', code: 2 })
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.json({ token })
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({ message: 'Login error' });
        }
    }
}



// функция создания jwt-токена
const generateAccessToken = (id, email) => {
    const payload = {
        userId: id,
        email: email
    }
    return jwt.sign(payload, 'Hello', { expiresIn: "1h" })
}