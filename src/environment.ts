import dotenv from "dotenv";

const DEFAULT_PORT = 8081;

const result = dotenv.config();
if (result.error) {
  throw result.error;
}

interface Environment {
  logLevel: string;
  file_location: string;
  port: number | string;
}

export const environment: Environment = {
  logLevel: process.env.LOG_LEVEL || "info",
  file_location: process.env.FILE_LOCATION || "info",
  port: process.env.PORT || DEFAULT_PORT,
};
