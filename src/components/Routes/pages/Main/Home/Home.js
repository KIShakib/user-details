import React from 'react';
import Users from '../Users/Users';

const Home = () => {

    return (
        <div className='pt-10 pb-8' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <h1 className='text-center font-extrabold lg:text-4xl md:text-3xl text-2xl text-cyan-500'>SOME POPULAR USERS ALL OVER THE WORLD</h1>
            <div className='my-10'>
                <Users />
            </div>
        </div>
    );
};

export default Home;