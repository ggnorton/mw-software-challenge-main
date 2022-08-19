import {
  deleteEventRequest,
  deleteEventSuccess,
  deleteEventFailure,
  editEventSuccess,
  getEventsFailure,
  getEventsRequest,
  getEventsSuccess,
  createEventRequest,
  createEventSuccess,
  createEventFailure,
} from "./actions";

const cahcnedEventsKey = 'cachedEvents'

export const getEvents = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(getEventsRequest());
      if (!window.localStorage.getItem(cahcnedEventsKey)) {
        const result = await fetch("events.json");
        const json = await result.json();
        window.localStorage.setItem(cahcnedEventsKey, JSON.stringify(json))
        return dispatch(getEventsSuccess(json));
      }
      
      return dispatch(getEventsSuccess(JSON.parse(window.localStorage.getItem(cahcnedEventsKey))))
    } catch (e) {
      dispatch(getEventsFailure(e));
    }
  };
};

export const createEvent = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(createEventRequest())
      // Pretending we're making request to push event to the backend
      
      // This should be handled on backend
      if (data.id) {
        dispatch(editEventSuccess(data))
      } else {
        dispatch(createEventSuccess(data))
      }

      const { events: { events } } = getState()
      window.localStorage.setItem(cahcnedEventsKey, JSON.stringify(events))
    } catch (e) {
      dispatch(createEventFailure(e))
    }
  }
}

export const deleteEvent = (id) => {
  return async (dispatch, getState) => {
    try {
      dispatch(deleteEventRequest())
      // Pretending we're making request to delete event to the backend
      dispatch(deleteEventSuccess(id))
      const { events: { events } } = getState()
      window.localStorage.setItem(cahcnedEventsKey, JSON.stringify(events))
    } catch (e) {
      dispatch(deleteEventFailure(e))
    }
  }
}