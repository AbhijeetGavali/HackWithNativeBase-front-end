import axiosInstance from "../../../utils/axiosInstance";
import { SIGNIN_FAIL, SIGNIN_START, SIGNIN_SUCCESS } from "./action.type";

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
