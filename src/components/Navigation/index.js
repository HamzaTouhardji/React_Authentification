import React from 'react';
import { Link } from 'react-router-dom';


import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to={ROUTES.SIGN_IN} class="nav-link">Sign In</Link>
          </li>
          <li class="nav-item active">
            <Link to={ROUTES.LANDING} class="nav-link">Landing</Link>
          </li>
          <li class="nav-item active">
            <Link to={ROUTES.HOME} class="nav-link">Home</Link>
          </li>
          <li class="nav-item active">
            <Link to={ROUTES.ACCOUNT} class="nav-link">Account</Link>
          </li>
          <li class="nav-item active">
            <Link to={ROUTES.ADMIN} class="nav-link">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);
export default Navigation;