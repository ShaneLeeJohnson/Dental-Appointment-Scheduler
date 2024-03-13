const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedAppointments = require('./appointmentData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedAppointments();

    process.exit(0);
};

seedDatabase();