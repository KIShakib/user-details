import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Shared/Spinner';
import User from '../User/User';
import Pagination from '../Pagination/Pagination';
import { fetchUsers } from '../../../../../features/user/usersSlice';

const Users = () => {
    const [viewDetails, setViewDetails] = useState(false);
    const [openId, setOpenId] = useState();
    const [activePage, setActivePage] = useState(1);
    const { users, error, isLoading } = useSelector(state => state.users);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    // Pagination
    let slicedArray = users.slice(0, 4);

    if (activePage === 1) {
        slicedArray = users.slice(0, 4);
    }
    else if (activePage === 2) {
        slicedArray = users.slice(4, 8);
    }
    else if (activePage === 3) {
        slicedArray = users.slice(8, 11);
    }




    return (
        <div>
            <div className='flex justify-center items-center'>
                {
                    isLoading && <Spinner />
                }
            </div>
            <div className='flex flex-col gap-y-5 lg:px-20 px-4'>
                {
                    slicedArray?.map((agency, i) => <User
                        key={i}
                        agency={agency}
                        viewDetails={viewDetails}
                        setViewDetails={setViewDetails}
                        openId={openId}
                        setOpenId={setOpenId}
                    />)
                }
            </div>
            <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
};

export default Users;