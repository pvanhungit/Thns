import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().min(1, 'Email is required').email({ message: 'Email is invalid' }),
  password: z.string().min(1, 'Password is required'),
});
