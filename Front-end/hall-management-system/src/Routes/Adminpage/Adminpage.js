import React from 'react';

export const Adminpage = () => {
  const adminFormController = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5">
      <form onSubmit={adminFormController}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Admin Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Email"
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
