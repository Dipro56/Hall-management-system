import React from 'react';
import { useParams, Link } from 'react-router-dom';
// import { StaffNavbar } from '../../Component/Navbar/StaffNavbar';

export const StaffPage = () => {
  const { id } = useParams();

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
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="d-flex justify-content-center align-items-center ">
        <Link className="nav-item nav-link fs-4" to={`/setStaffProfile/${id}`}>
          Set profile
        </Link>
        <Link className="nav-item nav-link fs-4" to={`/staffDetail/${id}`}>
          Detail
        </Link>
        <Link className="nav-item nav-link fs-4" to="/addStudent">
          Add student
        </Link>
      </div>

      <h1>Staff page for ID : {id}</h1>

      <div className="container  col-lg-8 col-md-12 col-sm-12 mt-5  bg-light p-5">
        <div>
          <h3 className="p-3">Update information</h3>
        </div>
        <form onSubmit={addMemberController}>
          <div className="form-group ">
            <label for="exampleInputEmail1">First name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firNtname"
              aria-describedby="emailHelp"
              placeholder="First name"
              required
            />
          </div>
          <br />
          <div className="form-group ">
            <label for="exampleInputEmail1">Last name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              aria-describedby="emailHelp"
              placeholder="Last name"
              required
            />
          </div>
          <br />
          <div className="form-group ">
            <label for="exampleInputEmail1">Phone number</label>
            <input
              type="text"
              className="form-control"
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
