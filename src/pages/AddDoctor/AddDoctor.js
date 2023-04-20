import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const AddDoctor = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  console.log(user?.email)
  const { isLoading, error, data, refetch } = useQuery('repoData', () =>
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/websitedoctors/findEmail?email=${user?.email}`).then(res =>
      res.json()
    )
  )

  let [doctorForm, SetDoctorForm] = useState({
    name: "",
    designation: "",
    reviews: '',
    education: [],
    experience: [],
    training: [],
    books: [],
    fees: "",
    location: '',
    hospital: "",
    department: "",
    image: '',
    specialization: '',
    slots: []
  });
  if (loading === true) return
  const inputClass =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparenta";

  const onSubmit = () => {
    let mail = user?.email
    console.log({ ...doctorForm, edititem: true });
    doctorForm = { ...doctorForm, email: mail }
    console.log(doctorForm);
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/websitedoctors`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...doctorForm }),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch()
        // console.log(result);
        // navigate(from);
      });
  };

  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[100px] container mx-auto">
          <div class="relative mx-auto w-[50vw]">
            <h1 className="text-4xl font-extrabold py-10">
              Register as a Doctor
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
                  value={doctorForm.name}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, name: e.target.value });
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
                  value={doctorForm.designation}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, designation: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Reviews
                </label>
                <input
                  type="number"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.reviews}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, reviews: parseInt(e.target.value) });
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
                  value={doctorForm.education.join(', ').toString()}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, education: e.target.value.split(',').map(s => s.trim()) });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Experience
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.experience.join(', ').toString()}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, experience: e.target.value.split(',').map(s => s.trim()) });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Training
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.training.join(', ').toString()}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, training: e.target.value.split(',').map(s => s.trim()) });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Books
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.books.join(', ').toString()}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, books: e.target.value.split(',').map(s => s.trim()) });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Fees
                </label>
                <input
                  type="number"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.fees}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, fees: parseInt(e.target.value) });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Location
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.location}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, location: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Hospital
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.hospital}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, hospital: e.target.value });
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
                  value={doctorForm.department}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, department: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Image
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.image}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, image: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Specialization
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.specialization}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, specialization: e.target.value });
                  }}
                />
              </div>

              <div className="mb-3">
                <label for="name-with-label" class="text-gray-700 me-4">
                  Slots
                </label>
                <input
                  type="text"
                  className={`form-control ${inputClass}`}
                  aria-describedby="basic-addon3"
                  value={doctorForm.slots.join(', ').toString()}
                  onChange={(e) => {
                    SetDoctorForm({ ...doctorForm, slots: e.target.value.split(',').map(s => s.trim()) });
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

export default AddDoctor;
