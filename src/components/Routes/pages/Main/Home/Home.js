import React from 'react';
import Agencies from '../Agencies/Agencies';

const Home = () => {

    return (
        <div className='py-10' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <h1 className='text-center font-extrabold lg:text-4xl text-cyan-500'>Most Popular Travel Agencies All Over India.</h1>
            <div className='my-10'>
                <Agencies />
            </div>
        </div>
    );
};

export default Home;