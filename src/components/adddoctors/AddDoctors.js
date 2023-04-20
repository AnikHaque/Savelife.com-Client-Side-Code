import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddDoctors.css';


const AddDoctors = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className='container-fluid add-courses'>
            <h1 className='text-center text-2xl  mb-4  text-title'>  <Typewriter
                options={{
                    strings: [' Please add a Doctor with All information : '],
                    autoStart: true,
                    loop: true,

                }}
            /></h1>


            <form onSubmit={handleSubmit(onSubmit)} className='text-center'>
                <input {...register("displayname",)} placeholder="Name" />
                <br></br>
                <br></br>
                <input {...register("name",)} placeholder="Doctor Name" />
                <br></br>
                <br></br>
                <input {...register("designation",)} placeholder="Doctor Designation" />
                <br></br>
                <br></br>
                <input {...register("reviews",)} placeholder="Doctor's total Reviews" />
                <br></br>
                <br></br>
                <input {...register("category",)} placeholder="Category" />
                <br></br>
                <br></br>
                <input {...register("education",)} placeholder=" Education" />
                <br></br>
                <br></br>
                <input type="number" {...register("fees",)} placeholder="Total Fees" />
                <br></br>
                <br></br>
                <input {...register("location",)} placeholder=" Doctor's Location" />
                <br></br>
                <br></br>
                <input {...register("hospital",)} placeholder=" Doctor's Hospital" />
                <br></br>
                <br></br>
                <input {...register("Awards1",)} placeholder=" Doctor's Awards 1" />
                <br></br>
                <br></br>
                <input {...register("Awards2",)} placeholder=" Doctor's Awards 2" />
                <br></br>
                <br></br>
                <input {...register("Awards3",)} placeholder=" Doctor's Awards 3" />
                <br></br>
                <br></br>
                <input {...register("Services1",)} placeholder="Doctor's Services 1" />
                <br></br>
                <br></br>
                <input {...register("Services2",)} placeholder="Doctor's Services 2" />
                <br></br>
                <br></br>
                <input {...register("Services3",)} placeholder="Doctor's Services 3" />
                <br></br>
                <br></br>
                <input {...register("Services4",)} placeholder="Doctor's Services 4" />
                <br></br>
                <br></br>
                <input {...register("Services5",)} placeholder="Doctor's Services 5" />
                <br></br>
                <br></br>
                <input {...register("Services6",)} placeholder="Doctor's Services 6" />
                <br></br>
                <br></br>
                <input {...register("Specialization1",)} placeholder="Doctor's Specialization 1" />
                <br></br>
                <br></br>
                <input {...register("Specialization2",)} placeholder="Doctor's Specialization 2" />
                <br></br>
                <br></br>
                <input {...register("Specialization3",)} placeholder="Doctor's Specialization 3" />
                <br></br>
                <br></br>
                <input {...register("Specialization4",)} placeholder="Doctor's Specialization 4" />
                <br></br>
                <br></br>
                <input {...register("Specialization5",)} placeholder="Doctor's Specialization 5" />
                <br></br>
                <br></br>
                <input {...register("Specialization6",)} placeholder="Doctor's Specialization 6" />
                <br></br>
                <br></br>
                <input {...register("image",)} placeholder="Doctor's Image" />
                <br></br>
                <br></br>
                <input {...register("slot1",)} placeholder=" Available slot 1" />
                <br></br>
                <br></br>
                <input {...register("slot2",)} placeholder=" Available slot 2" />
                <br></br>
                <br></br>
                <input {...register("slot3",)} placeholder=" Available slot 3" />
                <br></br>
                <br></br>
                <input {...register("slot4",)} placeholder=" Available slot 4" />
                <br></br>
                <br></br>
                <input {...register("slot5",)} placeholder=" Available slot 5" />
                <br></br>
                <br></br>
                <input {...register("slot6",)} placeholder=" Available slot 6" />
                <br></br>
                <br></br>
                <button className="btn lg:max-w-lg btn-primary">Add Doctor</button>


            </form>



        </div>
    );
};

export default AddDoctors;