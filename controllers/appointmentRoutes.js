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
        res.redirect('/');
    }
});

// Route to get all appointments for the logged-in user
// Checks if the user is logged in, fetches their appointments, and sorts them by date
router.get('/appointments', async (req, res) => {
    try {
        // Redirect to login page if user is not logged in
        if (!req.session.loggedIn) {
            res.redirect('/');
            return;
        }

        // Retrieve appointments from the database for the logged-in user, ordered by date
        const appointmentData = await Appointment.findAll({
            where: {
                user_id: req.session.user.id // Filters appointments for the logged-in user
            },
            order: [['date', 'ASC']], // Sorts the appointments by date in ascending order
        });

        // Convert the sequelize data into a plain object
        const appointments = appointmentData.map(appointment => appointment.get({ plain: true }));

        // Render the 'appointments' view, passing the appointments data to it
        res.render('appointments', { appointments });
    } catch (err) {
        // Log any errors and send a 500 internal server error response
        console.error('Error fetching appointments:', err);
        res.status(500).send('Error fetching appointments');
    }
});

// Route for fetching appointment details by ID
// Displays the details of a specific appointment if found
router.get('/appointments/:id', async (req, res) => {
    try {
        // Find a single appointment by its 'id'
        const appointmentData = await Appointment.findByPk(req.params.id);
        
        // If no appointment is found, return a 404 not found response
        if (!appointmentData) {
            return res.status(404).send('Appointment not found');
        }
        
        // Convert the sequelize data into a plain object
        const appointment = appointmentData.get({ plain: true });
        
        // Render the 'appointmentDetails' view, passing the appointment data to it
        res.render('appointmentDetails', { appointment });
    } catch (err) {
        // Log any errors and send a 500 internal server error response
        console.error('Error fetching appointment:', err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update an appointment's details
// Allows a user to edit and update an appointment, then redirects to the appointments list
router.post('/appointments/:id/update', async (req, res) => {
    try {
        // Attempt to update the appointment with the data received from the form submission
        const updated = await Appointment.update(req.body, {
            where: { id: req.params.id } // Update condition to target the appointment by 'id'
        });
        
        // If the update is successful, redirect to the appointments list
        if (updated) {
            res.redirect('/appointments');
        } else {
            // If no rows are updated, it means the appointment was not found; send a 404 response
            res.status(404).send('Appointment not found');
        }
    } catch (err) {
        // Log any errors and send a 500 internal server error response
        console.error('Error updating appointment:', err);
        res.status(500).send('Error updating appointment');
    }
});

// Route to remove an appointment by ID
// Deletes an appointment if found and redirects to the appointments list, or sends a 404 response
router.post('/appointments/:id/remove', async (req, res) => {
    try {
        // Attempt to delete the appointment
        const deleted = await Appointment.destroy({
            where: { id: req.params.id } // Delete condition to target the appointment by 'id'
        });
        
        // If the deletion is successful, redirect to the appointments list
        if (deleted) {
            res.redirect('/appointments');
        } else {
            // If no rows are deleted, it means the appointment was not found; send a 404 response
            res.status(404).send('Appointment not found');
        }
    } catch (err) {
        // Log any errors and send a 500 internal server error response
        console.error('Error removing appointment:', err);
        res.status(500).send('Error removing appointment');
    }
});

// Export the router for use in the main server file.
module.exports = router;
