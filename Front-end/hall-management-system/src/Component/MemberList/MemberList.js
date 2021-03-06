import React from 'react';
import { Link } from 'react-router-dom';
import { useAddMember } from '../../Hooks/useAddMember';

export const MemberList = (props) => {
  const { userName, memberStatus, _id } = props.memberInfo;
  console.log(userName, memberStatus);

  const { setMemberCredential } = useAddMember();

  const deleteUser = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');

    if (proceed) {
      console.log(`delete user with ${id}`);
      fetch(`http://localhost:5000/addMember/${id}`, {
        method: 'DELETE', // or 'PUT'}
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remining = data.filter((data) => data._id !== id);
            setMemberCredential(remining);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <li className="m-3 bg-light p-3 shadow" key={_id}>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-end align-item-center fs-4 text-start flex-column">
          <p className="text-start"> &nbsp; Name: {userName}</p>
          <p className="text-start"> &nbsp; Status: {memberStatus}</p>
        </div>
        <div className="d-flex  justify-content-end align-item-center">
          <Link to={`/userDetails/${_id}`}>
            <button
              onClick={() => {
                console.log('Update pressed');
              }}
              type="submit"
              className="btn btn-success m-3 bg-success"
            >
              User details
            </button>
          </Link>
          <Link to={`/addMember/${_id}`}>
            <button
              onClick={() => {
                console.log('Update pressed');
              }}
              type="submit"
              className="btn btn-primary m-3 bg-primary"
            >
              Edit user
            </button>
          </Link>
          <button
            onClick={() => {
              deleteUser(_id);
            }}
            type="submit"
            className="btn btn-danger m-3 bg-danger"
          >
            Delete user
          </button>
        </div>
      </div>
    </li>
  );
};
