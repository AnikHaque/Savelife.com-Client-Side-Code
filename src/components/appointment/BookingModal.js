import React from 'react'
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';

const BookingModal = ({ treatment, date, setTreatment, refetch, services }) => {
  const { _id, name, fees, availableSlots, email } = treatment;
  console.log("doctor name", name)
  console.log("avaialble slots from the modal", availableSlots);
  const Navigate = useNavigate();
  const [userInfo] = useAuthState(auth);



  const handleBooking = event => {
    event.preventDefault();
    const slot = event.target.slot.value;
    console.log(_id, name, slot);
    const booking = {
      treatmentId: _id,
      doctorName: name,
 
      doctorEmail: email,
      fees: fees,
      slot,
      patient: userInfo.email,
      patientName: userInfo.displayName,
      phone: event.target.phone.value,
      paymentStatus: "unpaid"
    }
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/hospitaldoctorsbooking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.success) {
          Navigate('/dashboard/myappointments');
          toast(`Appointment is set, at ${slot}`)
        }
        else {
          toast.error(`You already have an ppointment on,${data.booking?.date} at ${data.booking?.slot}`)
        }
        // Update doctors aviablable slots here
        const availableAppointments = availableSlots.filter(elem => elem !== slot);
        console.log("availableAppointments", availableAppointments);
        const newDocotor = {
          ...treatment,
          availableSlots: { ...availableSlots,  availableAppointments }
        }

        // const treatment[availableSlots]={...treatment[availableSlots],`${formatedDate}`:availableAppointments}
        // delete newDocotor[_id]
        // const newDocotor = { ...treatment, treatment[formatedDate]: availableAppointments }
        // console.log("new updated docotr ", newDocotor);
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/updatedoctoravailableslots?email=${email}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            id: _id
          },
          body: JSON.stringify(newDocotor)
        })
          .then(res => res.json())
          .then(data => console.log(data))
        refetch();
        setTreatment(null);
      })

  }
 
  return (
    <div>

      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">Booking for {name}</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
            <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
            {/* <select name="slot" className="select select-bordered w-full max-w-xs" required>
              {
                availableSlots?.map(slot => <option value={slot}>{slot}</option>)
              }

            </select> */}
            <input type="number" name='fees' className="input input-bordered w-full max-w-xs" defaultValue={fees} />
            <input type="text" name='name' className="input input-bordered w-full max-w-xs" defaultValue={userInfo.displayName} />
            <input type="email" name='email' placeholder='Email Address' className="input input-bordered w-full max-w-xs" defaultValue={userInfo.email} />
            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />

            <input type="submit" value='Submit' placeholder="Type here" className=" btn btn-primary input input-bordered w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  )
}
export default BookingModal;