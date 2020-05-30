import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../config/constants";

export const authUser = () => {
  return {
    type: AUTH_USER,
    payload: async () => {
      const data = dummy;
      return data;
    }
  };
};

export const loginUser = () => {
  return {
    type: LOGIN_USER,
    payload: async () => {}
  };
};

export const registerUser = () => {
  return {
    type: REGISTER_USER,
    payload: async () => {}
  };
};
