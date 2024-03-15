// Import the Appointment model from the models directory
const { Appointment } = require('../models');

// Define an array of appointment objects representing sample data
const appointmentData = [
  // appointment objects with details like name, date, reason, etc.
  {
    first_name: "John",
    last_name: "Doe",
    date_of_birth: new Date("1980-01-01"),
    phone_number: "555-555-5555",
    date: new Date("2024-03-15"),
    time: "10:00 AM",
    reason: "Cavities",
    user_id: 1,
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    date_of_birth: new Date("1990-02-02"),
    phone_number: "123-456-7890",
    date: new Date("2024-03-18"),
    time: "2:00 PM",
    reason: "Tooth loss",
    user_id: 1,
  },
  {
    first_name: "Michael",
    last_name: "Lee",
    date_of_birth: new Date("2000-03-03"),
    phone_number: "987-654-3210",
    date: new Date("2024-03-20"),
    time: "11:00 AM",
    reason: "Bad breath",
    user_id: 1,
  },
  {
    first_name: "Sarah",
    last_name: "Jones",
    date_of_birth: new Date("1975-04-04"),
    phone_number: "000-111-2222",
    date: new Date("2024-03-22"),
    time: "4:00 PM",
    reason: "Tooth loss",
    user_id: 1,
  },
  {
    first_name: "David",
    last_name: "Miller",
    date_of_birth: new Date("1985-05-05"),
    phone_number: "777-888-9999",
    date: new Date("2024-03-25"),
    time: "1:30 PM",
    reason: "Clean teeth",
    user_id: 1,
  },
];

// Function to seed appointments in bulk
const seedAppointments = () => Appointment.bulkCreate(appointmentData);

// Export the seedAppointments function for use in other parts of the application
module.exports = seedAppointments;