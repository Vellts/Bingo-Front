// an app to run React app in expressjs

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app

app.use(express.static(path.join(__dirname, 'dist')));

// Put all API endpoints under '/api'

app.get('/api/hello', (req, res) => {

    res.json({message: 'Hello from server!'});
    }
);

// The "catchall" handler: for any request that doesn't

// match one above, send back React's index.html file.

app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname+'/dist/index.html'));
    }

);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Running")
});

