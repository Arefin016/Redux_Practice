// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

//state
const initialCounterState = {
  count: 0,
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

const addUser = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};


// 1. state
// 2. dispatch action
// 3. reducer
// 4. store