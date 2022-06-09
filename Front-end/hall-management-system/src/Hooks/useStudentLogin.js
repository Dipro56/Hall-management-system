import { useState, useEffect } from 'react';

export const useStudentListLogin = () => {
  const [studentListLogin, setStudentListLogin] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/studentDetails')
      .then((res) => res.json())
      .then((data) => setStudentListLogin(data));
  }, []);

  return {
    studentListLogin,
    setStudentListLogin,
  };
};
