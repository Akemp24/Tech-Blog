const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// creating the comment class that is based of off Model

class Comment extends Model {}
// creating a id, comment, and user_id for the comment class
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment: {
        type: DataTypes.STRING,
        validate: {
            len: [3]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
}, {
    // sequilizing data
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
});

// exporting the comment
module.exports = Comment;