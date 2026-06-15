import z from 'zod';

const registerSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
      'Password must have at least 6 characters. Must contain at least 1 number. Must contain at least 1 lower and contain at least 1 upper'
    )
});

const input = {
  email: 'a@mailo.com',
  password: '123456a'
};

// parse => data ==> if fail: throw error
try {
  const data = registerSchema.parse(input);
  console.log(data);
} catch (err) {
  console.log(z.flattenError(err));
}

// safeParse => { success, data, error } ==> if fail: return success false
const result = registerSchema.safeParse(input);
console.log(result);
