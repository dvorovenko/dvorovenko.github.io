// Set of helpers to handle common defaulting behavior with env vars.
const env = (envName, value) => {
  let defaultVal = value;
  if (process.env.NODE_ENV === 'test') {
    defaultVal = (testConfig || {})[envName] || defaultVal;
  }
  return process.env[envName] || defaultVal;
};
export const NODE_ENV = env('NODE_ENV', 'development');
export const IS_PROD = NODE_ENV === 'production';
export const REQUEST_LOGGER_MODE = env(
  'REQUEST_LOGGER_MODE',
  IS_PROD ? 'combined' : 'dev'
);
export const PORT = env('PORT', 4002);
process.env.DEBUG = env('DEBUG', 'night*');
export const APP_NAME = 'Night';
export const REQUEST_SIZE_LIMIT = env('REQUEST_SIZE_LIMIT', '50mb');
export const URL_ENCODING_REQUEST_PARAMETER_LIMIT = env(
  'URL_ENCODING_REQUEST_PARAMETER_LIMIT',
  '3000'
);
export const MONGO_URI = env(
  'MONGO_URI',
  'mongodb://localhost:27017/nightDB'
);
