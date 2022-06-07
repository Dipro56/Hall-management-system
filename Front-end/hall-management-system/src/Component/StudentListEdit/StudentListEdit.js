import React from 'react';

export const StudentListEdit = (props) => {
  const {
    userName,
    _id,
    registrationNo,
    session,
    allocatedHall,
    allocatedRoom,
  } = props.memberInfo;
  console.log(userName, registrationNo);

  // const deleteUser = (id) => {
  //   const proceed = window.confirm('Are you sure want to delete?');

  //   if (proceed) {
  //     console.log(`delete user with ${id}`);
  //     fetch(`http://localhost:5000/addMember/${id}`, {
  //       method: 'DELETE', // or 'PUT'}
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.deletedCount > 0) {
  //           const remining = data.filter((data) => data._id !== id);
  //           setMemberCredential(remining);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error:', error);
  //       });
  //   }
  // };

  return (
    <li className="m-3 bg-light p-5" key={_id}>
      <div className="d-flex justify-content-between align-items-center ">
        <div className="d-flex justify-content-end align-item-center ">
          <h6>
            {' '}
            &nbsp; Name: {userName} <br /> <br /> Registration: {registrationNo}{' '}
            <br /> <br /> Session: {session} <br /> <br /> Allocated room:{' '}
            {allocatedRoom} <br /> <br /> Allocated hall: {allocatedHall}
          </h6>
        </div>
        {/* <div className="d-flex  justify-content-end align-item-center">
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
        </div> */}
      </div>
    </li>
  );
};
