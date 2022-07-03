import axiosInstance from "../../../utils/axiosInstance";
import {
  GET_CARDS_FAIL,
  GET_CARDS_START,
  GET_CARDS_SUCCESS,
  SCAN_CARD_FAIL,
  SCAN_CARD_START,
  SCAN_CARD_SUCCESS,
} from "./action.type";

const scanCardStart = () => ({
  type: SCAN_CARD_START,
});

const scanCardSuccess = (id) => ({
  type: SCAN_CARD_SUCCESS,
  payload: id,
});

const scanCardFail = (error) => ({
  type: SCAN_CARD_FAIL,
  payload: error,
});

export const scanCard = (id, navigation) => {
  return (dispatch) => {
    dispatch(scanCardStart());
    axiosInstance
      .post("/card/scan", { cardId: id })
      .then((response) => {
        dispatch(scanCardSuccess(response.data));
        navigation.navigate("MyTabs");
      })
      .catch((err) => {
        dispatch(scanCardFail(err));
      });
  };
};

const getCardStart = () => ({
  type: GET_CARDS_START,
});

const getCardSuccess = (card) => ({
  type: GET_CARDS_SUCCESS,
  payload: card,
});

const getCardFail = (error) => ({
  type: GET_CARDS_FAIL,
  payload: error,
});

export const getCard = () => {
  return (dispatch) => {
    dispatch(getCardStart());
    axiosInstance
      .get("/card")
      .then((response) => {
        dispatch(getCardSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getCardFail(err));
      });
  };
};
