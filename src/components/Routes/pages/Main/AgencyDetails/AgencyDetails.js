import React from 'react';

const AgencyDetails = ({ agency }) => {
    const { id, name, contact, city, state } = agency;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default AgencyDetails;