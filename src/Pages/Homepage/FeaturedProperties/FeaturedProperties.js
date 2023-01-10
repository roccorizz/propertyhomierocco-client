import React, { useEffect, useState } from 'react';

import FeaturedPropertiesCards from './FeaturedPropertiesCards/FeaturedPropertiesCards';

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);
    useEffect(() => {
        fetch('https://property-homie-rocco-server-roccorizz.vercel.app/featured-properties')
            .then(res => res.json())
            .then(data => setProperties(data))

    }, [])

    return (
        <div>

            <div id="service-hero" className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-base-200 font-bold">Featured Properties</h1>

                    </div>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    properties.map(property => <FeaturedPropertiesCards key={property._id} featuredproperty={property}></FeaturedPropertiesCards>)
                }
            </div>


        </div>
    );
};

export default FeaturedProperties;