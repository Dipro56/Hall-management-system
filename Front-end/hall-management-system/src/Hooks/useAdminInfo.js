import { useState } from 'react';
import { useAdminCredential } from './useAdminCredential';
import { useNavigate } from 'react-router-dom';

export const useAdminInfo = () => {
  const [adminInfo, setAdminInfo] = useState({});
  const { adminCredential } = useAdminCredential([]);
  const navigate = useNavigate();
  console.log('adminInfo', adminInfo);
  console.log('adminCredential', adminCredential);

  if (adminInfo.email) {
    if (
      adminCredential[0].email === adminInfo.email &&
      adminCredential[0].password === adminInfo.password
    ) {
      console.log('admin matched', adminCredential[0]._id);
      // return children;
      navigate(`/admin/${adminCredential[0]._id}`, { replace: true });
    } else {
      console.log('wrong credential');
      alert('Give proper email and password');
    }
  }

  return {
    setAdminInfo,
    adminInfo,
  };
};
