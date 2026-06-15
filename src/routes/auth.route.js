import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { loginSchema } from '../validators/auth.validator.js';
import { validate } from '../middlewares/validate.middleware.js';

const authRouter = Router();

authRouter.post('/register', authController.register);
authRouter.post(
  '/login',
  validate({ body: loginSchema }),
  authController.login
);
export { authRouter };

// req.body, req.params, req.query
// validate both req.body and req.params
// todoRouter.put('/:todoId', validate({ body: updateTodoSchema, params: intIdSchema }))
