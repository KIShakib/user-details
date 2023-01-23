import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-cyan-400 h-14 lg:px-32 items-center px-4' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link to="/" className='text-xl font-bold' style={{ fontFamily: "'Bellefair', sans-serif" }}>GO TRAVEL</Link>
            <ul className='flex justify-between font-bold lg:gap-x-20 gap-x-4'>Book Now</ul>
        </div>
    );
};

export default Header;