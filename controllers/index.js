const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const testRoutes = require('./testRoutes');
const appointmentRoutes = require('./appointmentRoutes');

router.use('/', loginRoutes);
router.use('/', testRoutes);
router.use('/', appointmentRoutes);

module.exports = router;