const { Task, Category, Tag } = require('../models');

// Controller function for assigning categories and tags to a task
const assignCategoriesAndTags = async (req, res) => {
  try {
    // Extract task ID, category IDs, and tag IDs from the request body
    const { taskId, categoryIds, tagIds } = req.body;

    // Validate input data (e.g., check if task ID is provided)

    // Find the task by ID
    const task = await Task.findByPk(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    // Find categories and tags by their IDs
    const categories = await Category.findAll({ where: { id: categoryIds } });
    const tags = await Tag.findAll({ where: { id: tagIds } });

    // Assign categories and tags to the task
    await task.setCategories(categories);
    await task.setTags(tags);

    // Send the updated task as a response
    res.json(task);
  } catch (error) {
    // Handle errors
    console.error('Error assigning categories and tags:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  assignCategoriesAndTags,
};
