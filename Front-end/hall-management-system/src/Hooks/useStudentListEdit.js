import { useState, useEffect } from 'react';

export const useStudentListEdit = () => {
  const [studentListEdit, setStudentListEdit] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/studentDetails')
      .then((res) => res.json())
      .then((data) => setStudentListEdit(data));
  }, []);

  return {
    studentListEdit,
    setStudentListEdit,
  };
};
