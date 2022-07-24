const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
mongoose
  .connect('mongodb://localhost:27017/telecrit')
  .then(() => console.log('Database connected'))
  .catch((error) => {
    console.log('Database connection error', error);
  });

const authRoutes = require('./routes/auth');
const tvShowRoutes = require('./routes/tvshow');

//Middlewares
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', tvShowRoutes);

app.listen(PORT, () => {
  console.log(`APP is listening at PORT ${PORT}`);
});
