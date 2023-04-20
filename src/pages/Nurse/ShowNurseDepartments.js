import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentCard from '../../components/Nurse/DepartmentCard';
import useNurseByDepartment from '../../hooks/useNurseByDepartment';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const ShowNurseDepartments = () => {
  const [nurseByDepartment] = useNurseByDepartment();
  const navigate = useNavigate();
  const onNew = () => {
    navigate("/nurse/add", { replace: true });
  };
  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <h1 className="font-extrabold text-4xl text-center">
          Select a <span className="text-[#1b82e2]">Department</span>
        </h1>
        <div className="mt-[50px] grid grid-cols-3 gap-6">
          {nurseByDepartment.map((department) => (
            <DepartmentCard
            department={department}
            ></DepartmentCard>
          ))}
        </div>
        <button
            href="#!"
            type="button"
            className="btn bg-blue-500 ml-2 hover:bg-yellow-600"
            onClick={() => {
              onNew();
            }}
            value="Add Product"
          >
            New
          </button>
      </div>
    </>
  );
};

export default ShowNurseDepartments;