import { createError } from '../utils/create-error.js';
import { hashService } from './hash.service.js';
import { userService } from './user.service.js';

export const login = async (email, password) => {
  // find user by email(come from req.body)
  const user = await userService.findByEmail(email);
  if (!user) {
    createError(401, 'Invalid email or password');
  }

  // compare password from req.body to hashed password in the database
  const isMatch = await hashService.compare(password, user.password);
  if (!isMatch) {
    createError(401, 'Invalid email or password');
  }

  // generate access token using jwt
};
