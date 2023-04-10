import React from 'react';
import './Banner.css';


const Banner = () => {
    return (
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
                <div className='banner-img ml-[400px] mt-56'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;