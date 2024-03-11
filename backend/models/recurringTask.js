module.exports = (sequelize, DataTypes) => {
    const RecurringTask = sequelize.define('RecurringTask', {
        title: DataTypes.SRING,
        description: DataTypes.TEXT,
        frequency: DataTypes.STRING, // Daily, weekly, monthly, yearly
    });

    RecurringTask.associate = models => {
        RecurringTask.hasMany(models.Task, { foreignKey: 'recurring_task_id' });
    };

    return RecurringTask;
}