const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// Sets the PORT for the server to listen on
const port = process.env.PORT || 3001;
// Create Express app
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes());
// Connection callback for DB connection
db.once('open', () => {
    // Server will listen on specified port
    app.listen(PORT, () => {
        console.log(`Server is running on port ${port}!`);
    });
});
