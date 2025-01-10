// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
  count: 0,
  users: "",
};
const initialUserState = {
  users: [{ name: "Shah Arefin Ahmed" }],
};

//action - Object - type, payload
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

// create reducer for counter
const counterReducer = (state = incrementCounterAction, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      //
      break;
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
      //
      break;

    default:
      state;
  }
};

// 1. state
// 2. dispatch action
// 3. reducer
// 4. store
