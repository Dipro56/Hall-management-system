import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const EditStudentPage = () => {
  const [updateStudent, setUpdateStudent] = useState([]);
  const { id } = useParams();

  const updateStudentController = (event) => {
    event.preventDefault();

    const userName = event.target.username.value;
    const registrationNo = event.target.registrationNo.value;
    const session = event.target.session.value;
    const allocatedHall = event.target.allocatedHall.value;
    const allocatedRoom = event.target.allocatedRoom.value;

    const studentInfo = {
      userName,
      registrationNo,
      session,
      allocatedHall,
      allocatedRoom,
    };
    console.log(studentInfo);

    fetch(`http://localhost:5000/editStudent/${id}`, {
      method: 'PUT', // or 'PUT'
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
    alert(`${userName} updated succesfully.`);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/studentDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdateStudent(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div>
      <div className="container  col-lg-8 col-md-12 col-sm-12 mt-5  bg-light p-5">
        <div>
          <h5>Update user : {updateStudent[0]?.userName} </h5>
          <br />
          <p>
            {' '}
            User ID : <p>{id}</p>{' '}
          </p>
        </div>
        <form onSubmit={updateStudentController}>
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
            Update
          </button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};
