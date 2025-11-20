import React from 'react';
import Hero from '../components/HomePage/Hero';
import FeaturedFoods from '../components/HomePage/FeaturedFoods';
import HowItWorks from '../components/HomePage/HowItWorks';
import OurMission from '../components/HomePage/OurMission';
import { useLoaderData } from 'react-router';

const Home = () => {
    const featuredFoods = useLoaderData()
    return (
        <div>
            <Hero/>
            <FeaturedFoods featuredFoods={featuredFoods}/>
            <HowItWorks />
            <OurMission />
        </div>
    );
};

export default Home;