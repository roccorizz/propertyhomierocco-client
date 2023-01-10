import React from 'react';
import { Link } from 'react-router-dom';
import video from '../../../../src/assets/Video/VID_20221221125454.mp4'
import './BannerItem.css'
const Banner = () => {
    return (
        <div className="carousel-item relative w-full">
            <div className='carousel-img '>
                <video src={video} autoPlay loop muted
                    alt=''
                    className="w-full h-full rounded-xl " />
            </div>
            <div className="absolute justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                <h1 className='lg:text-3xl text-xl mt-20 ml-0 text-white font-bold '>I deliver the very best <br />in all facets of <br /><span className='lg:text-7xl font-bold text-green-400'>real estate</span>.<br />Because you deserve <br />no less.  </h1>
            </div>



        </div>
    );
};

export default Banner;