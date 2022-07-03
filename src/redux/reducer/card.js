import {
  GET_CARDS_START,
  SCAN_CARD_FAIL,
  SCAN_CARD_START,
  SCAN_CARD_SUCCESS,
} from "../action/action.type";

const initalState = {
  cards: [],
  loading: false,
};
const cardReducer = (state = initalState, action) => {
  switch (action.type) {
    case SCAN_CARD_START:
      return {
        ...state,
        loading: true,
      };

    case SCAN_CARD_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        loading: false,
      };

    case SCAN_CARD_FAIL:
      return {
        ...state,
        loading: false,
      };

    case GET_CARDS_START:
      return {
        ...state,
        loading: true,
      };

    case GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        loading: false,
      };

    case GET_CARDS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default cardReducer;
