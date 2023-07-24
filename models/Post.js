// require the needed packages/files
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// creating a class called Post from the Model class
class Post extends Model {}

// initializing Post with id, title, and user_id
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        // sequelize data
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

// export the Post class
module.exports = Post;