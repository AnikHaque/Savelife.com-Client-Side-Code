import React, { useEffect, useState } from 'react';

const useNurse = () => {
  const [nurse, setNurse] = useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/nurse`)
    .then(res => res.json())
    .then(data => setNurse(data))
  }, [])
  return [nurse, setNurse];
};

export default useNurse;