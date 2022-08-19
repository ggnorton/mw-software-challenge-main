import * as actions from "./actions";

const initialState = {
  events: [],
  isLoading: false,
  error: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_EVENTS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        error: undefined
      }
    case actions.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: action.payload
      }
    case actions.GET_EVENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case actions.CREATE_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case actions.EDIT_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: state.events.map(event => event.id === action.payload.id ? action.payload : event),
      }
    case actions.CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: [...state.events, action.payload],
      }
    case actions.CREATE_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case actions.DELETE_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined,
      }
    case actions.DELETE_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        events: state.events.filter(event => event.id !== action.payload),
      }
    case actions.DELETE_EVENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};

export default reducer;
