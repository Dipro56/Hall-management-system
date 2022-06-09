import React from 'react';
// import { SaffCard } from '../../Component/SaffCard/SaffCard';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Staffdetailpage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

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

  const [singleStaffDetail, setSingleStaffDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/staffDetail`)
      .then((res) => res.json())
      .then((data) => {
        setSingleStaffDetail(data);
        console.log(data);
        const staffMember = data.find((member) => member.staffID === id);
        setSingleStaffDetail(staffMember);
        console.log(staffMember);
      });
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {/* <StaffNavbar /> */}
      <div className="d-flex justify-content-center align-items-center col-12 shadow mb-5">
        <button
          onClick={setProfileNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3 p-3"
        >
          Set profile
        </button>
        <button
          onClick={detailNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3 p-3"
        >
          Details
        </button>
        <button
          onClick={addStudentNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3 p-3"
        >
          Add student
        </button>
        <button
          onClick={updateStudentNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3 p-3"
        >
          Update student
        </button>
        <button
          onClick={logoutNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3 b-3"
        >
          Logout
        </button>
      </div>
      <div class="card bg-body m-5 p-3 shadow">
        <ul class="list-group list-group-flush">
          <li class="list-group-item m-3 bg-light">
            <h5>First name: {singleStaffDetail?.firstName}</h5>
          </li>
          <li class="list-group-item m-3 bg-light">
            <h5>Last name: {singleStaffDetail?.lastName}</h5>
          </li>
          <li class="list-group-item m-3 bg-light">
            <h5>Phone no: {singleStaffDetail?.phoneNumber}</h5>{' '}
          </li>
        </ul>
      </div>
    </div>
  );
};
