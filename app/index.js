import React from 'react';
import auth from './utils/auth';
import ajaxHelpers from './utils/ajaxHelpers';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import ViewClothes from './components/ViewClothes';
import AddNewForm from './components/AddNewForm';
import AboutApp from './components/AboutApp';
import ProfileInfo from './components/ProfileInfo';
import Settings from './components/Settings';
import NoMatch from './components/NoMatch';

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/signin',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ViewClothes} onEnter={requireAuth}/>
      <Route path="/signin" component={Login}  />
      <Route path="/signup" component={Signup} />
      <Route path="/addnew" component={AddNewForm} onEnter={requireAuth} />
      <Route path="/about" component={AboutApp} />
      <Route path="/profile" component={ProfileInfo} onEnter={requireAuth}/>
      <Route path="/settings" component={Settings} onEnter={requireAuth}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
),document.getElementById('react-app'));
