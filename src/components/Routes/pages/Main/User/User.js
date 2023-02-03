import React from 'react';
import { useSelector } from 'react-redux';
import UserDetails from '../UserDetails/UserDetails';

const User = ({ user, viewDetails, setViewDetails, openId, setOpenId }) => {
    const { id, name, phone, username, address, company, email, website } = user;

    const { toggleMode } = useSelector(state => state);

    const handleDetailsOpen = (id) => {
        setViewDetails(!viewDetails)
        setOpenId(id)
    }



    return (
        <div className={`${toggleMode ? "bg-[#0a192f] text-cyan-400" : "bg-white"} p-8  rounded-xl`}>



            <div className='lg:flex lg:flex-row justify-between items-center flex sm:flex-col sm:gap-y-4 flex-col gap-y-4'>
                <div className='lg:w-[10%]'>
                    <img className='w-24' src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`} alt="" />
                </div>
                <div className='flex-grow-1 lg:w-[30%]'>
                    <h1 className='lg:text-2xl md:text-2xl sm:text-xl font-bold tracking-widest lg:ml-10'>{name}</h1>
                </div>
                <div className='lg:w-[45%] lg:flex lg:flex-row flex lg:gap-x-10 lg:my-0 sm:w-full sm:justify-center sm:gap-x-5'>
                    <div className='flex-grow-1 lg:w-[50%]'>
                        <h4 className='text-sm font-bold tracking-widest'>CONTACT</h4>
                        <h4 className='font-bold tracking-widest'>{phone.split(" ")[0]}</h4>
                    </div>
                    <div className='flex-grow-1 lg:w-[50%]'>
                        <h4 className='text-sm font-bold tracking-widest'>CITY</h4>
                        <h4 className='font-bold tracking-widest'>{address?.city}</h4>
                    </div>
                </div>
                <div className='flex-grow-1 lg:w-[15%] flex justify-center'>
                    <button onClick={() => handleDetailsOpen(id)} className='bg-red-500 px-2 py-1 rounded-xl text-cyan-200 font-bold text-sm transition duration-500'>{(viewDetails && openId === id) ? "HIDE DETAILS" : "VIEW DETAILS"}</button>
                </div>
            </div>




            {
                (openId === id && viewDetails) &&
                <div className='mt-6 lg:p-10'>
                    <UserDetails user={user} />
                </div>
            }
        </div >
    );
};

export default User;