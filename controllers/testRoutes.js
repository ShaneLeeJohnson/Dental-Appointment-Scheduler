const router = require('express').Router();

router.get('/test', async (req, res) => {
    res.render('test');
});

module.exports = router;