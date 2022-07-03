import axiosInstance from "../../../utils/axiosInstance";
import { ADD_CARD_FAIL, ADD_CARD_START, ADD_CARD_SUCCESS } from "./action.type";

const addCardStart = () => ({
  type: ADD_CARD_START,
});

const addCardSuccess = (card) => ({
  type: ADD_CARD_SUCCESS,
  payload: card,
});

const addCardFail = (error) => ({
  type: ADD_CARD_FAIL,
  payload: error,
});

export const addCard = (card, navigation) => {
  return (dispatch) => {
    dispatch(addCardStart());
    axiosInstance
      .post("/card", card)
      .then((response) => {
        dispatch(addCardSuccess(response.data));
        navigation.navigate("MyTabs");
      })
      .catch((err) => {
        console.log(err);
        dispatch(addCardFail(err));
      });
  };
};
