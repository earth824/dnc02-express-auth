export const createError = (statusCode, message, details) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  err.details = details;

  throw err; // { message, statusCode, details. ... }
};
