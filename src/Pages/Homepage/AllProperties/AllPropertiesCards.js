import React from 'react';
import { Link } from 'react-router-dom';

import 'react-photo-view/dist/react-photo-view.css';



const AllPropertiesCards = ({ allproperty }) => {
    const { _id, name, image, price, description } = allproperty;
    const limit = 100;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <figure><img className='w-full h-52' src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl capitalize">{name}</h2>
                <div className="card-actions justify-start">
                    <h3 className='text-black-600' style={{ fontSize: '22px' }}><strong>Price</strong> :<span className='text-cyan-500 font-semibold'> {price}</span></h3>
                </div>
                <div className="card-actions text-start">
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

export default AllPropertiesCards;
// export default FeaturedPropertiesCards;