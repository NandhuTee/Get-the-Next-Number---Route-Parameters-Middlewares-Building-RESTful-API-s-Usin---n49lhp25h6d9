const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// GET request to get the next number
app.get("/api/get-next-num", (req, res) => {
    // Read 'num' from query parameters
    const num = parseInt(req.query.num, 10);

    // Check if the number is valid
    if (isNaN(num)) {
        return res.status(400).json({ message: "Invalid input", status: "failure" });
    }

    // Return the next number
    res.status(200).json({ message: num + 1, status: "success" });
});

module.exports = app;
