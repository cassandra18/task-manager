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

module.exports = {
  createTask,
};
