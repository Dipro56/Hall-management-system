import React from 'react';
import { Link } from 'react-router-dom';

export const StaffNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link fs-4" to="/setProfile/:id">
            Set profile
          </Link>
          <Link className="nav-item nav-link fs-4" to="/staffDetail/:id">
            Detail
          </Link>
          <Link className="nav-item nav-link fs-4" to="/addStudent">
            <p> Add student</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
