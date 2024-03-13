const Task = require('../models/tasks');

// Controller function for creating a new task
const createTask = async (req, res) => {
  try {
    // Extract task data from the request body
    const { title, description, due_date, priority } = req.body;

    // Validate input data (you can use Joi or express-validator for validation)

    // Create a new task instance
    const newTask = await Task.create({
      title,
      description,
      due_date,
      priority,
      // Add any other fields you want to include in the task
    });

    // Send the newly created task as a response
    res.status(201).json(newTask);
  } catch (error) {
    // Handle errors
    console.error('Error creating task:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function for updating task status
const updateTaskStatus = async (req, res) => {
  try {
    // Extract task ID and new status from the request body
    const { taskId, status } = req.body;

    // Validate input data (e.g., check if task ID is provided)

    // Find the task by ID
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Update task status
    task.status = status;

    // Save the updated task to the database
    await task.save();

    // Send the updated task as a response
    res.json(task);
  } catch (error) {
    // Handle errors
    console.error('Error updating task status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  createTask,  updateTaskStatus,
};
