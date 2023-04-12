import React, { useEffect, useState } from 'react';
import ApplySingle from '../ApplySingle/ApplySingle';
import { getStoredData } from '../../utilities/addToJob'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("jobs");
        const parsedItems = JSON.parse(storedItems);
        setItems(parsedItems || []);
    }, []);
    // console.log(items.length);

    return (
        <div>
            <div className='flex ml-[80%] mt-[5%] gap-6'>
                <button className="btn btn-outline btn-secondary">Onsite</button>
                <button className="btn btn-outline btn-accent">Remote</button>
            </div>
            {items.map((item) => (

                <div className='infoOfjob'>
                    <div className="card border-solid border-2 border-stone-300 card-side bg-base-100 shadow-xl h-[300px] container mx-auto mb-6 mt-10">
                        <figure className='company-img'><img className='h-[150px]  w-[280px] ml-11' src={item.CompanyLogo} alt="Movie" /></figure>
                        <div className="card-body pl-10 ">
                            {item.Jobpost && <h1 className='jobpost text-3xl font-bold text-stone-950'>{item.Jobpost}</h1>}
                            {item.place && <h1 className='text-2xl text-stone-500'>{item.place}</h1>}
                            <div className='flex gap-6'>
                                {item.RemoteJob && <h1 className='p-2 text-xl border-solid border-2 border-pink-300 bg-purple-200 rounded-m text-stone-500'>{item.RemoteJob}</h1>}
                                {item.FulltimeJob && <h1 className='p-2 text-xl border-solid border-2 border-pink-300 bg-purple-200 rounded-m text-stone-500'>{item.FulltimeJob}</h1>}
                            </div>
                            <div className='flex gap-4 mt-4'>
                                {item.location && <h1 className='text-stone-400'><FontAwesomeIcon icon={faLocationDot} />{item.location}</h1>}
                                {item.salary && <h1 className='text-stone-400'><FontAwesomeIcon icon={faDollar} /><span className='font-bold'>Salary : </span>{item.salary}</h1>}
                            </div>
                        </div>
                        <div className="card-actions mr-20 mt-[7%]">
                            <Link to={`/Jobdetails/${item.id}`}>
                                <button className="btn btn-primary nav-btn text-xl">View Details</button>
                            </Link>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppliedJobs;
