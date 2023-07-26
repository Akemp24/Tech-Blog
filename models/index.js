const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create the relationships between the different Classes
// Make sure that you can have many post and comments for a user
// Make sure that you can have many comments for a post
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'cascade'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'cascade'
});

module.exports = { User, Post, Comment};