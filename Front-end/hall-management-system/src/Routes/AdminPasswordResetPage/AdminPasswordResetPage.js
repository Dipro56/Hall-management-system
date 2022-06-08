import React from 'react';
import { useAdminCredential } from '../../Hooks/useAdminCredential';

export const AdminPasswordResetPage = () => {
  const { adminCredential } = useAdminCredential();
  console.log(adminCredential);

  const adminPasswordResetFormController = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const newPassword = event.target.newPassword.value;
    const confirmPassword = event.target.confirmPassword.value;

    const adminNewCredential = {
      email,
      password,
      newPassword,
      confirmPassword,
    };

    console.log(email, password, confirmPassword, adminCredential[0]?._id);

    if (
      adminCredential[0].email === email &&
      adminCredential[0].password === password &&
      newPassword === confirmPassword
    ) {
      console.log('admin matched');
      fetch(`http://localhost:5000/admin/${adminCredential[0]?._id}`, {
        method: 'PUT', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminNewCredential),
      })
        .then((response) => response.json())
        .then((adminNewCredential) => {
          console.log('Success:', adminNewCredential);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      alert('Password reset');
    } else {
      alert('Give proper input');
    }

    // const adminInfo = { email, password };
  };

  return (
    <div className="m-3 p-5">
      <h1 className="m-3">Reset Admin Password</h1>
      <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5">
        <form onSubmit={adminPasswordResetFormController}>
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
          <div className="form-group">
            <label for="exampleInputPassword1">New password</label>
            <input
              type="password"
              className="form-control"
              id="newPassword"
              name="newPassword"
              placeholder="New password"
              required
            />
          </div>
          <br />

          <div className="form-group">
            <label for="exampleInputPassword1">Confirm password</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm password"
              required
            />
          </div>
          <br />

          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
