
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/Authprovider/Authprovider';
import './Addreview.css';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Addreview = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id } = service;
    const handleAddReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const message = form.review.value;
        const review = {
            serviceId: _id,
            customer: name,
            email,
            message,
            date: new Date()
        }

        fetch('https://property-homie-rocco-server-roccorizz.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully submitted!')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            <div className='addreviewpage'>
                <Helmet>
                    <title>Add Review</title>
                </Helmet>
                <div className='singleServiceBanner mb-10' style={{ width: '100%' }}>
                    <h2 className='text-center'>Add Review</h2>
                </div>
                <div>
                    <h2 className='text-center text-3xl mt-5 mb-5'>Add Review Form</h2>
                    <div className='card'>
                        <form className='addr-form' onSubmit={handleAddReview}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 mb-5">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    defaultValue={user?.displayName}
                                    className="input input-bordered input-accent w-full"
                                    name="name"
                                    readOnly />
                                <input
                                    type="text"
                                    placeholder="Your email"
                                    defaultValue={user?.email}
                                    className="input input-bordered input-accent w-full"
                                    name="email"
                                    readOnly
                                />

                            </div>
                            <div>
                                <textarea name="review" placeholder='Enter your review' className="textarea h-24 input-accent w-full" required></textarea>
                            </div>
                            <div className="text-center">
                                <input className=" btn btn-warning btn-outline text-white-600 btn-sm mt-3 mb-3" type="submit" value="Submit"></input>

                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addreview;