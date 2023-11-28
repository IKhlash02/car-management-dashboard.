import knex from "knex";
import { Model } from "objection";
import { Express } from "express";
import express from "express";

// const express = require("express");
const carRouter = require("./src/routes/carRouter");
const userRouter = require("./src/routes/userRouter");
const logRouter = require("./src/routes/logRouter");
const app: Express = express();
const notMember = require("./src/middleware/notMember");

const YAML = require("yamljs");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = YAML.load("./swagger.yaml");

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "binar_challenge5",
    user: "admin",
    password: "12345678",
    // filename: "./dev.sqlite3",
  },
});
const PORT: Number = 8000;
app.use(express.urlencoded());

app.use("/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/v1/cars", notMember, carRouter);
app.use("/v1/users", userRouter);
app.use("/v1/logs", notMember, logRouter);

Model.knex(knexInstance);

app.listen(PORT, () => {
  console.log(`is listening to port ${PORT}`);
});
