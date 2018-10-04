import { combineReducers } from 'redux';
import rooms from './rooms';
import websockets from './websockets';
import ui from './ui';

export default combineReducers({
  rooms,
  websockets,
  ui
});
