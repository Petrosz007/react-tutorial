import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    return sequelize.define("todo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        text: DataTypes.STRING,
        owner: DataTypes.STRING,
        state: DataTypes.ENUM("new", "started", "finished"),
    });
};
