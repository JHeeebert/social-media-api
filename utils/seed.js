const { User } = require('../models');
require("mongoose")

const connection = require("../config/connection");

// Seed data
const users = [
    {
        username: "admin",
        email: "admin@example.comm",
        thoughts: [],
    },
    {
        username: "user",
        email: "user@example.com",
        thoughts: [],
    },
    {
        username: "user2",
        email: "user2@example.com",
        thoughts: [],
    },
];

// Console log the database conenction 
console.log(connection);

// Connect to the database
connection.once('open', async () => {
    console.log('You are now connected to the database');

    // Delete any existing users
    await User.deleteMany();

    // Add seed data to the datbase
    await User.collection.insertMany(users);

    console.log(users);
    console.info("Seeding complete! 🌱");
    process.exit(0);
});
