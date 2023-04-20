import React, { useEffect, useState } from 'react';

const useDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors`)
    .then(res => res.json())
    .then(data => setDoctors(data))
  }, [])
  return [doctors, setDoctors];
};

export default useDoctor;