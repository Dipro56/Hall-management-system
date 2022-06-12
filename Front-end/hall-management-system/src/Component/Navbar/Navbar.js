import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import iutLogo from '../../Assets/iut-logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar-edit navbar navbar-expand-lg  p-4">
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
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
        <div className="navbar-nav align-items-center">
          <img className="logo m-3" src={iutLogo} alt=".." />
          <Link className="nav-item nav-link fs-4 ms-2 me-2 text-light" to="/">
            Home
          </Link>
          <Link
            className="nav-item nav-link fs-4  ms-2 me-2 text-light"
            to="/admin"
          >
            Admin
          </Link>
          <Link
            className="nav-item nav-link fs-4 ms-2 me-2 text-light"
            to="/login"
          >
            Staff
          </Link>
          <Link
            className="nav-item nav-link fs-4 ms-2 me-2 text-light"
            to="/studentLogin"
          >
            Student
          </Link>
        </div>
      </div>
    </nav>
  );
};
