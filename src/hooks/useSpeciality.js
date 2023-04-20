import React, { useEffect, useState } from "react";

const useSpecialities = () => {
  const [specialities, setSpecialities] = useState([]);
  const [specialitiesDef, setSpecialitiesDef] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialities`)
      .then((res) => res.json())
      .then((data) => {
        setSpecialities(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/doctors/specialitiesDef`)
      .then((res) => res.json())
      .then((data) => {
        console.log()
        setSpecialitiesDef(data);
      });
  }, []);

  return [specialities, specialitiesDef];


};

export default useSpecialities;
