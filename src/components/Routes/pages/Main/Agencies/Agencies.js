import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAgencies } from '../../../../../features/agency/agencySlice';
import Agency from '../Agency/Agency';
import Pagination from '../Pagination/Pagination';

const Agencies = () => {
    const [viewDetails, setViewDetails] = useState(false);
    const [openId, setOpenId] = useState();
    const { agencies, error, isLoading } = useSelector(state => state.agencies);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAgencies());
    }, [dispatch]);


    return (
        <div>
            <div className='flex flex-col gap-y-5 lg:px-20 px-4'>
                {
                    agencies?.map((agency, i) => <Agency
                        key={i}
                        agency={agency}
                        viewDetails={viewDetails}
                        setViewDetails={setViewDetails}
                        openId={openId}
                        setOpenId={setOpenId}
                    />)
                }
            </div>
            <Pagination />
        </div>
    );
};

export default Agencies;