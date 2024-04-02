import { AxiosError } from 'axios';

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof AxiosError) {
    return getErrorMessage(error.response?.data);
  }

  const mgs =
    error && typeof error === 'object' && 'message' in error
      ? String(error.message)
      : 'Some thing error';
  return mgs;
};
