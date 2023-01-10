import React from "react";
import Lottie from 'react-lottie';
import "./Testimonials.css";
import animationData from './testimoniallot.json';
import AVTR1 from "../../../assets/images/testimonial/avatar1.jpg";
import AVTR2 from "../../../assets/images/testimonial/avatar2.jpg";
import AVTR3 from "../../../assets/images/testimonial/avatar3.jpg";
import AVTR4 from "../../../assets/images/testimonial/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



const Testimonials = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const data = [
        {
            avatar: AVTR1,
            name: "Annie Manie",
            review:
                "Very good service indeed.They are the best"
        },
        {
            avatar: AVTR2,
            name: "Justin Cook",
            review:
                "One of the best platform I've ever seen in my life."
        },
        {
            avatar: AVTR3,
            name: "Taylor Swift",
            review:
                "They are doing great no doubt.Best of luck,guys."
        },
        {
            avatar: AVTR4,
            name: "Lady Gaga",
            review:
                "I am really blessed to have a platform like that.They made it easy."
        }
    ];
    return (
        <section id="testimonials">
            <div className="">

                <div className='font-semibold text-3xl'>
                    <Lottie
                        options={defaultOptions}
                        height={200}
                        width={200}
                    />
                </div>
                <h2 className="text-center text-5xl font-bold my-10">Testimonials</h2>
            </div>

            <Swiper
                className=" testimonials__container mb-10"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {data.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className="testimonials">
                            <div className="client__avatar aspect-square">
                                <img src={avatar} alt="" />
                            </div>
                            <h2 className="text-center text-white text-2xl">{name}</h2>
                            <p className="client_review">{review}</p>
                        </SwiperSlide>
                    );
                })}
            </Swiper>


        </section>
    );
};

export default Testimonials;