// Import Express Router class
const router = require('express').Router();
// Import User model for user data access
const User = require('../models/user');

// Login route (GET request)
router.get('/', async (req, res) => {
    // render the login template (login.handlebars)
    res.render('login');
});

// Login attempt route (POST request)
router.post('/', async (req, res) => {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Find user by username using User model
        const user = await User.findOne({ where: { username } });

        // Validate username and password
        if (!user || !user.validPassword(password)) {
            throw new Error('Invalid username or password'); // Throw error for invalid credentials
        }

        // Login successful: update session data
        req.session.loggedIn = true;
        req.session.user = user;
        console.log(req.session);

        // Redirect to appointments page after successful login
        res.redirect('/appointments');
    } catch (err) {
        // Login failed: render login with error message
        res.render('login', { message: `Login failed: ${err.message}` });
    }
});

// Logout route (GET request)
router.get('/logout', (req, res) => {
    // Destroy user session data
    req.session.destroy();
    console.log(req.session);
    res.redirect('/'); // Redirect to login page after logout
});

// Export the configured router for use in the main application
module.exports = router;