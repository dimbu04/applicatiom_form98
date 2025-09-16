const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


// Handle form submission
app.post("/submit", (req, res) => {
  const {
    username,
    email,
    password,
    confirmPassword
  } = req.body;

  console.log("📥 Form Submission Received:");
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  res.send(`
    <h2 style="font-family: Arial; color: green; text-align: center;">
      ✅ Registration Successful!
    </h2>
    <p style="text-align: center;">
      <a href="/">Go back to form</a>
    </p>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});