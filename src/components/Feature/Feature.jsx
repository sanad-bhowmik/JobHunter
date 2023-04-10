import React from 'react';

const Feature = ({feature}) => {
    const {Jobpost,place} = feature;
    return (
        <div>
            <h1>Hi {Jobpost}</h1>
        </div>
    );
};

export default Feature;