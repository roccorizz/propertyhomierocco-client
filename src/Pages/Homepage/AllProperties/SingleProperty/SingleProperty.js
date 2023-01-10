import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoView, PhotoProvider } from 'react-photo-view';
import Addreview from '../../Reviews/MyReviews/Addreview';

import { AuthContext } from '../../../../Contexts/Authprovider/Authprovider';
const SingleProperty = () => {
    const { name, balance, picture, description } = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className='mx-10'>
            <PhotoProvider>

                <form>
                    <h2 className="text-4xl my-5 text-center">{name}</h2>
                    <PhotoView src={picture}><img src={picture} alt="" /></PhotoView>
                    <h3 className="text-4xl my-5 text-center">Service Fee: {balance}</h3>
                    <h3 className="text-4xl my-5 text-center">{description}</h3>
                </form>
            </PhotoProvider>


            {
                user?.email ?
                    <>
                        <Addreview user={user} />
                    </>


                    :
                    <>
                        <h2 className='text-3xl text-center'><Link to='/login'><span className='text-blue-500'>Login</span></Link> to give a review</h2>

                    </>
            }

            <div>
            </div>
        </div >


    );
};

export default SingleProperty;