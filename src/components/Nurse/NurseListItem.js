import React from "react";
import { Link } from "react-router-dom";

const NurseListItem = ({ nurse }) => {
  return (
    <li class="border-gray-400 flex flex-row mb-8">
      <a href={`/websitenurses/${nurse._id}`}>
        <div class="shadow-lg border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center p-4">
          {/* profile image */}
          <div class="flex flex-col justify-center items-center mr-4">
            {/* <a href={`/nurse/${nurse._id}`} class="block relative" className="w-[15vw]"> */}
            <a class="block relative" className="">
              <img
                alt="profil"
                src={nurse.Photo}
                class="mx-auto rounded-3 object-contain"
              />
            </a>
          </div>

          {/* Name and Speciality */}
          <div class="flex-1 pl-1 md:mr-16">
            <p class="font-bold dark:text-white text-xl">{nurse.name}</p>
            <p class="text-gray-600 dark:text-gray-200">{nurse.Designation}</p>

            <br />

            <p class="text-slate-600 dark:text-gray-200">
              {nurse.Description.toString().substring(0, 100).concat("...")}
            </p>
          </div>

          {/* Second Column for working hours */}
          <div class="text-gray-600 dark:text-gray-200">
            <p>Working in</p>
            <h1 className="font-bold">{nurse.Department}</h1>
            <br />
          </div>

          <div className="ml-14">
            <div>
              <span className="text-4xl font-bold text-blue-600">৳ 150</span>
              <span className="ml-3">(inc. VAT)</span>
            </div>
            <p>Per consultation</p>
          </div>

          {/* Button */}
          <Link to={`/nurse/edit/${nurse._id}`}>
            <button class="w-24 h-12 rounded-lg text-center bg-blue-600 text-white text-lg">Edit</button>
          </Link>
        </div>
      </a>
    </li>
  );
};

export default NurseListItem;
