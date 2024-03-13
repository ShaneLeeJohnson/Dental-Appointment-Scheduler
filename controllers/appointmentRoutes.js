// Import the express router and the Appointment model from the models directory.
const router = require('express').Router();
const { Appointment } = require('../models');

// GET route to display the appointment registration form.
router.get('/register', (req, res) => {
    // Initialize a variable to hold any message that will be passed to the template.
    let message = null;

    // Check if there's a 'success' query parameter. This is set after a successful appointment creation.
    if (req.query.success) {
        message = 'Appointment successfully registered!';
    }
    // Check if there's an 'error' query parameter. This is set if there was an error during appointment creation.
    if (req.query.error) {
        message = 'Error: ' + req.query.error;
    }

    // Render the 'register' view template with the message, if there is one.
    res.render('register', { message });
});

// POST route to handle the appointment form submission.
router.post('/appointment', async (req, res) => {
    // Retrieve the user's ID from the session to associate the appointment with the user.
    const userId = req.session.user?.id;

    // Proceed if a user is logged in (user ID is available in session).
    if (userId) {
        try {
            // Create a new appointment using the form data and associate it with the user ID.
            const newAppointment = await Appointment.create({
                ...req.body,
                user_id: userId // Attach the user ID from session to the appointment.
            });

            // If the appointment is created successfully, redirect back to the register route with a success message.
            res.redirect('/register?success=true');
        } catch (error) {
            // If there's an error, redirect back to the register route with an error message.
            res.redirect('/register?error=' + encodeURIComponent(error.message));
        }
    } else {
        // If no user is logged in, redirect to the login page.
        res.redirect('/login');
    }
});

// Export the router for use in the main server file.
module.exports = router;
