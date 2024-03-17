// Import the User model from the models directory
const { User } = require('../models');

// Define an array of user objects with sample data
const userData = [
    {
        "username": "user1",
        "password": "password123" // Plain text password (will be hashed later)
    },
];

// Function to seed users in bulk with individual hooks execution
const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true, // Execute lifecycle hooks for each user during creation
});

// Export the seedUser function for use in other parts of the application
module.exports = seedUser;