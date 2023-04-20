import React from "react";
// swiper import
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Zoom,EffectCoverflow  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react'
import Reviewdg from "./Reviewdg";


const Reviewda = () => {
  //    fake data
  const testimonials = [
    {
      quote:
        "I saw Dr. Md. Firoj Hossain was able to diagnosis my condition immediately. He and his staff were extremely professional and kind. There was absolutely no wait time. I would highly recommend this practice to anyone looking for a neurologist.",
      name: "Md Mazid Mahmud",
      from: "Dhaka",
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
    },
    {
      quote:
        "I had a great experience with Dr. Humaira Afreen. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box to see what’s going on. It was entirely stress free.",
      name: "Nabila Islam",
      from: "Chittagong",
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
    },
    {
      quote:
        "I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.",
      name: "Syed  Ahmed Molla",
      from: "Rajshahi",
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
    },
    {
      quote:
        "I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.",
      name: "Syed Asif Ahmed",
      from: "Rajshahi",
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
    },
    {
      quote:
        "I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.",
      name: "Syed Asif Ahmed",
      from: "Rajshahi",
      img: "https://i.ibb.co/8x9xK4H/team.jpg",
    },
  ];

  return (
    <div className="container mx-auto px-6 p-3">
       <div className='mb-[100px] mt-[30px]'>
       <p className='text-center text-4xl uppercase font-bold  '>What says our <span className='text-[#1b82e2]'> (patients) </span> regarding of us </p>
        <p className='text-center mt-1'> if your have any doubdt regarding of us. Hope you well get your ans from here.This review patient give from her soul </p>
       </div>
      <div>
      <Swiper
                  className="shadow-none box-content"
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y,EffectCoverflow ]}
                    spaceBetween={40}
                    effect={"coverflow"}
                    centeredslide="true"
                    navigation
                    key={testimonials.length}
                    autoplay={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1.5,
                        
                      }}
                      
                      slidesPerView={"auto"}
                    // breakpoints={{
                    //     300: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //       },
                    //     500: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //       },
                    //     640: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 20,
                    //     },
                    //     768: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 40,
                    //     },
                    //     1024: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 50,
                    //     },
                    //   }}
                >

{
                       testimonials.map((testimonials, index) => (
                            <SwiperSlide className="bg-[#FFFFFF] shadow-none  " key={index} >
                                <Reviewdg key={testimonials._id} testimonials={testimonials} ></Reviewdg>
                            </SwiperSlide>
                        ))
                    }

           </Swiper>


      </div>
    </div>
  );
};

export default Reviewda;
