const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const testRoutes = require('./testRoutes');

router.use('/', loginRoutes);
router.use('/', testRoutes);

module.exports = router;