import React from 'react';

const AppliedJobs = () => {
    const jobDetails = JSON.parse(localStorage.getItem('jobDetails'));

    return (
        <div>
            <h2>{jobDetails.location}</h2>
            <p>{jobDetails.place}</p>
            <p>{jobDetails.salary}</p>
        </div>
    );
};

export default AppliedJobs;