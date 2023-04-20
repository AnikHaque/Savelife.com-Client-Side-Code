import React from 'react';
import DepartmentCard from '../../components/Nurse/DepartmentCard';
import useNurseByDepartment from '../../hooks/useNurseByDepartment';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const ShowStaffsByDepartment = () => {
  const [nurseByDepartment] = useNurseByDepartment();
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <h1 className="font-extrabold text-4xl text-center">
          Select a <span className="text-[#1b82e2]">Speciality</span>
        </h1>
        <div className="mt-[50px] grid grid-cols-3 gap-6">
          {nurseByDepartment.map((department) => (
            <DepartmentCard
            department={department}
            ></DepartmentCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowStaffsByDepartment;