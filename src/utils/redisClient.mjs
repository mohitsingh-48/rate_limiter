import Redis from "ioredis";
import dotenv from "dotenv";
import { logEvent } from "./logger.mjs";

dotenv.config();

export const redisClient = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379
});

redisClient.on("connect", () => logEvent("Redis connected"));
redisClient.on("error", (err) => logEvent(`Redis Error: ${err}`));
