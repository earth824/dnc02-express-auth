import { hashService } from '../services/hash.service.js';
import { userService } from '../services/user.service.js';
import { authValidator } from '../validators/auth.validator.js';
import * as authService from '../services/auth.service.js';

const authController = {};

authController.register = async (req, res, next) => {
  // validate client data req.body
  const data = authValidator.validateRegister(req.body);
  // data ===> { email, password }

  // hash password
  const hashedPassword = await hashService.hash(data.password);

  // insert new data into users table
  await userService.create({ email: data.email, password: hashedPassword });

  // sent success response
  res.status(201).json({ message: 'User registered successfully' });
};

authController.login = async (req, res, next) => {
  const { email, password } = req.body;
  const access_token = await authService.login(email, password);
  // sent success response
  res.json({ access_token });
};

authController.getMe = async (req, res, next) => {
  const userId = req.user.sub;
  const user = await userService.findById(userId);
  res.json({ user });
};

export { authController };
