import React from 'react';
import { useNavigate } from 'react-router-dom';
import NurseListItem from '../../components/Nurse/NurseListItem';
import useNurse from '../../hooks/useNurse';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const ShowAllNurse = () => {
  const [nurse, setNurse] = useNurse();
  const navigate= useNavigate();
  const onNew = () => {
    navigate('/nurse/add', { replace: true })
  }

  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[200px]">
        <div class="container flex flex-col mx-auto w-full items-center justify-center">
          <ul class="flex flex-col">
            {nurse.map((nurse) => (
              <NurseListItem
                nurse={nurse}
              ></NurseListItem>
            ))}
          </ul>
          <button
                href="#!"
                type="button"
                className="btn bg-blue-500 ml-2 hover:bg-yellow-600"
                onClick={()=>{onNew()}}
                value="Add Product"
              >
                New
              </button>
        </div>
      </div>
    </>
  );
};

export default ShowAllNurse;