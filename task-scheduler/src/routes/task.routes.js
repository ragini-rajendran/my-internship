const express = require('express');
const taskController = require('../controllers/task.controller');

const router = express.Router();

router.post('/tasks', taskController.createTask);

module.exports = router;