import { jwtService } from '../services/jwt.service.js';
import { createError } from '../utils/create-error.js';

export const authenticate = (req, res, next) => {
  // Extract access token from authorization header
  // Authorization: Bearer access_token
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    createError(400, 'Invalid authorization headers');
  }

  const token = authorization.split(' ')[1];

  try {
    const payload = jwtService.verify(token);
    req.user = payload;
  } catch (err) {
    console.error(err);
    createError(401, 'Invalid token or token has been expired');
  }

  next();
};
