import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient.on("error", (err) => console.error("Redis Error: ", err));

const connectRedis = async () => {
    await redisClient.connect();
    console.log("Connected to Redis");
};

export { redisClient, connectRedis };