import z, { ZodError } from 'zod';

export const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  // VALIDATION ERROR: 400
  // if (err.name === 'ZodError') {
  if (err instanceof ZodError) {
    res
      .status(400)
      .json({ message: 'Validation failed', details: z.flattenError(err) });
    return;
  }

  // HANDLE ERROR FROM CREATE ERROR
  if (err.statusCode) {
    res
      .status(err.statusCode)
      .json({ message: err.message, details: err.details });
    return;
  }

  res.status(500).json({ message: err.message });
};
