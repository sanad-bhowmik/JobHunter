import React, { useState, useEffect } from 'react';
import './Jobdetails.css'
import { useLoaderData, useParams } from 'react-router-dom';

const Jobdetails = () => {
    const { jobId } = useParams();
    const jobDatas = useLoaderData();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        if (jobDatas) {
            const foundJob = jobDatas.find(job => job.id === parseInt(jobId));
            setJobDetails(foundJob);
        }
    }, [jobId, jobDatas]);
    if (!jobDetails) {
        return <div>Loading.....</div>
    }
    return (
        <section className=''>
            <div className='h-[400px] jobDetails'>
                <h1>Job Details</h1>
            </div>
            <div>
            <p className='md-6'><span className='font-bold'>Job Description</span>{jobDetails.jobDescription}</p>
                <p className='md-6'><span className='font-bold'>Job Responsibilities</span>
                    {
                        Array.isArray(jobDetails.jobResponsibility) && jobDetails.jobResponsibility.map(jobResponsibility => <span>{" " + jobResponsibility}</span>)
                    }

                </p>
                <p className='md-5 font-bold'>Educatioal Requirement:{} </p>
                <p className='md-5'>{jobDetails.EducationalRequirements}</p>
                <p className='mb-5 font-bold'>Experience:{jobDetails.salary}</p>
            </div>
        </section>
    );
};

export default Jobdetails;