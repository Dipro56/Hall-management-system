import React from 'react';
import { useShowAllMember } from '../../Hooks/useShowAllMember';
import { MemberList } from '../../Component/MemberList/MemberList';

export const Addmemberpage = () => {
  const { showAllMember } = useShowAllMember();

  const addMemberController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;
    const memberStatus = event.target.memberStatus.value;

    const memberInfo = { userName, password, memberStatus };

    console.log(userName, password, memberStatus);

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
    <div>
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
          <div className="form-group">
            <label for="exampleInputPassword1">Member Status</label>
            <input
              type="text"
              className="form-control"
              id="memberStatus"
              name="memberStatus"
              placeholder="Member status"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary m-3">
            Add user
          </button>
        </form>
        <br />
        <br />
      </div>

      <div className="mt-5 container justify-content-center container-fluid col-7">
        <h1>Total Member : {showAllMember.length}</h1>
        <div className="mb-5">
          <ol>
            {showAllMember.map((data) => (
              <MemberList key={data._id} memberInfo={data} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
