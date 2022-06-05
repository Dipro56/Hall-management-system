import React from 'react';

export const Addmemberpage = () => {
  const addMemberController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;

    const memberInfo = { userName, password };

    console.log(userName, password);

    fetch('http://localhost:5000/addMember', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(memberInfo),
    })
      .then((response) => response.json())
      .then((memberInfo) => {
        console.log('Success:', memberInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    alert(` ${userName} added successfully`);
  };

  return (
    <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5">
      <div>
        <h3 className="p-3">Add New User</h3>
      </div>
      <form onSubmit={addMemberController}>
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
          Add user
        </button>
      </form>
    </div>
  );
};
