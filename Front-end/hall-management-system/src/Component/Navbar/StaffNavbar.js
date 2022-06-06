import React from 'react';
import { Link } from 'react-router-dom';

export const StaffNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <Link className="nav-item nav-link" to="/staff/:id">
            Staff profile
          </Link>
          <Link className="nav-item nav-link" to="/addStudent">
            Add student
          </Link>
        </div>
      </div>
    </nav>
  );
};
