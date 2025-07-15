// models/students.js

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require('../utils/db-connection');

const students = sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Optional: ensure unique emails
    }
});

module.exports = students;
