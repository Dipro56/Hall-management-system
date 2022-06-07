import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const AddStudentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(id);

  const setProfileNegivationController = () => {
    navigate(`/setStaffProfile/${id}`, { replace: true });
  };
  const detailNegivationController = () => {
    navigate(`/staffDetail/${id}`, { replace: true });
  };
  const addStudentNegivationController = () => {
    navigate(`/addStudent/${id}`, { replace: true });
  };
  const updateStudentNegivationController = () => {
    navigate(`/updateStudent/${id}`, { replace: true });
  };
  const logoutNegivationController = () => {
    navigate(`/login`, { replace: true });
  };

  const studentInfoSubmitController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const registrationNo = event.target.registrationNo.value;
    const session = event.target.session.value;
    const allocatedHall = event.target.allocatedHall.value;
    const allocatedRoom = event.target.allocatedRoom.value;
    const addedByID = id;

    const studentInfo = {
      userName,
      registrationNo,
      session,
      allocatedHall,
      allocatedRoom,
      addedByID,
    };
    console.log(studentInfo);

    fetch('http://localhost:5000/studentDetails', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentInfo),
    })
      .then((response) => response.json())
      .then((studentInfo) => {
        console.log('Success:', studentInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    alert(`${userName} added succesfully by ${addedByID}`);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <button
          onClick={setProfileNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Set profile
        </button>
        <button
          onClick={detailNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Details
        </button>
        <button
          onClick={addStudentNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Add student
        </button>
        <button
          onClick={updateStudentNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Update student
        </button>
        <button
          onClick={logoutNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Logout
        </button>
      </div>
      <div className="container col-lg-6 col-md-12 col-sm-12 mt-5  bg-light p-5">
        <h1 className="text-primary m-5">Add Student</h1>
        <form onSubmit={studentInfoSubmitController}>
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
            <label for="exampleInputPassword1">Registration no</label>
            <input
              type="text"
              className="form-control"
              id="registrationNo"
              name="registrationNo"
              placeholder="Registration no"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1">Session</label>
            <input
              type="text"
              className="form-control"
              id="session"
              name="session"
              placeholder="Session"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1">Allocated hall</label>
            <input
              type="text"
              className="form-control"
              id="allocatedHall"
              name="allocatedHall"
              placeholder="Allocated hall"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label for="exampleInputPassword1">Allocated room</label>
            <input
              type="text"
              className="form-control"
              id="allocatedRoom"
              name="allocatedRoom"
              placeholder="Allocated room"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary m-3">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
