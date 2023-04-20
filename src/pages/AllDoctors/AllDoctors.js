import React from "react";
import DoctorListItem from "../../components/DoctorListItem/DoctorListItem";
import useDoctor from "../../hooks/useDoctors";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const AllDoctors = () => {
  const [doctor, setDoctor] = useDoctor();

  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[200px]">
        <div class="container flex flex-col mx-auto w-full items-center justify-center">
          <ul class="flex flex-col">
            {doctor.map((doctor) => (
              <DoctorListItem
                doctor={doctor}
              ></DoctorListItem>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
