import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { NavigationBar } from "../../shared/NavigationBar/NavigationBar";

const EditDoctor = () => {
  const { register, handleSubmit } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const [doctorForm, SetDoctorForm] = useState({
    name: "",
    designation: "",
    reviews: "",
    education: [],
    experience: [],
    training: [],
    books: [],
    fees: "",
    location: "",
    hospital: "",
    department: "",
    image: "",
    specialization: "",
    slots: [],
  });

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/hospitaldoctors/${id}`)
      .then((res) => res.json())
      .then(data => {
        SetDoctorForm({
          name: data.name,
          designation: data.designation,
          reviews: data.reviews,
          education: data?.education,
          experience: data?.experience,
          training: data?.training,
          books: data?.books,
          fees: data?.fees,
          location: data?.location,
          hospital: data?.hospital,
          department: data?.department,
          image: data?.image,
          specialization: data?.specialization,
          slots: data?.slots
        })
      }
      )
  }, []);

  const inputClass =
    "rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparenta";

  const onDelete = () => {
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/doctors/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        navigate('/', { replace: true })
      });

  }

  const onSubmit = () => {
    console.log({ ...doctorForm, edititem: true });
    const url = `${process.env.REACT_APP_SERVER_BASE_URL}/doctors/${id}`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...doctorForm }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // navigate(from);
      });
  };

  return (
    <>
      <NavigationBar isHome={true} />
      <div className="mt-[150px] container mx-auto">
        <div class="relative mx-auto w-[50vw]">
          <h1 className="text-4xl font-extrabold py-10">
            Edit a Doctor's Details
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
                  SetDoctorForm({
                    ...doctorForm,
                    reviews: parseInt(e.target.value),
                  });
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
                value={doctorForm.education?.join(", ").toString()}
                onChange={(e) => {
                  SetDoctorForm({
                    ...doctorForm,
                    education: e.target.value.split(",").map((s) => s.trim()),
                  });
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
                value={doctorForm.experience?.join(", ").toString()}
                onChange={(e) => {
                  SetDoctorForm({
                    ...doctorForm,
                    experience: e.target.value.split(",").map((s) => s.trim()),
                  });
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
                value={doctorForm.training?.join(", ").toString()}
                onChange={(e) => {
                  SetDoctorForm({
                    ...doctorForm,
                    training: e.target.value.split(",").map((s) => s.trim()),
                  });
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
                value={doctorForm.books?.join(", ").toString()}
                onChange={(e) => {
                  SetDoctorForm({
                    ...doctorForm,
                    books: e.target.value.split(",").map((s) => s.trim()),
                  });
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
                  SetDoctorForm({
                    ...doctorForm,
                    fees: parseInt(e.target.value),
                  });
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
                  SetDoctorForm({
                    ...doctorForm,
                    specialization: e.target.value,
                  });
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
                value={doctorForm.slots?.join(", ").toString()}
                onChange={(e) => {
                  SetDoctorForm({
                    ...doctorForm,
                    slots: e.target.value.split(",").map((s) => s.trim()),
                  });
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
              <button
                href="#!"
                type="button"
                className="btn bg-red-500  mt-5 hover:bg-yellow-600"
                onClick={() => (onDelete())}
                value="Add Product"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditDoctor;
