// Import the Sequelize library for database connection
const Sequelize = require('sequelize');
// Loads the environment variables from a .env file
require('dotenv').config();

// Declares a variable to hold the Sequelize instance
let sequelize;

// Check if a JAWSDB_URL environment is set (for Heroku deployment)
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL); // Creates a Sequelize instance using JAWSDB_URL
} else {
    // If not using Heroku, use local database credentials
    sequelize = new Sequelize(
        process.env.DB_NAME, // Database name from environment variable
        process.env.DB_USER, // Database username from environment variable
        process.env.DB_PASSWORD, // Database password from environment variable
        {
            host: 'localhost', // Database host (localhost for local development)
            dialect: 'mysql', // Database dialect (MySQL in this case)
            port: 3306, // Database port (default MySQL port)
        }
    );
}

// Export the Sequelize instance for use in other parts of the application
module.exports = sequelize;