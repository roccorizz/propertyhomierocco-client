import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../counterlottie/counter1.json';
import animationData2 from '../../../counterlottie/counter2.json';
import animationData3 from '../../../counterlottie/counter3.json';
import animationData4 from '../../../counterlottie/counter4.json';
import MapData from './map.json';
import RatingData from './rating.json';
import ClientData from './client.json';
import ExperienceData from './experience.json';




const Progress = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: animationData3,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: animationData4,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const MapOptions = {
        loop: true,
        autoplay: true,
        animationData: MapData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const RatingOptions = {
        loop: true,
        autoplay: true,
        animationData: RatingData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const ClientOptions = {
        loop: true,
        autoplay: true,
        animationData: ClientData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const ExperienceOptions = {
        loop: true,
        autoplay: true,
        animationData: ExperienceData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div >
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow gap-10 ">

                <div className="stat place-items-center">
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={ExperienceOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={defaultOptions4}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="font-bold text-2xl ">Years of Experiences</div>
                </div>
                <div className="stat place-items-center">
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={ClientOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={defaultOptions}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="font-bold text-2xl">Satisfied Clients</div>
                </div>

                <div className="stat place-items-center items-center">
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={MapOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={defaultOptions2}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="font-bold text-center  text-2xl">Locations Covered</div>
                </div>

                <div className="stat place-items-center">
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={RatingOptions}
                            height={80}
                            width={80}
                        />
                    </div>
                    <div className='font-semibold text-3xl'>
                        <Lottie
                            options={defaultOptions3}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="font-bold text-center text-2xl">Five Star Ratings</div>
                </div>

            </div>
        </div>

    );
};

export default Progress;