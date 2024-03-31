import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/hgv2";
const SMTP_EMAIL = process.env.SMTP_EMAIL || "smtp.gmail.com";
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || "password";
const REDIS_HOST = process.env.REDIS_HOST || "localhost";
const REDIS_PORT = process.env.REDIS_PORT || 6379;
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || "";

export {
  PORT,
  MONGODB_URI,
  JWT_SECRET,
  SMTP_EMAIL,
  SMTP_PASSWORD,
  REDIS_HOST,
  REDIS_PORT,
  REDIS_PASSWORD,
};
