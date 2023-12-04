// App/App.js
import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <CourseList />
      ) : (
        <Login />
      )}
    </div>
  );
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
