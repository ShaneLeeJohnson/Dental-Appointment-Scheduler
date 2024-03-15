// Imports the Express Router class
const router = require('express').Router();

// Require route handlers for specific functionalities
const loginRoutes = require('./loginRoutes');
const appointmentRoutes = require('./appointmentRoutes');

// Mount the imported route handlers onto the main router
router.use('/', loginRoutes);
router.use('/', appointmentRoutes);

// Export the configured router for use in the main application
module.exports = router;