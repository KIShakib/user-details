import React from 'react';
import AgencyDetails from '../AgencyDetails/AgencyDetails';

const Agency = ({ agency, viewDetails, setViewDetails, openId, setOpenId }) => {
    const { id, name, contact, city, state } = agency;

    const handleDetailsOpen = (id) => {
        setViewDetails(!viewDetails)
        setOpenId(id)
    }

    return (
        <div className=' bg-white p-8  rounded-xl'>
            <div className='lg:flex justify-between items-center'>
                <div className='flex-grow-1 lg:w-[35%] flex-basis-[35%]'>
                    <h1 className='text-2xl font-bold tracking-widest lg:ml-10'>{name}</h1>
                </div>
                <div className='flex-grow-1 lg:w-[45%] flex-basis-[35%] lg:flex lg:flex-row flex gap-x-10 my-4 lg:my-0'>
                    <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                        <h4 className='text-sm font-bold tracking-widest'>CONTACT</h4>
                        <h4 className='font-bold tracking-widest'>{contact}</h4>
                    </div>
                    <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                        <h4 className='text-sm font-bold tracking-widest'>CITY</h4>
                        <h4 className='font-bold tracking-widest'>{city}</h4>
                    </div>
                    <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                        <h4 className='text-sm font-bold tracking-widest'>STATE</h4>
                        <h4 className='font-bold tracking-widest'>{state}</h4>
                    </div>
                </div>
                <div className='flex-grow-1 lg:w-[20%] flex-basis-[25%] flex justify-center'>
                    <button onClick={() => handleDetailsOpen(id)} className='bg-red-500 px-2 py-1 rounded-xl text-slate-50 font-bold text-sm transition duration-500'>{(viewDetails && openId === id) ? "HIDE DETAILS" : "VIEW DETAILS"}</button>
                </div>
            </div>
            {
                (openId === id && viewDetails) &&
                <div className='mt-6 lg:p-10'>
                    <AgencyDetails agency={agency} />
                </div>
            }
        </div >
    );
};

export default Agency;