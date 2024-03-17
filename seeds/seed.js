// Import necessary modules
const sequelize = require('../config/connection'); // Import Sequelize instance from connection config
const seedUser = require('./userData'); // Import function to seed user data
const seedAppointments = require('./appointmentData'); // Import function to seed appointment data

// Seed database function
const seedDatabase = async () => {
    // Synchronize database schema (drop and recreate tables if force: true)
    await sequelize.sync({ force: true });

    // Seed user data
    await seedUser();

    // Seed appointment data (after users are created)
    await seedAppointments();

    // Exit the process
    process.exit(0);
};

// Execute the seedDatabase function
seedDatabase();