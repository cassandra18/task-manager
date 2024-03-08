module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        due_date: DataTypes.DATE,
        priority: DataTypes.STRING,
        status:DataTypes.STRING
    });

    Task.associate = models => {
        Task.hasMany(models.Subtask, {as : 'subtask', foreignkey: 'task_id' });
        Task.belongsToMany(models.Category, { through: 'TaskCategory', foreignkey: 'task_id' });
        Task.belongsToMany(models.Tag, { through: 'TaskTag', foreignKey: 'task_id' });
    };

    return Task;

};