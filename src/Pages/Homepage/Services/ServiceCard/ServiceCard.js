import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';

const ServiceCard = ({ service }) => {
    const { _id, picture, balance, name, about } = service;
    // const handleservice = event => {
    //     event.preventDefault();


    //     // if(phone.length>10){
    //     //     alert('Phone number should be 10 characters or larger')
    //     // }
    //     // else{

    //     // }

    //     fetch('https://property-homie-rocco-server-roccorizz.vercel.app/services/:id', {
    //         method: 'GET',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify()
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => console.error(err));
    // }
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationService,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={picture} alt=''></img></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-xl text-red-600 font-semibold'>Starting from {balance}</p>
                <p className=' text-slate-500'>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/singleservice/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
        // <div className="card-actions justify-end">
        //     <Link to={`/singleservice/${_id}`}>
        //         <button className="btn btn-primary">Details</button>
        //     </Link>
        // </div>





    );
};

export default ServiceCard;