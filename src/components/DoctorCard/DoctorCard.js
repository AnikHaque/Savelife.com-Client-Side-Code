import React from "react";
import { Link } from "react-router-dom";
import operationimage from "../../assets/Features-images/img7.svg";


const DoctorCard = ({ speciality, specialitiesDef }) => {
  const def = specialitiesDef.filter(findSpecialityDef)
  function findSpecialityDef(specialitiesDef) {
    return specialitiesDef.short === speciality.replace(/\s+/g, '')
  }



  return (
    <div className="lg:max-w-lg">
      <Link to={`/doctors/${speciality.replace(/\s+/g, '')}`}>

      <div className="card">
  <div className="card-body">
    <h2 className="card-title">{speciality}</h2>
    <div className="card-actions justify-end">
      <button className="btn bg-[#1b82e2]">Show Doctors</button>
    </div>
  </div>
</div>


        {/* <div class="cursor-pointer py-4 px-[10px] flex max-w-md bg-white shadow-xl rounded-lg overflow-hidden">
          
          <div class="lg:max-w-lg p-4 mb-2">
            <h1 class="text-[#1b82e2] font-bold text-2xl">{speciality}   </h1>
            <i class="fa-solid fa-arrow-right text-[#1b82e2]  text-2xl ml-72"></i>
          </div>

        </div> */}

      </Link>
    </div>
  );
};

export default DoctorCard;
