import React from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedFoods from '../components/HomePage/FeaturedFoods';
import HowItWorks from '../components/HomePage/HowItWorks';
import OurMission from '../components/HomePage/OurMission';

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