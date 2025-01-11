// state -- count : 0
// action -- increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

// CONSTANTS
const ADD_USER = "ADD_USER";

// State
const initialState = {
  users: ["Shah Arefin Ahmed"],
  count: 1,
};

// action -- Object -- type, payload
const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

// CREATING REDUCER - Reducer does logic handle
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

// store
const store = createStore(userReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Farok Hossain"));
store.dispatch(addUser("Omor Rabby"));
