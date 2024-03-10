// models/category.js
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      name: DataTypes.STRING
    });
  
    Category.associate = models => {
      Category.belongsToMany(models.Task, { through: 'TaskCategory', foreignKey: 'category_id' });
    };
  
    return Category;
  };
  