import { useState, useEffect } from 'react';

export const useAdminCredential = () => {
  const [adminCredential, setAdminCredential] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/admin')
      .then((res) => res.json())
      .then((data) => setAdminCredential(data));
  }, []);

  return {
    adminCredential,
  };
};
