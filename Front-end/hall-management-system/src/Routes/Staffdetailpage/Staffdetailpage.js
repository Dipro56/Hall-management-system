import React from 'react';
// import { SaffCard } from '../../Component/SaffCard/SaffCard';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Staffdetailpage = () => {
  const id = useParams();

  const [singleStaffDetail, setSingleStaffDetail] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addMember')
      .then((res) => res.json())
      .then((data) => {
        const staffMember = data.find((member) => data.userID === id);
        setSingleStaffDetail(staffMember);
        console.log(staffMember);
      });
  }, [id]);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      {/* <StaffNavbar /> */}
      <div className="d-flex justify-content-center align-items-center">
        <Link className="nav-item nav-link fs-4" to={`/setProfile/${id}`}>
          Set profile
        </Link>
        <Link className="nav-item nav-link fs-4" to={`/staffDetail/${id}`}>
          Detail
        </Link>
        <Link className="nav-item nav-link fs-4" to="/addStudent">
          Add student
        </Link>
      </div>
      <div class="card  col-6">
        <div class="card-body bg-light">
          <h5 class="card-title">User Details</h5>
          <h6 class="card-subtitle m-2">First Name :</h6>
          {/* <h6 class="card-subtitle m-2">
            Last Name : {singleStaffDetail[0]?.lastName}{' '}
          </h6>
          <h6 class="card-subtitle m-2">
            Phone no : {singleStaffDetail[0]?.phoneNumber}{' '}
          </h6> */}
        </div>
      </div>
    </div>
  );
};
