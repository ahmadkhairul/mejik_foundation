import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../config/constants";
import { users } from "../data/users";

export const authUser = () => {
  return {
    type: AUTH_USER,
    payload: async () => {
      const email = localStorage.getItem("email");
      let data = "empty";
      if (email !== null) {
        data = users.filter(item => item.email.indexOf(email[0]) > -1);
      }
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
