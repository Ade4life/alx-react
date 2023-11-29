// notificationReducer.test.js
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';
import { Map, fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the default state', () => {
    const newState = notificationReducer(undefined, {});
    expect(newState).toEqual(
      Map({
        filter: 'DEFAULT',
        notifications: Map(),
      })
    );
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' },
    ];
    const normalizedData = notificationsNormalizer(data);
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data,
    };
    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual(
      Map({
        filter: 'DEFAULT',
        notifications: fromJS(normalizedData.entities.notifications),
      })
    );
  });

  it('should handle MARK_AS_READ', () => {
    const initialState = Map({
      filter: 'DEFAULT',
      notifications: fromJS({
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: false
