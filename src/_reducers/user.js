import { AUTH_USER, LOGIN_USER, REGISTER_USER } from "../config/constants";

const initialState = {
  data: [],
  loading: true,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `${AUTH_USER}_PENDING`:
    case `${LOGIN_USER}_PENDING`:
    case `${REGISTER_USER}_PENDING`:
      return {
        ...state,
        loading: true
      };
    case `${AUTH_USER}_FULFILLED`:
    case `${LOGIN_USER}_FULFILLED`:
    case `${REGISTER_USER}_FULFILLED`:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case `${AUTH_USER}_REJECTED`:
    case `${LOGIN_USER}_REJECTED`:
    case `${REGISTER_USER}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
