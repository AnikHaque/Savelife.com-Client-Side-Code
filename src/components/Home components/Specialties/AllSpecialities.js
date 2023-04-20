import React from 'react'

 const AllSpecialities = ({ doctor }) => {
    const {
        _id,
        image,
        category,
        name,
        location,
        education,
        reviews,
        designation,
        department,
        hospital,
        slots,
        fees,
        specialization,
      } = doctor;
  return (
    <div>
          {/* Specialties Card  */}
      <div className="grid gap-9 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">
        {/* Card-Body-15  */}
        <div className="tp-4 mb-3 pt-5 pb-5  rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src={image} alt="" className="h-24 w-24 rounded-full object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-2xl tmb-2 font-bold text-[#1b82e2]">
                Dental Care / Dentistry
              </h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis, management, and treatment of defects and injuries
                related to the teeth and gums.
              </p>
              <i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllSpecialities;