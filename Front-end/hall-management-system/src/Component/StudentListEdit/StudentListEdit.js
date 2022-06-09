import React from 'react';
import { Link } from 'react-router-dom';
import { useAddMember } from '../../Hooks/useAddMember';

export const StudentListEdit = (props) => {
  const { setMemberCredential } = useAddMember();

  const {
    userName,
    _id,
    registrationNo,
    session,
    allocatedHall,
    allocatedRoom,
  } = props.memberInfo;
  console.log(userName, registrationNo);

  const deleteUser = (id) => {
    const proceed = window.confirm('Are you sure want to delete?');

    if (proceed) {
      console.log(`delete user with ${id}`);
      fetch(`http://localhost:5000/studentDetails/${id}`, {
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
        <div className="d-flex justify-content-end align-item-center p-5 bg-body">
          <h5>
            {' '}
            &nbsp; Name: {userName} <br /> <br /> Registration: {registrationNo}{' '}
            <br /> <br /> Session: {session} <br /> <br /> Allocated room:{' '}
            {allocatedRoom} <br /> <br /> Allocated hall: {allocatedHall}
          </h5>
        </div>
        <div className="d-flex  justify-content-end align-item-center p-3">
          <Link to={`/editStudent/${_id}`}>
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
