import React from 'react';

export const MemberList = (props) => {
  const { userName, memberStatus, _id } = props.memberInfo;
  console.log(userName, memberStatus);

  const deleteUser = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');

    if (proceed) {
      console.log(`delete user with ${id}`);
      fetch(`http://localhost:5000/addMember/${id}`, {
        method: 'DELETE', // or 'PUT'}
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return (
    <li className="m-3 bg-light p-3" key={_id}>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-end align-item-center ">
          <p>
            {' '}
            &nbsp; Name: {userName} <br /> Status: {memberStatus}
          </p>
        </div>
        <div className="d-flex  justify-content-end align-item-center">
          <button type="submit" className="btn btn-primary m-3 bg-primary">
            Edit user
          </button>
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
