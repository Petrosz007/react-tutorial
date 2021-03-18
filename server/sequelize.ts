import { Sequelize } from "sequelize";
import TodoModel from "./models/todo";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./server/database.sqlite",
});

export const Todo = TodoModel(sequelize);

export const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false });
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
