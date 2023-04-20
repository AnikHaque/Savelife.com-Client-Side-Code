import React from "react";
import { Link } from "react-router-dom";

const DoctorListItem = ({ doctor }) => {
  return (
    <li class="border-gray-400 flex flex-row mb-8">
      <a href={`/websitedoctors/${doctor._id}`}>
        <div class="shadow-lg border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center p-4">
          {/* profile image */}
          <div class="flex flex-col justify-center items-center mr-4">
            {/* <a href={`/doctor/${doctor._id}`} class="block relative" className="w-[15vw]"> */}
            <a class="block relative" className="">
              <img
                alt="profil"
                src={doctor.image}
                class="mx-auto rounded-3 object-contain"
              />
            </a>
          </div>

          {/* Name and Speciality */}
          <div class="flex-1 pl-1 md:mr-16">
            <p class="text-gray-600 dark:text-gray-200">{doctor.category}</p>
            <p class="font-bold dark:text-white text-xl">{doctor.name}</p>

            <br />

            <p class="text-slate-600 dark:text-gray-200">
              {doctor.education.toString().substring(0, 100).concat("...")}
            </p>
          </div>

          {/* Second Column for working hours */}
          <div class="text-gray-600 dark:text-gray-200">
            <p>Working in</p>
            <h1 className="font-bold">{doctor.hospital}</h1>
            <br />
            <p>Total Experience</p>
            <h1>9+ Years</h1>
          </div>

          <div className="ml-14">
            <div>
              <span className="text-4xl font-bold text-blue-600">৳ 150</span>
              <span className="ml-3">(inc. VAT)</span>
            </div>
            <p>Per consultation</p>
          </div>

          {/* Button */}
          <Link to={`/doctor/edit/${doctor._id}`}>
            <button class="w-24 h-12 rounded-lg text-center bg-blue-600 text-white text-lg">Edit</button>
          </Link>
        </div>
      </a>
    </li>
  );
};

export default DoctorListItem;
