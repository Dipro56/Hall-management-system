import React from 'react';
import './StudentLogin.css';
import { useNavigate } from 'react-router-dom';
import { useStudentListLogin } from '../../Hooks/useStudentLogin';

export const StudentLogin = () => {
  const navigate = useNavigate();
  const { studentListLogin } = useStudentListLogin();
  const studentLoginController = (event) => {
    event.preventDefault();

    const registrationNo = event.target.registrationNo.value;
    console.log(registrationNo);
    const studentToLogin = studentListLogin.find(
      (student) => student.registrationNo === registrationNo
    );
    console.log(studentToLogin);
    if (studentToLogin) {
      // <Navigate
      //   to={`/setStaffProfile/${staffMember?._id}`}
      //   state={{ from: location }}
      //   replace
      // />;
      navigate(`/studentDetails/${studentToLogin?._id}`, { replace: true });
    } else {
      alert(`No student found with registration number ${registrationNo}`);
    }
  };

  return (
    <div className="m-4 p-4">
      <h1>Student Login</h1>
      <div className="container col-lg-6 col-md-12 col-sm-12 mt-5 shadow-lg bg-light p-5">
        <form onSubmit={studentLoginController}>
          <div className="form-group ">
            <label for="exampleInputEmail1">
              <h5>Registration Number</h5>
            </label>
            <input
              type="text"
              className="form-control m-3 p-3 shadow"
              id="registrationNo"
              name="registrationNo"
              aria-describedby="emailHelp"
              placeholder="Registration no"
              required
            />
          </div>

          <br />
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
