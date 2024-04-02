export type User = Entity & {
  name?: string;
  email: string;
  role: string;

  avatar?: string;
  googleId?: string;
};
