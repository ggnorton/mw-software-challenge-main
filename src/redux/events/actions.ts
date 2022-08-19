export const GET_EVENTS_REQUESTED = "events/GET_EVENTS_REQUESTED";
export const GET_EVENTS_SUCCESS = "events/GET_EVENTS_SUCCESS";
export const GET_EVENTS_FAILURE = "events/GET_EVENTS_FAILURE";
export const CREATE_EVENT_REQUEST = "events/CREATE_EVENT_REQUEST"
export const CREATE_EVENT_SUCCESS = "events/CREATE_EVENT_SUCCESS"
export const CREATE_EVENT_FAILURE = "events/CREATE_EVENT_FAILURE"
export const DELETE_EVENT_REQUEST = "events/DELETE_EVENT_REQUEST"
export const DELETE_EVENT_SUCCESS = "events/DELETE_EVENT_SUCCESS"
export const DELETE_EVENT_FAILURE = "events/DELETE_EVENT_FAILURE"
export const EDIT_EVENT_SUCCESS = "events/EDIT_EVENT_SUCCESS"

export const getEventsRequest = () => ({
  type: GET_EVENTS_REQUESTED,
});

export const getEventsSuccess = (data) => ({
  type: GET_EVENTS_SUCCESS,
  payload: data,
});

export const getEventsFailure = (error) => {
  return {
    type: GET_EVENTS_FAILURE,
    payload: error
  };
};

export const createEventRequest = () => ({
  type: CREATE_EVENT_REQUEST,
})

export const createEventSuccess = (data) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: data,
})

export const editEventSuccess = (data) => ({
  type: EDIT_EVENT_SUCCESS,
  payload: data,
})

export const createEventFailure = (error) => ({
  type: CREATE_EVENT_FAILURE,
  payload: error,
})

export const deleteEventRequest = () => ({
  type: DELETE_EVENT_REQUEST
})

export const deleteEventSuccess = (id) => ({
  type: DELETE_EVENT_SUCCESS,
  payload: id
})

export const deleteEventFailure = (error) => ({
  type: DELETE_EVENT_FAILURE,
  payload: error,
})