import { ACTION_TYPES } from '../actions/index';

const initialState = {
  loading: true,
  data: undefined,
  hasError: false,
  isAuthenticationError: false
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION_TYPES.AUTHENTICATE_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticationError: false
        };
        case ACTION_TYPES.AUTHENTICATE_USER_FAILED:
            return {
              ...state,
              loading: false,
              isAuthenticationError: true
            };
    case ACTION_TYPES.LOAD_DATA:
      return {
        ...state,
        loading: true,
        hasError: false,
        isAuthenticationError: false
      };
      case ACTION_TYPES.LOAD_DATA_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        hasError: false
      };
      case ACTION_TYPES.LOAD_DATA_FAILED:
      return {
        ...state,
        loading: false,
        hasError: true
      };
      case ACTION_TYPES.LOGOUT_USER:
        return {
          ...state,
          loading: false,
          hasError: false,
          data: undefined,
          isAuthenticationError: false
        };
    default:
      return state;
  }
};
