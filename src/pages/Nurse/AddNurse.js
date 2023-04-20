import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const AddNurse = () => {
  const { register, handleSubmit } = useForm();

  const [nurseForm, SetNurseForm] = useState({
    Name: '',
    Designation: "",
    Department: "",
    Shift: "",
    Education: "",
    Photo: "",
    Description: ""
  });

  const inputClass =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparenta";
    const navigate= useNavigate();
  const onSubmit = () => {
    console.log({...nurseForm, edititem: true});
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/nurse`;
    
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...nurseForm }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        navigate('/');
      });
  };

  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <div class="relative mx-auto w-[50vw]">
          <h1 className="text-4xl font-extrabold py-10">
            Register as a Nurse
          </h1>

          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Name}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Name: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
                Designation
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Designation}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Designation: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Department
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Department}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Department: e.target.value });
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Shift
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Shift}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Shift: e.target.value});
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Education
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Education}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Education: e.target.value})
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Photo
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Photo}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Photo: e.target.value});
                }}
              />
            </div>

            <div className="mb-3">
              <label for="name-with-label" class="text-gray-700 me-4">
              Description
              </label>
              <input
                type="text"
                className={`form-control ${inputClass}`}
                aria-describedby="basic-addon3"
                value={nurseForm.Description}
                onChange={(e) => {
                  SetNurseForm({ ...nurseForm, Description: e.target.value})
                }}
              />
            </div>

            <br />
            <div className="d-flex ms-auto">
              <button
                href="#!"
                className="btn btn-primary"
                type="submit"
                value="Add Product"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNurse;
