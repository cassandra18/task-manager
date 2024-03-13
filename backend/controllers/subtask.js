const  Task = require('../models/tasks');
const  Subtask = require('../models/subtask');


// Controller function for adding a subtask to a task
const addSubtask = async (req, res) => {
  try {
    // Extract parent task ID and subtask data from the request body
    const { taskId, title, description } = req.body;

    // Validate input data (e.g., check if task ID is provided)

    // Find the parent task by ID
    const parentTask = await Task.findByPk(taskId);

    if (!parentTask) {
      return res.status(404).json({ error: 'Parent task not found' });
    }

    // Create a new subtask instance
    const newSubtask = await Subtask.create({
      title,
      description,
      // Add any other fields you want to include in the subtask
    });

    // Associate the subtask with the parent task
    await parentTask.addSubtask(newSubtask);

    // Send the newly created subtask as a response
    res.status(201).json(newSubtask);
  } catch (error) {
    // Handle errors
    console.error('Error adding subtask:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  addSubtask,
};
