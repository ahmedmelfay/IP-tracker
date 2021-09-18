const initialState = true;

const loading = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADED":
      return payload;
    default:
      return state;
  }
};

export default loading;
