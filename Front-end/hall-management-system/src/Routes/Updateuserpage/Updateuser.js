import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Updateuserpage = () => {
  const [updateMember, setUpdateMember] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const addMemberNegivationController = () => {
    navigate(`/addMember`, { replace: true });
  };

  const logoutNegivationController = () => {
    navigate(`/admin`, { replace: true });
  };
  const summeryNegivationController = () => {
    navigate(`/summery`, { replace: true });
  };

  const updateMemberController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const password = event.target.password.value;
    const memberStatus = event.target.memberStatus.value;

    const updatedMemberInfo = { userName, password, memberStatus };

    console.log(updatedMemberInfo);

    fetch(`http://localhost:5000/addMember/${id}`, {
      method: 'PUT', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMemberInfo),
    })
      .then((response) => response.json())
      .then((updatedMemberInfo) => {
        console.log('Success:', updatedMemberInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    alert(` ${userName} added successfully`);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/addMember/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateMember(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className="justify-content-center align-item-center m-3">
      <div className="d-flex justify-content-center align-items-center ">
        <button
          onClick={addMemberNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Add member
        </button>
        <button
          onClick={summeryNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Summery
        </button>

        <button
          onClick={logoutNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Logout
        </button>
      </div>
      <div className="container  col-lg-8 col-md-12 col-sm-12 mt-5  bg-light p-5">
        <div>
          <h5>Update user : {updateMember[0]?.userName} </h5>
          <br />
          <p>
            {' '}
            User ID : <p>{id}</p>{' '}
          </p>
        </div>
        <form onSubmit={updateMemberController}>
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
            Update user
          </button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};
