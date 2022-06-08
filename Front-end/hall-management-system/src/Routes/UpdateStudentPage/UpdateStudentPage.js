import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentListEdit } from '../../Component/StudentListEdit/StudentListEdit';
import { useStudentListEdit } from '../../Hooks/useStudentListEdit';

export const UpdateStudentPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate(id);

  const { studentListEdit, setStudentListEdit } = useStudentListEdit();

  const showAll = () => {
    fetch('http://localhost:5000/studentDetails')
      .then((res) => res.json())
      .then((data) => setStudentListEdit(data));
    console.log(' studentListEdit ', studentListEdit);
    setStudentListEdit(studentListEdit);
  };

  const getRegistrationNo = (event) => {
    event.preventDefault();
    const registartionNo = event.target.registartionNo.value;
    console.log(registartionNo);
    const member = studentListEdit.find(
      (member) => member.registrationNo === registartionNo
    );
    if (member) {
      console.log(member);
      const searchedMember = [];
      searchedMember.push(member);
      setStudentListEdit(searchedMember);
    } else {
      alert(`No sutdent found with ${registartionNo}`);
    }
  };

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
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
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

      <h4 className="m-3">Search using student registration</h4>
      <form onSubmit={getRegistrationNo}>
        <div className="form-group input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="registartionNo"
            name="registartionNo"
            aria-describedby="emailHelp"
            placeholder="Registration no"
            required
          />
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
        </div>
      </form>

      <button className="btn btn-primary" onClick={showAll}>
        Show all
      </button>

      <div className="mt-5  justify-content-center  col-12">
        <h1>Total Member : {studentListEdit.length}</h1>
        <div className="mb-5 container">
          <ol>
            {studentListEdit.map((data) => (
              <StudentListEdit key={data._id} memberInfo={data} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
