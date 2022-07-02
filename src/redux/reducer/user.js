import {
  SIGNUP_START,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
} from "../action/action.type";

const initalState = {
  user: {},
  isAuthenticated: false,
  loading: false,
  error: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    case SIGNIN_START:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case SIGNIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
