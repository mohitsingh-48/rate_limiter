import express from "express";
import { rateLimiter, loadConfig } from "../src/index.mjs";
import userConfig from "./config/userConfig.mjs"; 

const app = express();

const config = loadConfig(userConfig);

app.use(rateLimiter(config.rateLimit.algorithms));

app.get("/", (req, res) => {
    res.send("Welcome to SpeedGuard API 🚀");
});

app.listen(3000, () => console.log("Server running on port 3000"));
