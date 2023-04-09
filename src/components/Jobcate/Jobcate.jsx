import React from 'react';
import './Jobcate.css'

const Jobcate = ({ jobcategory }) => {
    const { title, Jobs, img } = jobcategory;
    return (
        <div className=''>
            <div className="card w-[311px] h-[233px] bg-fuchsia-100">
                <div className="card-body">
                    <div className='job-cateImg'>
                        <img className='h-[50px] w-[50px] mt-3 ml-2' src={img} alt="" />
                    </div>
                    <h2 className="card-title">{Jobs}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default Jobcate;