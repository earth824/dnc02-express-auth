import { hashService } from '../services/hash.service.js';
import { authValidator } from '../validators/auth.validator.js';

const authController = {};

authController.register = async (req, res, next) => {
  // validate client data req.body
  console.log('BODY: ', req.body);
  const data = authValidator.validateRegister(req.body);
  // data ===> { email, password }

  // hash password
  const hashedPassword = await hashService.hash(data.password);

  // insert new data into users table
  // sent success response
};

authController.login = (req, res, next) => {};

export { authController };
