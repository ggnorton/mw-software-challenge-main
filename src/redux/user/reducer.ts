import * as actions from "./actions";

const initialState = {
  user: false,
  isLoading: false,
  error: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_USER_REQUESTED:
      case actions.LOGOUT_USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined
      }
    case actions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: true
      }
    case actions.LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: false
      }
    case actions.LOGIN_USER_FAILURE:
    case actions.LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
