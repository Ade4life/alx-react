// notificationSelector.test.js
import { Map, fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('notificationSelector', () => {
  it('should return the selected filter type', () => {
    const state = Map({ filter: 'URGENT' });
    expect(filterTypeSelected(state)).toEqual('URGENT');
  });

  it('should return the list of notifications in Map format', () => {
    const state = Map({
      notifications: fromJS({
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      }),
    });
    const expectedNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    });
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('should return the list of unread notifications in Map format', () => {
    const state = Map({
      notifications: fromJS({
        1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
        2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      }),
    });
    const expectedUnreadNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
