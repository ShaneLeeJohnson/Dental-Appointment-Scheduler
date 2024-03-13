const router = require('express').Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
    res.render('login');
});

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } });

        if (!user || !user.validPassword(password)) {
            throw new Error('Invalid username or password');
        }

        req.session.loggedIn = true;
        req.session.user = user;
        console.log(req.session);

        res.redirect('/test');
    } catch (err) {
        res.render('login', { message: `Login failed: ${err.message}` });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    console.log(req.session);
    res.redirect('/');
});

module.exports = router;