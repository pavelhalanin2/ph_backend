import * as dotenv from 'dotenv';

dotenv.config();

const APP_ENV: Record<string, string> = {
  GLOBAL_PREFIX: process.env.GLOBAL_PREFIX || '/api',
  PORT: process.env.PORT || '80',
};

export default APP_ENV;
