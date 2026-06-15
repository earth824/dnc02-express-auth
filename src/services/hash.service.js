import bcrypt from 'bcrypt';

const hashService = {};

const SALT_ROUNDS = 12;

hashService.hash = (plainText) => bcrypt.hash(plainText, SALT_ROUNDS);
hashService.compare = (plainText, hashedValue) =>
  bcrypt.compare(plainText, hashedValue);

export { hashService };
