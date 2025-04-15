const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');
const servicesRouter = require('./routes/services');

const app = express();
const PORT = process.env.PORT || 8080; 

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/services', servicesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;