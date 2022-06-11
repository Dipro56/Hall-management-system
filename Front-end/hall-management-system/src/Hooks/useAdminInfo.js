import { useState } from 'react';

export const useAdminInfo = () => {
  const [adminInfo, setAdminInfo] = useState({});
  console.log('adminInfo', adminInfo);
  return {
    setAdminInfo,
  };
};
