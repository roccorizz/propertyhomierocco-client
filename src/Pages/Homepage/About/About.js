import React from 'react';
import { Link } from 'react-router-dom';
import person from '../../../assets/images/about_us/person.png'
const About = () => {
    return (
        <div>
            <div className="hero mt-10">
                <div className=" grid grid-cols-1 lg:grid-cols-2 items-center place-items-center ">
                    <div className='w-1/2 mt-20  '>
                        <p className=' text-5xl font-semibold '>Hello, I'm <span className='text-amber-500 text-5xl'>Rocco Rizz</span></p>
                        <h1 className="my-5 text-lime-600 text-3xl font-bold">City's most acceptable realtor<br /> you can trust.</h1>
                        <p className="py-6 ">Since 2010, I have assisted over 1500 customers in saving over $85 million on their real estate transactions. I provide customers with a personalized experience for selling, purchasing, and renting properties, as well as assistance in obtaining a home loan, with complete transparency and flawless service.</p>
                        <Link to={'/aboutme'}>

                            <button className="btn btn-active btn-link font-bold">More About Me?</button>
                        </Link>
                    </div>
                    <div className=' w-1/2  '>
                        <img src={person} className=" h-[600px]  rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;