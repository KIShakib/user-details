import React from 'react';
import Agencies from '../Agencies/Agencies';

const Home = () => {

    return (
        <div className='pt-10 pb-8' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <h1 className='text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-cyan-500'>Most Popular Travel Agencies All Over South Asia.</h1>
            <div className='my-10'>
                <Agencies />
            </div>
        </div>
    );
};

export default Home;