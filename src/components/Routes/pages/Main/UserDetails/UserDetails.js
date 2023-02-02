import React from 'react';

const UserDetails = ({ agency }) => {
    const { id, name, contact, city, state, description, designation, email, phone, address, country } = agency;
    return (
        <div className='shadow border rounded-lg p-8 flex flex-col gap-y-4'>
            <div>
                <h3 className='font-bold tracking-widest'>Description</h3>
                <p>{description}</p>
            </div>
            <div className='lg:flex gap-x-72'>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <h5 className='font-bold tracking-widest'>Contact  Person</h5>
                        <p>{contact}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>Designation</h5>
                        <p>{designation}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>Emails</h5>
                        <p>{email}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>Phones</h5>
                        <p>{phone}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <div>
                        <h5 className='font-bold tracking-widest'>Address</h5>
                        <p>{address}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>City</h5>
                        <p>{city}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>State</h5>
                        <p>{state}</p>
                    </div>
                    <div>
                        <h5 className='font-bold tracking-widest'>Country</h5>
                        <p>{country}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;