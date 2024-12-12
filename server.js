const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle form submissions
app.post("/login", (req, res) => {
    console.log("Form Submission:");
    console.log("Email:", req.body.email);
    console.log("Password:", req.body.password);
    res.send("Form data received successfully!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
