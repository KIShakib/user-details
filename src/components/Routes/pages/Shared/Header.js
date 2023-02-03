import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModeChange } from '../../../../features/toggleMode/toggleModeSlice';
import lightMode from "../../../../assets/light-mode.png";
import darkMode from "../../../../assets/dark-mode.png";

const Header = () => {

    const { toggleMode } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div className={`flex justify-between h-14 lg:px-32 items-center md:px-16 sm:px-10 px-10 ${toggleMode ? "bg-[#0a192f] text-cyan-400" : "bg-cyan-400"}`} style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
            <Link to="/" className='text-xl font-bold' style={{ fontFamily: "'Bellefair', sans-serif" }}>USER DETAILS</Link>
            <div className='flex gap-x-4'>
                <button onClick={() => { dispatch(toggleModeChange()) }}>
                    <img className='w-8' src={toggleMode ? lightMode : darkMode} alt="" />
                </button>
                <div className="relative">
                    <img className="w-10 h-10 rounded" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
                    <span className="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 dark:border-gray-800 rounded-full"></span>
                </div>
            </div>
        </div>
    );
};

export default Header;