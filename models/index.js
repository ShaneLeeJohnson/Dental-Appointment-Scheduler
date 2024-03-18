// Import models from their respective files
const User = require('./user');
const Appointment = require('./appointment');

// Define a one-to-many relationship between User and Appointment
User.hasMany(Appointment, {
    foreignKey: 'user_id', // Specify 'user_id' on the Appointment model as the foreign key
});

// Define a many-to-one relationship between Appointment and User 
Appointment.belongsTo(User, {
    foreignKey: 'user_id', // Specify 'user_id' on the Appointment model as the foreign key
});

// Export both User and Appointment models for use in other parts of the application
module.exports = { User, Appointment };