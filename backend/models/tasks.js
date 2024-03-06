module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        due_date: DataTypes.DATE,
        priority: DataTypes.STRING,
        status:DataTypes.STRING
    });

    Task.associate = models => {
        Task.hasMany(models.Sub)
    }
}