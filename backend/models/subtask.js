 module.exports = (sequelize, DataTypes) => {
    
    //Define a sequelize model named 'Subtask' using sequelize.define() method. It represents the subtask table in the database
    const Subtask = sequelize.define('Subtask', {
        title: DataTypes.STRING, //defines a column named title in the subtask table with the datatype string
        description: DataTypes.TEXT, //defines a column named description that describes the substask
        status: DataTypes.STRING
    });
 
    Subtask.associate = models => {
        Subtask.belongsTo(models.Task, { foreignKey: 'task_id' });
    };

    return Subtask;
};