import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state', () => {
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it('should return the initial state for SELECT_COURSE action', () => {
    const newState = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(newState).toEqual(initialState);
  });

  it('should set isNotificationDrawerVisible to true for DISPLAY_NOTIFICATION_DRAWER action', () => {
    const newState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(newState.get('isNotificationDrawerVisible')).toEqual(true);
  });

  // Add more tests for other actions as needed
});
