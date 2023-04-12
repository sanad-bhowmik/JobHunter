// import React from 'react';

// const AppliedJobs = () => {
//     const jobDetails = JSON.parse(localStorage.getItem('jobDetails'));

//     return (
//         <div>
//             <h2>{jobDetails.location}</h2>
//             <p>{jobDetails.place}</p>
//             <p>{jobDetails.salary}</p>
//         </div>
//     );
// };

// export default AppliedJobs;
import React from 'react';
import ApplySingle from '../ApplySingle/ApplySingle';
import { getStoredData } from '../../utilities/addToJob'

const AppliedJobs = () => {
    const jobDetails = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        jobDetails.push(value);
    }

    return (
        <div>
            {jobDetails.map((job) => (
                <ApplySingle
                key={job.id}
                job={job}
                ></ApplySingle>
            ))}
        </div>
    );
};

export default AppliedJobs;
