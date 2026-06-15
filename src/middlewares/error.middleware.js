import z, { ZodError } from 'zod';

export const errorMiddleware = (err, req, res, next) => {
  // VALIDATION ERROR: 400
  // if (err.name === 'ZodError') {
  if (err instanceof ZodError) {
    res
      .status(400)
      .json({ message: 'Validation failed', details: z.flattenError(err) });
    return;
  }

  res.status(500).json({ message: err.message });
};
