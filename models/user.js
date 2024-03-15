// Import necessary modules
const { Model, DataTypes } = require('sequelize'); // Destructure Model and DataTypes from Sequelize
const sequelize = require('../config/connection'); // Import the sequelize instance from the connection file
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Define the User model class extending Sequelize Model
class User extends Model {
    // Instance method to compare password with hashed password during login
    validPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

// Initialize the User model with properties, configuration options, and hooks
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true, // Enforces unique usernames
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8], // Password validation rule: minimum length of 8 characters
            },
        },
    },
    {
        hooks: {
            // Hook to hash password before user creation
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false, // Disable automatic timestamp addition (createdAt, updatedAt)
        freezeTableName: true, // Prevent Sequelize from pluralizing the table name
        underscored: true, // Convert camelCase column names to snake_case
        modelName: 'user', // Define the model name as 'user'
    }
);

// Export the User model for use in other parts of the application
module.exports = User;