import { setCookie, eraseCookie } from '../../utils/cookiesUtil';
import {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserFailure,
} from './actions';

const cookieName = 'login'

export const signIn = () => {
  return async (dispatch) => {
    try {
      dispatch(loginUserRequest());
      // Pretend to do login request
      setCookie(cookieName, 'true', 7)
      return dispatch(loginUserSuccess())
    } catch (e) {
      dispatch(loginUserFailure(e));
    }
  };
};

export const signOut = () => {
  return async (dispatch) => {
    try {
      dispatch(logoutUserRequest())
      // Pretending we're making request to delete event to the backend
      dispatch(logoutUserSuccess())
      eraseCookie(cookieName)
    } catch (e) {
      dispatch(logoutUserFailure(e))
    }
  }
}