import { WS_SERVER_URL } from '../constants/constants';
import { ROOMS_UPDATE } from './rooms';

export const WS_ON_OPEN = 'WS_ON_OPEN';
export const WS_ON_MESSAGE = 'WS_ON_MESSAGE';

const socket = new WebSocket(WS_SERVER_URL);

const sendMessageOnSocket = (ws, type, room) => {
  ws.send(JSON.stringify({
    type: type,
    room: room
  }));
};

export const setupWebsocket = () => {
  return dispatch => {

    socket.onopen = function () {
      dispatch({ type: WS_ON_OPEN, payload: true });
    };

    socket.onmessage = function (message) {
      dispatch({ type: ROOMS_UPDATE, payload: JSON.parse(message.data) });
    };

  };
};

export const subscribe = (roomName) => {
  console.log('SUBSCRIBE', roomName);
  return dispatch => {
    sendMessageOnSocket(socket, 'SUBSCRIBE', roomName);
  }
}

export const unsubscribe = (roomName) => {
  console.log('UNSUBSCRIBE', roomName);
  return dispatch => {
    sendMessageOnSocket(socket, 'UNSUBSCRIBE', roomName);
  }
}
