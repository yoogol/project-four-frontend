import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const App = React.createClass ({
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    )}
})

export default App;
