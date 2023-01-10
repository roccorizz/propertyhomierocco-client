import React, { useEffect, useState } from 'react';

import ServiceCard from '../ServiceCard/ServiceCard';


const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://property-homie-rocco-server-roccorizz.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>

            <div className='text-center my-8 bg-[url(https://i.ibb.co/kXRrQ2Z/image-3033200-1280.jpg)] h-[200px]'>
                <div className='w-full h-full backdrop-blur'>

                    <p className='text-5xl font-bold text-white'>All Services</p>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;