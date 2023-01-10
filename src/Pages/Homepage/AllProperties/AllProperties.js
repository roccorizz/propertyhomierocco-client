import React, { useEffect, useState } from 'react';


import AllPropertiesCards from './AllPropertiesCards';


const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://property-homie-rocco-server-roccorizz.vercel.app/allproperties')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])
    return (
        <div>

            <div className='text-center my-8  h-[200px]'>
                <div className='w-full h-full backdrop-blur'>

                    <p className='text-5xl font-bold text-white'>All Properties</p>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    properties.map(allproperty => <AllPropertiesCards
                        key={allproperty._id}
                        allproperty={allproperty}
                    ></AllPropertiesCards>)
                }
            </div>
        </div>
    );
};

export default AllProperties;