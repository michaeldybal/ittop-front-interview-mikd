
import { ROOMS_REQUEST, ROOMS_SUCCESS, ROOMS_FAILURE, ROOMS_SET_ACTIVE, ROOMS_UPDATE } from '../actions/rooms';
import { mergeRoomsAndMessage } from '../helpers/roomsHelper';

const initialState = {
  rooms: [],
  isLoading: false,
  activeRoom: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOMS_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
        isLoading: false
      }

    case ROOMS_FAILURE:
      return {
        ...state,
        isLoading: false
      }

    case ROOMS_SET_ACTIVE:
      return {
        ...state,
        activeRoom: action.payload
      }

    case ROOMS_UPDATE:
      return {
        ...state,
        rooms: mergeRoomsAndMessage(state.rooms, state.activeRoom, action.payload)
      }

    default:
      return state;
  }
};
