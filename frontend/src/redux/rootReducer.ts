import { SET_SOCKET } from './types';

const initialState = {};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case typeof SET_SOCKET:
      return { socketClient: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
