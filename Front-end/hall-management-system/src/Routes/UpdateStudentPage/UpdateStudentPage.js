import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentListEdit } from '../../Component/StudentListEdit/StudentListEdit';
import { useStudentListEdit } from '../../Hooks/useStudentListEdit';

export const UpdateStudentPage = (props) => {
  const { id } = useParams();
  const navigate = useNavigate(id);

  const { studentListEdit } = useStudentListEdit();

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
