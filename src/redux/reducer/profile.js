import {
  ADD_CARD_FAIL,
  ADD_CARD_START,
  ADD_CARD_SUCCESS,
} from "../action/action.type";

const initalState = {
  card: {
    name: "",
    companyName: "",
    jobTitle: "",
    phoneNumber: "",
    email: "",
    website: "",
    address: "",
    desc: "",
    instagram: "",
    linkdin: "",
    logo: "",
    loading: false,
  },
};

const profileReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_CARD_START:
      return {
        ...state,
        card: {
          ...state.card,
          loading: true,
        },
      };
    case ADD_CARD_SUCCESS:
      return {
        ...state,
        card: {
          ...state.card,
          ...action.payload,
          loading: false,
        },
      };

    case ADD_CARD_FAIL:
      return {
        ...state,
        card: {
          ...state.card,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default profileReducer;
