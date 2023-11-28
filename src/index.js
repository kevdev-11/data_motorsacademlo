const compression = require('express-compression');
const express = require('express');
const usersRoutes = require('./middlewares/users/users.routes');
const motorcyclesRoutes = require('./middlewares/motorcycles/repairs.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());

app.use('/api/v1', usersRoutes);
app.use('/api/v1', motorcyclesRoutes);


module.exports = app;