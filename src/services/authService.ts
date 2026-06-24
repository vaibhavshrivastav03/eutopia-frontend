import api from './api';

export const registerUser = async (data: {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
}) => {
  const response = await api.post(
    '/auth/register',
    data
  );

  return response.data;
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const response = await api.post(
    '/auth/login',
    {
      email,
      password,
    }
  );

  return response.data;
};