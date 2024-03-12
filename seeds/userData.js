const { User } = require('../models');

const userData = [
    {
        "username": "user1",
        "password": "password123"
    },
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
});

module.exports = seedUser;