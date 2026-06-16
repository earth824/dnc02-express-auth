// dotenv load environment variable into process object: process.env
import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { notFoundMiddleware } from './middlewares/not-found.middleware.js';
import { authRouter } from './routes/auth.route.js';
import { env } from './config/env.js';

const app = express();

// parsing request body middleware
app.use(express.json());

// routing middleware
app.use('/auth', authRouter);

// not found handling middleware
app.use(notFoundMiddleware);

// error handling middleware
app.use(errorMiddleware);

const PORT = env.PORT;
app.listen(PORT, (error) => {
  if (error) console.error(error);
  else console.log(`server running on port: ${PORT}`);
});
