import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Homepage/Shared/Footer/Footer';
import Header from '../Pages/Homepage/Shared/Header/Header';

const Main = () => {
    return (
        <div className='bg-white'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;