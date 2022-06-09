import React from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { useStaffLogin } from '../../Hooks/useStaffLogin';
import './LoginPage.css';

export const Loginpage = () => {
  const { staffList } = useStaffLogin();
  const navigate = useNavigate();
  const location = useLocation();

  const loginFormController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;

    console.log(userName, password);

    const staffMember = staffList.find(
      (member) => member.userName === userName && member.password === password
    );
    console.log(staffMember);
    if (staffMember) {
      // <Navigate
      //   to={`/setStaffProfile/${staffMember?._id}`}
      //   state={{ from: location }}
      //   replace
      // />;
      navigate(`/setStaffProfile/${staffMember?._id}`, { replace: true });
    } else {
      <Navigate to="/login" state={{ from: location }} replace />;
      alert('Give correct user name and password');
    }
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5 bg-light shadow p-5">
      <h1>Staff Login</h1>
      <div className="m-3">
        <h3 className="text-light">Total staff : {staffList.length}</h3>
      </div>
      <form onSubmit={loginFormController}>
        <div className="form-group ">
          <label for="exampleInputEmail1">
            <h5>Username</h5>
          </label>
          <input
            type="text"
            className="form-control m-3 p-3 shadow"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            placeholder="Username"
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
        <button type="submit" className="btn btn-primary m-3">
          Submit
        </button>
      </form>
    </div>
  );
};
