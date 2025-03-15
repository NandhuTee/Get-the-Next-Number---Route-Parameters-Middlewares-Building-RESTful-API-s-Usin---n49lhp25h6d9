const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to get the next number
app.get('/api/get-next-num', (req, res) => {
    const { num } = req.body;

    // Check if num is a valid number
    if (typeof num !== 'number' || isNaN(num) || !Number.isInteger(num)) {
        return res.status(400).json({ message: 'Invalid number', status: 'failure' });
    }

    // Return the next number
    res.status(200).json({ message: num + 1, status: 'success' });
});

module.exports = app;
