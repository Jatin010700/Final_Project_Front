// userReducer.js
import { LOGIN, LOGOUT } from '../User_Action/action';

const initialState = {
  username: '',
  isLoggedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        username: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
