// courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';
import { Map, fromJS } from 'immutable';

describe('courseReducer', () => {
  it('should return the default state', () => {
    const newState = courseReducer(undefined, {});
    expect(newState).toEqual(Map({ courses: Map() }));
  });

  it('should handle FETCH_COURSE_SUCCESS', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    const normalizedData = coursesNormalizer(data);
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data,
    };
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual(
      Map({
        courses: fromJS(normalizedData.entities.courses),
      })
    );
  });

  it('should handle SELECT_COURSE', () => {
    const initialState = Map({
      courses: fromJS({
        1: { id: 1, isSelected: false, name: 'ES6', credit: 60 },
        2: { id: 2, isSelected: false, name: 'Webpack', credit: 20 },
        3: { id: 3, isSelected: false, name: 'React', credit: 40 },
      }),
    });
    const action = { type: SELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(
      Map({
        courses: fromJS({
          1: { id: 1, isSelected: false, name: 'ES6', credit: 60 },
          2: { id: 2, isSelected: true, name: 'Webpack', credit: 20 },
          3: { id: 3, isSelected: false, name: 'React', credit: 40 },
        }),
      })
    );
  });

  it('should handle UNSELECT_COURSE', () => {
    const initialState = Map({
      courses: fromJS({
        1: { id: 1, isSelected: false, name: 'ES6', credit: 60 },
        2: { id: 2, isSelected: true, name: 'Webpack', credit: 20 },
        3: { id: 3, isSelected: false, name: 'React', credit: 40 },
      }),
    });
    const action = { type: UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual(
      Map({
        courses: fromJS({
          1: { id: 1, isSelected: false, name: 'ES6', credit: 60 },
          2: { id: 2, isSelected: false, name: 'Webpack', credit: 20 },
          3: { id: 3, isSelected: false, name: 'React', credit: 40 },
        }),
      })
    );
  });
});
