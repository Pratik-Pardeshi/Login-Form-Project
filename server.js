const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add your authentication logic here

    // For now, just send a success message
    res.send(`Logged in as: ${username}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
