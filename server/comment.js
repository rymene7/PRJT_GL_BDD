const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Comment = sequelize.define('Comment', {
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false
});

module.exports = Comment;
