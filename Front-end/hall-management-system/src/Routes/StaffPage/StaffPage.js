import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { StaffNavbar } from '../../Component/Navbar/StaffNavbar';

export const StaffPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(id);
  // const [showStaffDetail, setShowStaffDetail] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/staffDetails')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const staffDetail = data.find((staff) => staff.userID === id);
  //       setShowStaffDetail(staffDetail);
  //       console.log(showStaffDetail);
  //     });
  // });

  const setProfileNegivationController = () => {
    navigate(`/setStaffProfile/${id}`, { replace: true });
  };
  const detailNegivationController = () => {
    navigate(`/staffDetail/${id}`, { replace: true });
  };
  const addStudentNegivationController = () => {
    navigate(`/addStudent/${id}`, { replace: true });
  };
  const logoutNegivationController = () => {
    navigate(`/login`, { replace: true });
  };
  const updateStudentNegivationController = () => {
    navigate(`/updateStudent/${id}`, { replace: true });
  };

  const addMemberController = (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const phoneNumber = event.target.phoneNumber.value;
    const staffID = id;

    const staffDetailInfo = { staffID, firstName, lastName, phoneNumber };

    console.log(staffDetailInfo);

    fetch('http://localhost:5000/setStaffProfile', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(staffDetailInfo),
    })
      .then((response) => response.json())
      .then((staffDetailInfo) => {
        console.log('Success:', staffDetailInfo);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mb-5">
      <div className="col-12 mb-5 d-flex justify-content-center align-items-center shadow">
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
          class="btn btn-link fs-5 m-3 p-3"
        >
          Logout
        </button>
      </div>

      <h1>Staff page for ID : {id}</h1>

      <div className="container  col-lg-8 col-md-12 col-sm-12 mt-5  bg-light p-5 shadow">
        <div>
          <h3 className="p-3">Update information</h3>
        </div>
        <form onSubmit={addMemberController}>
          <div className="form-group ">
            <label for="exampleInputEmail1">
              <h5>First name</h5>
            </label>
            <input
              type="text"
              className="form-control p-3 m-3"
              id="firstName"
              name="firNtname"
              aria-describedby="emailHelp"
              placeholder="First name"
              required
            />
          </div>
          <br />
          <div className="form-group ">
            <label for="exampleInputEmail1">
              <h5>Last name</h5>
            </label>
            <input
              type="text"
              className="form-control p-3 m-3"
              id="lastName"
              name="lastName"
              aria-describedby="emailHelp"
              placeholder="Last name"
              required
            />
          </div>
          <br />
          <div className="form-group ">
            <label for="exampleInputEmail1">
              <h5>Phone number</h5>
            </label>
            <input
              type="text"
              className="form-control p-3 m-3"
              id="phoneNumber"
              name="phoneNumber"
              aria-describedby="emailHelp"
              placeholder="Phone number"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
};
