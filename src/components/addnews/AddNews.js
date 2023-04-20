import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddNews.css';
import { NavigationBar } from '../../shared/NavigationBar/NavigationBar';

const AddNews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/news`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div>
            <NavigationBar isHome={true}></NavigationBar>
            <h1 className='text-center text-4xl  mb-4  text-primary'>  <Typewriter
                options={{
                    strings: [' Please add a Blog with Details : '],
                    autoStart: true,
                    loop: true,

                }}
            /></h1>
            <div className='container-fluid add-courses'>



                <div className="card card-compact lg:max-w-lg bg-base-100  shadow-xl">
                    <figure><img src="https://thumbs.dreamstime.com/b/word-blog-colourful-letters-15012227.jpg" className='w-96' alt="Shoes" /></figure>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("name",)} placeholder="Blog Name" />
                            <input {...register("description",)} placeholder="Blog Description" />
                            <input {...register("addedBy",)} placeholder=" Added by the doctor" />
                            <input {...register("image",)} placeholder=" doctor's Image" />
                            <input {...register("blogImage",)} placeholder=" Blog Image" />
                            <input {...register("addedTime",)} placeholder=" Time" />
                            <input {...register("comment",)} placeholder="Total Comment" />
                            <input {...register("reviews",)} placeholder="Total Reviews" />

                            <button className="btn btn-primary w-full">Add blog</button>


                        </form>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddNews;