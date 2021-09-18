const initialState = {};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_DATA":
      return payload;
    default:
      return state;
  }
};

export default dataReducer;
