const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// POST request to get the next number
app.post("/api/get-next-num", (req, res) => {
    const num = parseInt(req.body.num, 10);

    // Validate the number
    if (isNaN(num)) {
        return res.status(400).json({ message: "Invalid input", status: "failure" });
    }

    // Respond with the next number
    res.status(200).json({ message: num + 1, status: "success" });
});

module.exports = app;
