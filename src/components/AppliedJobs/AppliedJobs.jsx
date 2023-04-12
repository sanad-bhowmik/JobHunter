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
import React, { useEffect, useState } from 'react';
import ApplySingle from '../ApplySingle/ApplySingle';
import { getStoredData } from '../../utilities/addToJob'

const AppliedJobs = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const storedItems = localStorage.getItem("jobs");
        const parsedItems = JSON.parse(storedItems);
        setItems(parsedItems || []);
    }, []);
    console.log(items.length);
    return (
        <div>
            <div className='flex'>
                <button className="btn btn-outline btn-secondary">Button</button>
                <button className="btn btn-outline btn-accent">Button</button>
            </div>
            {items.map((item) => (

                <div>
                    {/* <h1>hello: {item.place}</h1> */}

                    <div className="card card-side bg-base-100 shadow-xl h-[300px] container mx-auto">
                        <figure className='company-img'><img className='h-[100px]  w-[240px] ml-11' src={item.CompanyLogo} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;
