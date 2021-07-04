import { initialState } from "../../actions/slotMachine/user";

const ROLLING_PRICE = "ROLLING_PRICE";
const BALLANCE = "BALLANCE";

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROLLING_PRICE:
      return {
        ...state,
        loading: true,
        status: false,
        coins: state.coins - 1,
      };
    case BALLANCE:
      return {
        ...state,
        loading: true,
        status: action.payload > 0 ? true : false,
        coins: state.coins + action.payload,
      };

    default:
      return state;
  }
};

export default coinsReducer;
