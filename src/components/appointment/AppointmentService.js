import moment from 'moment-timezone';
import React from 'react';
const AppointmentService = ({ service, setTreatment, date }) => {
  const { name, availableSlots } = service;
  
  // console.log("formating date with moment js", moment(availableSlots[date]).format('l'));
  return (
    <>
      <div>
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
          <div className="card-body mx-auto">
            <h2 className="card-title text-primary">{name}</h2>
            <p>
              {availableSlots?.length
                ? null
                :
                <span className='text-red-500'>Try another day !!</span>

              }
            </p>
            <p>{availableSlots?.length} {availableSlots?.length > 1 ? 'spaces' : 'space'} available</p>
            <div className="card-actions justify-center">
              <label
                disabled={availableSlots?.length === 0}
                htmlFor="booking-modal"
                onClick={() => setTreatment(service)}
                className="btn btn-primary">
                <i class="fa-regular fa-calendar-check mr-2"> </i>Book Appointment
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AppointmentService;