import axiosInstance from "../../../utils/axiosInstance";
import {
  SIGNIN_FAIL,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./action.type";

const signinStart = () => ({
  type: SIGNIN_START,
});

const signinSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

const signinFailed = (error) => ({
  type: SIGNIN_FAIL,
  pyaload: error,
});

export const signin = (user, message, navigation) => {
  return (dispatch) => {
    dispatch(signinStart());
    axiosInstance
      .post("/signin", user)
      .then((response) => {
        dispatch(signinSuccess(response.data));
        message("Signin Success");
        navigation.navigate("MyTabs");
      })
      .catch((err) => {
        console.log(err);
        message(err.response?.data?.message);
        dispatch(signinFailed(err));
      });
  };
};

const signupStart = () => ({
  type: SIGNUP_START,
});

const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

const signupFailed = (error) => ({
  type: SIGNUP_FAIL,
  pyaload: error,
});

export const signup = (user, message, navigation) => {
  return (dispatch) => {
    dispatch(signupStart());
    axiosInstance
      .post("/signup", user)
      .then((response) => {
        dispatch(signupSuccess(response.data));
        message("Signup Success");
        navigation.navigate("MyTabs");
      })
      .catch((err) => {
        console.log(err);
        message(err.response?.data?.message);
        dispatch(signupFailed(err));
      });
  };
};
