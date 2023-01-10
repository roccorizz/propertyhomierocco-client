import React from 'react';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';



const FeaturedPropertiesCards = ({ featuredproperty }) => {
    const { _id, name, address, image, price, description } = featuredproperty;
    const limit = 100;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <figure><img className='w-full h-52' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl capitalize">{name}
                </h2>
                <div className="card-actions justify-start">
                    <h3 className='text-slate-500' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'> {price}</span></h3>
                </div>
                <h2 className="text-lg capitalize"><strong>Address:</strong> {address}</h2>
                <div className="card-actions justify-start"></div>
                <div className="card-actions justify-start">
                    <h3 className='text-black' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{description.substring(0, limit) + "..."}</h3>
                </div>
                <div className='flex justify-end'>
                    <Link to={`/singleproperty/${_id}`} className='btn btn-outline btn-primary btn-sm'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedPropertiesCards;
// export default FeaturedPropertiesCards;