import React from 'react';

export const MemberList = (props) => {
  const { userName, memberStatus, _id } = props.memberInfo;
  console.log(userName, memberStatus);
  return (
    <li className="m-3" key={_id}>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-end align-item-center ">
          <p>
            {' '}
            &nbsp; Name: {userName} &nbsp;&nbsp;&nbsp; Status: {memberStatus}
          </p>
        </div>
        <div className="d-flex justify-content-end align-item-center">
          <button type="submit" className="btn btn-primary m-3 bg-primary">
            Edit user
          </button>
          <button type="submit" className="btn btn-danger m-3 bg-danger">
            Delete user
          </button>
        </div>
      </div>
    </li>
  );
};
