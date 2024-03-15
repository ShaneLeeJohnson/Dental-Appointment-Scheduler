// import necessary modules
const { Model, DataTypes } = require('sequelize'); // Destructure Model and DataTypes from Sequelize
const sequelize = require('../config/connection'); // Import the sequelize instance from the connection file

// Define the Appointment model class extending Sequelize Model
class Appointment extends Model {}

// Initialize the Appointment model with properties and configurations
Appointment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_of_birth: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user', // This model references the User model (for foreign key relationship)
                key: 'id',
            },
        },
    },
    {
        sequelize, // Specifies the sequelize instance to use for the model
        freezeTableName: true, // Prevents Sequelize from pluralizing the table name
        underscored: true, // Converts camelCase column names to snake_case
        modelName: 'appointment', // Defines the model name as appointment
    }
);

// Export the Appointment model for use in other parts of the application
module.exports = Appointment;