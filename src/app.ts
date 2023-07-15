require("dotenv").conf();
import express from "express";
import config from "config";
import { connect } from "mongoose";
import connectToDb from "./utils/dbConnection";
import log from "./utils/logger";
const app = express();

const port = config.get("port");

app.listen(port, () => {
    log.info(`App started at http://localhost:${port}`),

  connectToDb();

});

