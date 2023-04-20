import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './SingleAmbulance.css';
const SingleAmbulance = ({ ambulances }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/ambooking`, data)
      .then(res => {

        toast('Added Ambulance Successfully')
        reset();



      })
  }

  return (
    <div>
      <div className="w-full ambulancecard  bg-base-100">
        <figure><img src={ambulances.image} className='w-full h-72' alt="Shoes" /></figure>
        <div className="">
          <h2 className="text-2xl font-bold text-[#1b82e2] mt-4">{ambulances.name}</h2>
          <p>{ambulances.description.slice(0, 100)}</p>

          <div className="card-actions justify-end">
            <p className='text-right mb-2'><b>$</b> {ambulances.price}</p>
          </div>
          <div className="card-actions justify-center">

            <label htmlFor="my-modal-3" className="btn bg-[#0071DC] hover:bg-black w-full">Book Ambulance</label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />

            <div className="modal">
              <div className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
                  <h1 className='font-bold text-2xl mb-1 text-primary'>Please Make a Booking: </h1>
                  <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' />


                  <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' />


                  <input {...register("coursename", { required: true, maxLength: 1520 })} placeholder="Course Name" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />



                  <input type="text" {...register("price")} placeholder="Course Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />


                  <input {...register("image", { required: true, maxLength: 1920 })} placeholder="Course Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />





                  <input {...register("address", { required: true, })} placeholder="User Address" className='input input-bordered w-full max-w-xs drop-shadow-lg' />




                  <input type="submit" className='w-80 btn bg-[#0071DC] hover:bg-black shadow-banner' value='Book Ambulance' />
                </form>
              </div>
            </div>

            {/* <div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </div>
</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default SingleAmbulance;
