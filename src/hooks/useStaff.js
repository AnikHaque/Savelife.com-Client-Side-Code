import React, { useEffect, useState } from 'react';

const useStaffs = () => {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/staff`)
      .then(res => res.json())
      .then(data => setStaff(data))
  }, [])
  return [staff, setStaff];
};

export default useStaffs;