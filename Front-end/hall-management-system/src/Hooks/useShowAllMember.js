import { useState, useEffect } from 'react';

export const useShowAllMember = () => {
  const [showAllMember, setShowAllMember] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/addMember')
      .then((res) => res.json())
      .then((data) => setShowAllMember(data));
  }, []);

  return {
    showAllMember,
  };
};
