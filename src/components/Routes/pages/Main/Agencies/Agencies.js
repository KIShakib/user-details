import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgencies } from '../../../../../features/agency/agencySlice';
import Spinner from '../../Shared/Spinner';
import Agency from '../Agency/Agency';
import Pagination from '../Pagination/Pagination';

const Agencies = () => {
    const [viewDetails, setViewDetails] = useState(false);
    const [openId, setOpenId] = useState();
    const [activePage, setActivePage] = useState(1);
    const { agencies, error, isLoading } = useSelector(state => state.agencies);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAgencies());
    }, [dispatch]);

    // Pagination
    let slicedArray = agencies.slice(0, 4);

    if (activePage === 1) {
        slicedArray = agencies.slice(0, 4);
    }
    else if (activePage === 2) {
        slicedArray = agencies.slice(4, 8);
    }
    else if (activePage === 3) {
        slicedArray = agencies.slice(8, 11);
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
                    slicedArray?.map((agency, i) => <Agency
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

export default Agencies;