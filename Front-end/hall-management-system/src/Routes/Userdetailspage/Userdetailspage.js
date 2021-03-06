import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Userdetailspage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const addMemberNegivationController = () => {
    navigate(`/addMember`, { replace: true });
  };

  const logoutNegivationController = () => {
    navigate(`/admin`, { replace: true });
  };
  const summeryNegivationController = () => {
    navigate(`/summery`, { replace: true });
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center ">
        <button
          onClick={addMemberNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Add member
        </button>
        <button
          onClick={summeryNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Summery
        </button>

        <button
          onClick={logoutNegivationController}
          type="button"
          class="btn btn-link fs-5 m-3"
        >
          Logout
        </button>
      </div>
      <h1>User details page for ID : ${id}</h1>
    </div>
  );
};
