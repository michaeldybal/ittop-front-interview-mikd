import { SERVER_URL } from '../constants/constants';
import RoomModel from '../models/RoomModel';

export const ROOMS_REQUEST = 'ROOMS_REQUEST';
export const ROOMS_SUCCESS = 'ROOMS_SUCCESS';
export const ROOMS_FAILURE = 'ROOMS_FAILURE';
export const ROOMS_SET_ACTIVE = 'ROOMS_SET_ACTIVE';
export const ROOMS_UPDATE = 'ROOMS_UPDATE';

export const getRooms = () => {
  return async dispatch => {
    dispatch({
      type: ROOMS_REQUEST
    });

    try {
      const url = SERVER_URL;
      const response = await fetch(url)
      const responseBody = await response.json();
      const rooms = RoomModel.getObjectsCollection(responseBody);

      dispatch({
        type: ROOMS_SUCCESS,
        payload: rooms
      });

    } catch (error) {
      dispatch({
        type: ROOMS_FAILURE
      });
    }
  };
};

export const activateRoom = (activeRoom) => {
  return {
    type: ROOMS_SET_ACTIVE,
    payload: activeRoom
  };
};