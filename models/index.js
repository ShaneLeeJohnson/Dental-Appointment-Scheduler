const User = require('./user');
const Appointment = require('./appointment');

User.hasMany(Appointment, {
    foreignKey: 'user_id',
});

Appointment.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Appointment };