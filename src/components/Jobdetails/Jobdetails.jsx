import React, { useState, useEffect } from 'react';
import './Jobdetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import img1 from '../../assets/All Images/Vector.png';
import img2 from '../../assets/All Images/Vector-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar, faCalendar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

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
    const handleApplyBtn = id => {
        const jobCategory = jobCategorys.find(category => category.id === id);
        console.log(jobCategory);
      };
      
    return (
        <section className='z-10'>
            <div className='h-[400px] jobDetails bg-gray-100'>
                <h1 className='pl-[45%] pt-[8%]'>Job Details</h1>
                <img src={img1} alt="" />
                <img className=' mx-[82%] my-[-30%]' src={img2} alt="" />
            </div>
            <div className='flex container mx-auto mt-14 gap-[20%] ml-[13%]'>
                <div className='w-[600px]'>
                    <p className='md-6 mb-10'><span className='font-bold'>Job Description:</span><span className='text-slate-600'>{jobDetails.jobDescription}</span></p>
                    <p className='md-6 '><span className='font-bold'>Job Responsibilities:</span>
                        {
                            Array.isArray(jobDetails.jobResponsibility) && jobDetails.jobResponsibility.map(jobResponsibility => <span>{" " + jobResponsibility}</span>)
                        }
                        <span className='text-slate-600'>{jobDetails.jobResponsibility}</span>
                    </p>
                    <p className='md-6 mt-10'><span className='font-bold'>Educational Requirements:</span> <br /><span className='text-slate-600 '>{jobDetails.EducationalRequirements}</span></p>
                    <p className='md-6 mt-10'><span className='font-bold'>Experence:</span> <br /><span className='text-slate-600 '>{jobDetails.experence}</span></p>
                </div>
                <div className='jobInfo pl-4 pt-6' >
                    <h1 className='mb-4'>Job Details</h1>
                    <hr />
                    <p className='md-5 font-bold'><FontAwesomeIcon className='text-slate-400 border-solid border-2 border-purple-100 rounded-xl px-1' icon={faDollar} /><span>Salary:</span><span className='text-gray-500 pl-2'>{jobDetails.salary} </span></p>
                    <p className='md-5 mb-6 font-bold'><FontAwesomeIcon className='text-slate-400 px-1' icon={faCalendar} /><span>Job Title:</span><span className='text-gray-500 pl-2'>{jobDetails.Jobpost} </span></p>
                    <hr />
                    <p className='md-5 mb-6 font-bold'><FontAwesomeIcon className='text-slate-400 border-solid border-2 border-purple-300 rounded-xl px-1' icon={faPhone} /><span>Phone:</span><span className='text-gray-500 pl-2'>{jobDetails.ContactInfo[0]} </span></p>
                    <p className='md-5 mb-6  font-bold'><FontAwesomeIcon className='text-slate-400 px-1' icon={faEnvelope} /><span>Email:</span><span className='text-gray-500 pl-2'>{jobDetails.ContactInfo[1]} </span></p>
                    <p className='md-5 mb-6 font-bold'><FontAwesomeIcon className='text-slate-400 px-1' icon={faLocationDot} /><span>Address:</span><span className='text-gray-500 pl-2'>{jobDetails.address} </span></p>
                    <button className='nav-btn btn-sm btn-color border-0 rounded ml-[20%] mt-8 px-4 text-xl'>Apply Now</button>
                </div>
            </div>
        </section>
    );
};

export default Jobdetails;