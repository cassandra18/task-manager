const { Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Tag = Sequelize.define('Tag', {
        name: DataTypes.STRING
    });

    Tag.associate =  models => {
        Tag.belongsToMany(models.Task, { through: 'TaskTag', fcoreignKey: 'tag_id' });
    };

    return Tag;
};
