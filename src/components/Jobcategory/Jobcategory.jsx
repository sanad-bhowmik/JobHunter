import React from 'react';
import './Jobcategory.css'
import { useLoaderData } from 'react-router-dom';
import Jobcate from '../Jobcate/Jobcate';

const Jobcategory = () => {
    const jobcategorys = useLoaderData();
    return (
        <div className=''>
            <div>
                <h1 className='category-info text-5xl font-bold'>Job Category List</h1>
                <p className='category-paragraph text-gray-500 pl-[34%] pt-6 pb-7'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='flex container mx-auto  gap-[25px] px-20'>
                {
                    jobcategorys.map(jobcategory => <Jobcate
                        key={jobcategory.id}
                        jobcategory={jobcategory}
                    ></Jobcate>)
                }
            </div>
        </div>
    );
};


export default Jobcategory;