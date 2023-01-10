import React, { useEffect, useState } from 'react';
import AllPropertiesCards from './AllPropertiesCards';

import { Link } from 'react-router-dom';

const Properties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://property-homie-rocco-server-roccorizz.vercel.app/allproperties')
            .then(res => res.json())
            .then(data => setProperties(data))

    }, [])
    const slicedOfData = properties.slice(0, 3);
    return (
        <div>

            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h2 className="mb-1 text-2xl font-bold">All</h2><br />
                        <h2 className="mb-5 text-5xl font-bold">Properties</h2>

                    </div>
                </div>
            </div>

            <div className='text-center my-8  backdrop-blur '>


                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-5'>
                    {
                        slicedOfData.map(allproperty => <AllPropertiesCards
                            key={allproperty._id}
                            allproperty={allproperty}
                        ></AllPropertiesCards>)
                    }
                </div>
                <div className='text-center mt-10 mb-10 '>
                    <Link to='/allproperties' className='btn btn-outline btn-primary'>SEE ALL Properties</Link>
                </div>
            </div>


        </div>
    );
};

export default Properties;