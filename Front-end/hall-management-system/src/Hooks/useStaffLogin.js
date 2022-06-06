import { useState, useEffect } from 'react';

export const useStaffLogin = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addMember')
      .then((res) => res.json())
      .then((data) => setStaffList(data));
  }, []);

  return {
    staffList,
    setStaffList,
  };
};
