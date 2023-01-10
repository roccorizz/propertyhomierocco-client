import React from 'react';
import About from '../About/About';
import AllProperties from '../AllProperties/AllProperties';
import Properties from '../AllProperties/Properties';
import Banner from '../Banner/Banner';
import FeaturedProperties from '../FeaturedProperties/FeaturedProperties';
import Progress from '../Progress/Progress';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Progress></Progress>
            <Services></Services>
            <FeaturedProperties></FeaturedProperties>
            <Properties />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;