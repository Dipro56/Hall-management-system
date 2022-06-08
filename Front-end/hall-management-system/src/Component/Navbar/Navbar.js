import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
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
          <Link
            className="nav-item nav-link fs-4 ms-2 me-2 text-primary"
            to="/"
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link fs-4  ms-2 me-2 text-primary"
            to="/admin"
          >
            Admin
          </Link>
          <Link
            className="nav-item nav-link fs-4 ms-2 me-2 text-primary"
            to="/login"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};
