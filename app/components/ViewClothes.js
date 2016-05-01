import React from 'react';
import auth from '../utils/auth';
import ajaxHelpers from '../utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';

const ViewClothes = React.createClass ({
  render: function() {
    return (
      <div>
        <div>ViewClothes</div>
        <Link to={'/settings'}>Settings</Link>
        <br></br>
        <Link to={'/addnew'}>Add New Item</Link>
        <div>Weather</div>
        <div>Top</div>
        <div>Bottom</div>
        <div>Shoes</div>
        <button>Wear it today</button>
        <div>Type Filter</div>
        <div>Color Filter</div>
        <div>Time Filter</div>
      </div>

      )}
  })

export default ViewClothes;
