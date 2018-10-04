
import { LANG_CHANGE } from '../actions/ui';

const initialState = {
  lang: 'en',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LANG_CHANGE:
      return {
        ...state,
        lang: action.payload
      }

    default:
      return state;
  }
};
