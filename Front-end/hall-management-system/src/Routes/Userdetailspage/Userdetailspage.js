import React from 'react';
import { useParams } from 'react-router-dom';

export const Userdetailspage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>User details page for ID : ${id}</h1>
    </div>
  );
};
