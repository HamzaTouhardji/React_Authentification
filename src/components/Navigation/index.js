import React from 'react';
import { Link } from 'react-router-dom';

import { AuthUserContext } from '../Session';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

//the conditions to know if user is connected or not, for display navbar 
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

//user is connected 
const NavigationAuth = () => (

  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
          </li>
          <li className="nav-item active">
            <Link to={ROUTES.HOME} className="nav-link">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to={ROUTES.ACCOUNT} className="nav-link">Account</Link>
          </li>
          <li className="nav-item active">
            <Link to={ROUTES.ADMIN} className="nav-link">Admin</Link>
          </li>
          <li className="nav-item active">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

//if user doesn't connected 
const NavigationNonAuth = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to={ROUTES.SIGN_IN} className="nav-link">Sign In</Link>
          </li>
          <li className="nav-item active">
            <Link to={ROUTES.LANDING} className="nav-link">Landing</Link>
          </li>
          <li className="nav-item active">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Navigation;