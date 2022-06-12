import React from 'react';

import { Link } from 'react-router-dom';
// import { useAdminAuth } from '../../Hooks/useAdminAuth';

import { useAdminInfo } from '../../Hooks/useAdminInfo';

export const Adminpage = () => {
  const { setAdminInfo } = useAdminInfo();

  const adminFormController = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const admin = { email, password };

    setAdminInfo(admin);
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5 shadow">
      <h1 className="mb-5">Admin Login</h1>
      <form onSubmit={adminFormController}>
        <div className="form-group">
          <label for="exampleInputEmail1">
            <h5>Admin Email</h5>
          </label>
          <input
            type="email"
            className="form-control m-3 p-3 shadow"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label for="exampleInputPassword1">
            <h5>Password</h5>
          </label>
          <input
            type="password"
            className="form-control m-3 p-3 shadow"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <br />

        <p className="danger">
          {' '}
          <Link className="nav-item nav-link fs-5" to="/adminPasswordReset">
            Reset password?
          </Link>
        </p>

        <button type="submit" className="btn btn-primary m-3 ">
          Submit
        </button>
      </form>
    </div>
  );
};
