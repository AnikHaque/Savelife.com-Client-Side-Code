import React, { useEffect, useState } from "react";

import AllSpecialities from "./AllSpecialities";

const Specialties = () => {
  const [doctors, setDoctors] = useState([])
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/hospitaldoctors`)
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, [])
  return (
    <div className="tpx-4 pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container">
      <h1 className="text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl">
        Select an <span className="text-[#1b82e2]">Speciality</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {
              doctors.map((doctor, index) => (
             
                  <AllSpecialities key={doctor._id} doctor={doctor} ></AllSpecialities>
              
              ))
            }
      </div>
  
    
    </div>
  );
};

export default Specialties;
