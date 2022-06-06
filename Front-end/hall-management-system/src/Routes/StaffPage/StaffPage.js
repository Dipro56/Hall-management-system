import React from 'react';
import { useParams } from 'react-router-dom';
import { StaffNavbar } from '../../Component/Navbar/StaffNavbar';

export const StaffPage = () => {
  const { id } = useParams();
  return (
    <div>
      <StaffNavbar />
      <h1>Staff details page for ID : ${id}</h1>
    </div>
  );
};
