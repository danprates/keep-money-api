import { config } from 'dotenv';

config();

export const {
  NODE_ENV = 'development',
  DB_NAME = 'keep-money',
  DB_HOST = 'localhost',
  DB_PORT = 5432,
  DB_USER = 'root',
  DB_PASS = 'root',
} = process.env;
