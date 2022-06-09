import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const StudentDetailsViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(typeof id);
  const logoutNegivationController = () => {
    navigate(`/studentLogin`, { replace: true });
  };

  const [loggedStudent, setLoggedStudent] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/studentDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLoggedStudent(data);
        console.log(typeof loggedStudent);
        console.log(loggedStudent);
      });
  });

  return (
    <div className="m-4 d-flex justify-content-center align-items-center flex-column">
      <button
        onClick={logoutNegivationController}
        type="button"
        class="btn btn-link fs-5 m-3"
      >
        Logout
      </button>
      <h3>Welcome {loggedStudent[0]?.userName}</h3>
      <div class="card bg-body m-5 p-3 shadow">
        <ul class="list-group list-group-flush">
          <li class="list-group-item m-3 bg-light">
            <h5>User name: {loggedStudent[0]?.userName}</h5>
          </li>
          <li class="list-group-item m-3 bg-light">
            <h5>Registration no: {loggedStudent[0]?.registrationNo}</h5>
          </li>
          <li class="list-group-item m-3 bg-light">
            <h5>Session: {loggedStudent[0]?.session}</h5>{' '}
          </li>
          {loggedStudent[0]?.allocatedHall === 'N/A' ? (
            <li class="d-flex justify-content-center list-group-item m-3 bg-light">
              <h5>
                Allocated hall:{' '}
                <p className="text-danger">{loggedStudent[0]?.allocatedHall}</p>
              </h5>{' '}
            </li>
          ) : (
            <li class="list-group-item m-3 bg-light">
              <h5>
                Allocated hall:{' '}
                <p className="text-success">
                  {loggedStudent[0]?.allocatedHall}
                </p>
              </h5>{' '}
            </li>
          )}

          {loggedStudent[0]?.allocatedHall === 'N/A' ? (
            <li class="list-group-item m-3 bg-light">
              <h5>
                Allocated hall:{' '}
                <p className="text-danger">{loggedStudent[0]?.allocatedRoom}</p>
              </h5>{' '}
            </li>
          ) : (
            <li class="list-group-item m-3 bg-light">
              <h5>
                Allocated room:{' '}
                <p className="text-success">
                  {loggedStudent[0]?.allocatedRoom}
                </p>
              </h5>{' '}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
