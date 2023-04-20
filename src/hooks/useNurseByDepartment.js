import React, { useEffect, useState } from 'react';

const useNurseByDepartment = () => {
  const [nurseByDepartment, setNurseByDepartment] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/nurse/byDepartment`)
      .then((res) => res.json())
      .then((data) => {
        setNurseByDepartment(data);
      });
  }, []);

  return [nurseByDepartment];
};

export default useNurseByDepartment;