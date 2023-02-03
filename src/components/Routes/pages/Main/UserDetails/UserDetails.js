import React from 'react';

const UserDetails = ({ user }) => {
    const { id, name, phone, username, address, company, email, website } = user;
    return (
        <div className='shadow border rounded-lg p-8 flex gap-y-4 justify-between'>
            <div>
                <img className='lg:w-72' src={`https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`} alt="" />
            </div>
            <div className='flex flex-col gap-y-4'>
                <div>
                    <h3 className='font-bold tracking-widest'>Name</h3>
                    <p>{name}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Username</h5>
                    <p>{username}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Emails</h5>
                    <p>{email}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Website</h5>
                    <p>{website}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div>
                    <h5 className='font-bold tracking-widest'>Contact Number</h5>
                    <p>{phone.split(" ")[0]}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Address</h5>
                    <p>{address.suite}, {address.street}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>City</h5>
                    <p>{address.city}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Zip Code</h5>
                    <p>{address.zipcode}</p>
                </div>
            </div>
            <div className='flex flex-col gap-y-4'>
                <div>
                    <h5 className='font-bold tracking-widest'>Company Name</h5>
                    <p>{company.name}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Company Catch Phrase</h5>
                    <p>{company.catchPhrase}</p>
                </div>
                <div>
                    <h5 className='font-bold tracking-widest'>Company Category</h5>
                    <p>{company.bs}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;