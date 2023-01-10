import React from 'react';

import person from '../assets/images/about_us/person.png'
import { FaPhoneAlt } from 'react-icons/fa';
const Contactme = () => {
    return (
        <div>
            <div className="hero my-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='relative w-1/2'>
                        <img src={person} className=" [url(https://i.ibb.co/XLF5Gfm/person.png)] w-full h-full rounded-lg " alt="" />
                    </div>
                    <div className='w-1/2 pl-2'>
                        <p className=' text-5xl font-semibold '><span className='text-amber-500 text-5xl'>Rocco Rizz</span></p>
                        <h1 className="my-5 text-lime-600 text-3xl font-bold">Real estate expert</h1>
                        <div>

                            <h3 className='text-2xl font-semibold text-teal-600 py-2'>Office:</h3>
                            <p className='text-xl font-semibold py-2'>212C Janae Steps Corkeryshire, SA 2692</p>
                        </div>
                        <div>

                            <h3 className='text-2xl font-semibold text-teal-600 py-2'>Phone:</h3>
                            <div className="navbar-end flex">
                                <h2 className='text-xl text-red-600 px-2'><FaPhoneAlt /></h2>
                                <h2 className='font-semibold  text-xl text-slate-500'>+1 (886) 234-5678</h2>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contactme;