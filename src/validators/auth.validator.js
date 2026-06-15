import z from 'zod';

const registerSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string('Password is required')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Password must have at least 6 characters, one lower, one upper and one number'
    )
});

const authValidator = {};

authValidator.validateRegister = (data) => registerSchema.parse(data);

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z.string('Password must be a string').min(1, 'Password is required')
});

export { authValidator, loginSchema };
