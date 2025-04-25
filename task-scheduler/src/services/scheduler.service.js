const schedule = require('node-schedule');

// In-memory storage for scheduled tasks (for now, consider using a database later)
const scheduledJobs = {};
let taskIdCounter = 1;

exports.scheduleTask = async (taskData) => {
  return new Promise((resolve, reject) => {
    try {
      const taskId = `task-${taskIdCounter++}`;
      scheduledJobs[taskId] = { ...taskData, taskId };

      const { execution_time, schedule: cronSchedule, task_type, payload, notification_config } = taskData;

      if (cronSchedule) {
        // Schedule recurring task using cron syntax
        const job = schedule.scheduleJob(cronSchedule, async () => {
          console.log(`Executing recurring task ${taskId} of type: ${task_type} at ${new Date()}`);
          await executeTask(task_type, payload, notification_config);
        });
        scheduledJobs[taskId].job = job;
      } else if (execution_time) {
        // Schedule one-time task
        const date = new Date(execution_time);
        const job = schedule.scheduleJob(date, async () => {
          console.log(`Executing one-time task ${taskId} of type: ${task_type} at ${new Date()}`);
          await executeTask(task_type, payload, notification_config);
          delete scheduledJobs[taskId]; // Remove one-time job after execution
        });
        scheduledJobs[taskId].job = job;
      } else {
        delete scheduledJobs[taskId];
        return reject(new Error('Either execution_time or schedule is required.'));
      }

      resolve(taskId);
    } catch (error) {
      console.error('Error scheduling task:', error);
      reject(error);
    }
  });
};

async function executeTask(taskType, payload, notificationConfig) {
  try {
    console.log(`Executing task of type: ${taskType} with payload:`, payload);

    // Here you would implement the actual logic for different task types
    switch (taskType) {
      case 'send_email':
        // Call notification service to send email
        if (notificationConfig && notificationConfig.type === 'email') {
          await require('./notification.service').sendEmail(notificationConfig.destination, payload.subject, payload.body);
          console.log(`Email sent to ${notificationConfig.destination}`);
        }
        break;
      case 'run_script':
        // Implement logic to run a script
        console.log('Running script...', payload);
        // ... script execution logic ...
        break;
      // Add more task types here
      default:
        console.log(`Unknown task type: ${taskType}`);
    }

    // Send success notification if configured
    if (notificationConfig && notificationConfig.on_success) {
      await require('./notification.service').sendNotification(notificationConfig.type, notificationConfig.destination, `Task of type ${taskType} completed successfully.`);
    }

  } catch (error) {
    console.error(`Error executing task of type ${taskType}:`, error);
    // Send failure notification if configured
    if (notificationConfig && notificationConfig.on_failure) {
      await require('./notification.service').sendNotification(notificationConfig.type, notificationConfig.destination, `Task of type ${taskType} failed: ${error.message}`);
    }
  }
}