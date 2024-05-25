const express = require('express');
const app = express();
const port = 8000;

// Database connection (assuming you have a `mongoose` setup)
const db = require('./config/mongoose');

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse incoming POST request data
app.use(expressLayout); // Use express-ejs-layouts for view templates

// Static files
app.use(express.static('./assets')); // Serve static files from the 'assets' folder

// View engine setup
app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// Routes
app.use('/', require('./routes/habitRoutes')); 

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error(`Error in running the server on port ${port}`, err);
    return;
  }
  console.log(`Server is running on port ${port}`);
});
