const initialState = {
  dataAuth: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_DATA":
      return {
        ...state,
        dataAuth: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
