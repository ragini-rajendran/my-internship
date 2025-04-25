const schedulerService = require('../services/scheduler.service');

exports.createTask = async (req, res) => {
  try {
    const taskData = req.body;

    // Basic validation (you'll likely want more robust validation)
    if (!taskData.task_type || !taskData.execution_time) {
      return res.status(400).json({ error: 'Task type and execution time are required.' });
    }

    const taskId = await schedulerService.scheduleTask(taskData);

    res.status(201).json({ task_id: taskId });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Failed to create task.' });
  }
};