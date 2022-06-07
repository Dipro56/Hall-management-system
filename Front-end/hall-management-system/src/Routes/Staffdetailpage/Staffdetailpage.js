import React from 'react';
// import { SaffCard } from '../../Component/SaffCard/SaffCard';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
      <div className="d-flex justify-content-center align-items-center">
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
        <Link className="nav-item nav-link fs-4" to="/addStudent">
          Add student
        </Link>
      </div>
      <div class="card  col-6">
        <div class="card-body bg-light">
          <h5 class="card-title">User Details</h5>
          <h6 class="card-subtitle m-2">
            First Name : {singleStaffDetail?.firstName}
          </h6>
          <h6 class="card-subtitle m-2">
            Last Name : {singleStaffDetail?.lastName}{' '}
          </h6>
          <h6 class="card-subtitle m-2">
            Phone no : {singleStaffDetail?.phoneNumber}{' '}
          </h6>
        </div>
      </div>
    </div>
  );
};
