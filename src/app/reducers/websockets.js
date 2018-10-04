
import { WS_ON_OPEN, WS_ON_MESSAGE } from '../actions/websockets';

const initialState = {
  isOpenWS: false,
  message: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case WS_ON_OPEN:
      return {
        ...state,
        isOpenWS: action.payload
      }

    case WS_ON_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
      
    default:
      return state;
  }
};
