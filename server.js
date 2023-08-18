const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const port = process.env.PORT || 3001;
const app = express();

// An extra funstion to help indicate what activity's server is running in the terminal.
const activity = cwd.includes('01-Activities')
? cwd.split('01-Activities')[1]
: cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${port} in ${activity}`);
    });
});
