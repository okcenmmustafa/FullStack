export const initialState = {
  loading: false,
  coins: 20,
  error: "",
  status: false,
};

export const rollingPrice = () => {
  return {
    type: "ROLLING_PRICE",
  };
};
export const ballance = (coins) => {
  return {
    type: "BALLANCE",
    payload: coins,
  };
};
