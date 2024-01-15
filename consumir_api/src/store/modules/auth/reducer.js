import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoad: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('Reducer', action.payload);
      return state;
    }

    default: {
      return state;
    }
  }
}
