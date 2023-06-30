import { createStore } from 'redux';

// Action types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Action creators
export const loginAction = () => ({
  type: LOGIN,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

// Reducer
const initialState = {
  userLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userLogin: false,
      };
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(reducer);

export default store;
