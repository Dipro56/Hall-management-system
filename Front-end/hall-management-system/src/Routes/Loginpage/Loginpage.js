import React from 'react';

export const Loginpage = () => {
  const loginFormController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;

    console.log(userName, password);
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5">
      <form onSubmit={loginFormController}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            placeholder="Username"
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
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
