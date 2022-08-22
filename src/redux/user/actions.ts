export const LOGIN_USER_REQUESTED = "events/LOGIN_USER_REQUESTED";
export const LOGIN_USER_SUCCESS = "events/LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "events/LOGIN_USER_FAILURE";
export const LOGOUT_USER_REQUESTED = "events/LOGIN_USER_REQUESTED";
export const LOGOUT_USER_SUCCESS = "events/LOGIN_USER_SUCCESS";
export const LOGOUT_USER_FAILURE = "events/LOGIN_USER_FAILURE";

export const loginUserRequest = () => ({
  type: LOGIN_USER_REQUESTED,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginUserFailure = (error) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
};

export const logoutUserRequest = () => ({
  type: LOGOUT_USER_REQUESTED,
});

export const logoutUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const logoutUserFailure = (error) => {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: error
  };
};