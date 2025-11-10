import React from 'react';
import FeaturedFoods from '../components/HomePage/FeaturedFoods';
import HowItWorks from '../components/HomePage/HowItWorks';
import OurMission from '../components/HomePage/OurMission';
import Hero from '../components/HomePage/Hero';

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedFoods />
            <HowItWorks />
            <OurMission />

        </div>
    );
};

export default Home;