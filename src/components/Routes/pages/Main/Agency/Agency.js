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
            <div className='flex justify-between items-center'>
                <div className='flex-grow-1 w-[35%] flex-basis-[35%]'>
                    <h1 className='text-2xl font-bold tracking-widest'>{name}</h1>
                </div>
                <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                    <h4 className='text-sm font-bold tracking-widest'>CONTACT</h4>
                    <h4 className='font-bold text-lg'>{contact}</h4>
                </div>
                <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                    <h4 className='text-sm font-bold tracking-widest'>CITY</h4>
                    <h4 className='text-lg font-bold tracking-widest'>{city}</h4>
                </div>
                <div className='flex-grow-1 w-[25%] flex-basis-[25%]'>
                    <h4 className='text-sm font-bold tracking-widest'>STATE</h4>
                    <h4 className='text-lg font-bold tracking-widest'>{state}</h4>
                </div>
                <div className='flex-grow-1 w-[25%] flex-basis-[25%] flex justify-center'>
                    <button onClick={() => handleDetailsOpen(id)} className='bg-red-500 px-2 py-1 rounded-xl text-slate-50 font-bold text-sm transition duration-500'>{(viewDetails && openId === id) ? "HIDE DETAILS" : "VIEW DETAILS"}</button>
                </div>
            </div>
            {
                (openId === id && viewDetails) &&
                <div className=''>
                    <AgencyDetails agency={agency} />
                </div>
            }
        </div >
    );
};

export default Agency;