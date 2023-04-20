import React from "react";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import useSpecialities from "../../hooks/useSpeciality";
const Speciality = () => {
  const [specialities, specialitiesDef] = useSpecialities();

  return (
    <>
      <div className="mt-[150px] container mx-auto">
        <h1 className="font-extrabold text-4xl text-center uppercase">
          Select a <span className="text-[#1b82e2]">(Speciality)</span> for you
        </h1>
        <div className="grid lg:grid-cols-2">
          <img src="https://doccure.dreamguystech.com/html/template/assets/img/dr-slider.png" className="lg:max-w-lg"></img>
          
          <div className="mt-[50px]   grid lg:grid-cols-2 gap-6">

          {specialities.slice(0,4).map((speciality) => (
            <DoctorCard
              speciality={speciality}
              specialitiesDef={specialitiesDef}
            ></DoctorCard>
          ))}
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Speciality;
