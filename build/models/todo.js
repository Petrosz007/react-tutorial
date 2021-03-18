"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
exports["default"] = (function (sequelize) {
    return sequelize.define("todo", {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: sequelize_1.DataTypes.STRING,
        owner: sequelize_1.DataTypes.STRING,
        state: sequelize_1.DataTypes.ENUM("new", "started", "finished")
    });
});
