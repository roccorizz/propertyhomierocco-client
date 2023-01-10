import React from 'react';

import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

import animationService from './ServicesLottie/serviceHome.json';
import animationService2 from './ServicesLottie/serviceHome2.json';
import animationService3 from './ServicesLottie/serviceHome3.json';
import animationService4 from './ServicesLottie/serviceHome4.json';
import animationService5 from './ServicesLottie/serviceHome5.json';
import animationService6 from './ServicesLottie/serviceHome6.json';
import animationService7 from './ServicesLottie/serviceHome7.json';

const Services = () => {



    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationService,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationService2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationService3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: animationService4,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: animationService5,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions6 = {
        loop: true,
        autoplay: true,
        animationData: animationService6,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions7 = {
        loop: true,
        autoplay: true,
        animationData: animationService7,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const about1 = "Every listing agent has a similar goal sell your house for the most money in the least amount of time";
    const about2 = "Learn how to rent your house with an agent, and discover the benefits and costs of hiring real estate agents for rentals";
    const about3 = "We provide a fully integrated property consultancy service from project inception and strategy formulation.";
    const about4 = "Buying a home is often one of the most expensive endeavors one will take throughout their life.";
    const about5 = "Buying a home can be a complicated and confusing process, even for seasoned home buyers.";
    const about6 = "When financing or refinancing a house, you will eventually make a transaction with a mortgage lender.";

    const limit = 100;
    return (
        <div>
            <div className='w-full h-full'>
                <div className='w-full h-full'>
                    <Lottie
                        options={defaultOptions}
                        height={300}
                        width={300}
                    />
                    <h3 className='text-black text-4xl text-center mt-5 font-semibold'>Services I provide</h3>
                </div>
            </div>
            {/* className='bg-[url(https://i.ibb.co/jHJJHQs/hd-wallpaper-2563976-1920.jpg)] backdrop-blur' */}
            <div >


                <div className='text-center my-8  backdrop-blur '>


                    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-6 py-1 bg-[url(https://i.ibb.co/CPQPrsS/picture-frame-3737438-1920.jpg)] backdrop-blur shadow-xl'>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions2}
                                height={180}
                                width={250}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Rent Property</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about2}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions3}
                                height={180}
                                width={250}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Buy Property</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about5}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions4}
                                height={180}
                                width={200}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Property Consultancy</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about3}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions5}
                                height={180}
                                width={250}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Home Loan</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about4}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions6}
                                height={180}
                                width={250}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Sell Property</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about1}</h3>
                                </div>

                            </div>
                        </div>
                        <div className="card w-72 glass">
                            <figure><Lottie
                                options={defaultOptions7}
                                height={180}
                                width={250}
                            /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl capitalize">Mortgage Property</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'>$3,531.35</span></h3>
                                </div>
                                <div className="card-actions text-start">
                                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{about6}</h3>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>

            </div>
        </div >
    );
};

export default Services;



