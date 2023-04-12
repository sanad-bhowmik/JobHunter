import React, { useEffect, useState } from 'react';
import './Home.css'
import img from '../../assets/All Images/P3OLGJ1 copy 1.png'
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    const [jobCategorys, setJobCategorys] = useState();
    useEffect(() => {
        fetch('/JobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategorys(data))
            .catch(error => console.log(error))
    }, []);

    // Feature jobs
    const featureData = useLoaderData();
    const [showAllJobs, setShowAllJobs] = useState(false);

    // Apply now  btn 

    return (
        <div className=''>
            <div className='container mx-auto mt-12'>
                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-6xl font-bold sm:text-5xl">
                            One Step Closer To Your
                            <strong className="block font-bold text-violet-500">
                                Dream Job
                            </strong>
                        </h1>
                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed text-gray-500">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="nav-btn block w-full rounded px-10 py-6 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div className='banner-img ml-auto mt-12 lg:mt-0'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>

            {/* banner end */}
            <section className='mt-20 container mx-auto'>
                <h1 className='text-center text-3xl font-bold'>Job Category List</h1>
                <p className='text-center mt-5'>Explore thousands of job opportunities with all the information you need.It's your future.</p>
                <div className='grid md:grid-cols-4 gap-10 mt-4 md:text-start text-center md:px-0 p-10'>
                    {jobCategorys ? (
                        jobCategorys.map(category => (
                            <div className="card w-[311px] h-[233px] bg-fuchsia-100 jobcategory">
                                <div className="card-body" key={category.id}>
                                    <div className='job-cateImg'>
                                        <img className='h-[50px] w-[50px] mt-3 ml-2' src={category.img} alt="" />
                                    </div>
                                    <h2 className="card-title">{category.title}</h2>
                                    <p>{category.jobs}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading job.......</p>
                    )}
                </div>
            </section>
            {/* caegory end */}
            <section className=''>
                <h1 className='text-center text-3xl font-bold'>Featured Jobs</h1>
                <p className='text-center mt-5'>Explore thousands of  jobs opportunities with all the information you need. It's your Future</p>
                <div className='md:grid md:grid-cols-2 mt-5 ml-36'>
                    {featureData ? (
                        featureData.slice(0, showAllJobs ? featureData.length : 4).map(featureData => (
                            <div className='max-w-lg bg-white rounded-sm overflow-hidden border border-gradient-to-r from-indigo-400 to-purple-600 mt-5 p-5 md:ml-10 md:mx-0 mx-auto'>
                                <div className='px-6 py-4'>
                                    <div><img className='h-[60px] w-[117px]' src={featureData.CompanyLogo} alt="" /></div>
                                    <div className='text-2xl font-bold text-black mt-4'>{featureData.Jobpost}</div>
                                    <div className='mt-2 text-gray-500 dark:text-gray-400 text-sm'>
                                        <div className='text-xl text-gray-500'>{featureData.place}</div>
                                        <div className='flex mt-4 gap-3'>
                                            <p className='border-solid border-2 border-violet-400 w-[60px] h-[40px] text-center pt-2 rounded-lg text-purple-400'>{featureData.RemoteJob}</p>
                                            <p className='border-solid border-2 border-violet-400 w-[60px] h-[40px] text-center pt-2 rounded-lg text-purple-400'>{featureData.FulltimeJob}</p>
                                        </div>
                                        <div className='flex mt-3'>
                                            <div className="text-gray-500 mr-4"><FontAwesomeIcon icon={faLocationDot} />{featureData.location}</div>
                                            <div className="text-gray-500"><FontAwesomeIcon icon={faDollar} />{featureData.salary}</div>
                                        </div>
                                        <div className='mt-2'>
                                            <Link to={`/Jobdetails/${featureData.id}`}>
                                                <button className='nav-btn btn-sm btn-color border-0 rounded mt-6'>View Details</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading</p>
                    )}
                </div>
                <button className='nav-btn ml-[45%]' onClick={() => setShowAllJobs(!showAllJobs)}>See All Jobs</button>
            </section>
        </div>
    );
};

export default Home;