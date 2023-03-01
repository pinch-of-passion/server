const { sequelize, DataTypes } = require("./sequelize");
const User = sequelize.define(
    "user",
    {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        lname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false
        },
    },
    {
        freezeTableName: true,
        timestamps: false,
    }

);
module.exports = User;