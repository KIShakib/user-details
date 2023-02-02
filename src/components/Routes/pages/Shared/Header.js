import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between bg-cyan-400 h-14 lg:px-32 items-center px-4' style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link to="/" className='text-xl font-bold' style={{ fontFamily: "'Bellefair', sans-serif" }}>USER DETAILS</Link>
            <div class="relative">
                <img class="w-10 h-10 rounded" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                <span class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
        </div>
    );
};

export default Header;