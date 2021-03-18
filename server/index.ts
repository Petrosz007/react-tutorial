import { Express } from "express";
import nodeFetch from "node-fetch";
import { Currency } from "./interfaces";
import { initializeDatabase, Todo } from "./sequelize";

const app: Express = require("express")();
const port = 4000;
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(require('cors')());

app.get("/bitcoin", async (req, res) => {
    let currencies = await nodeFetch("https://blockchain.info/ticker");
    const data = (await currencies.json()) as Currency;
    res.send(data);
});

app.get("/todos", async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
});
app.post("/todos", async (req, res) => {
    const newTodo = await Todo.create(req.body);
    res.json(newTodo);
});

app.listen(port, async () => {
    await initializeDatabase();
    console.log(`Example app listening at http://localhost:${port}`);
});
