const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task.routes');

const app = express();

app.use(bodyParser.json());

app.use('/', taskRoutes);

module.exports = app;