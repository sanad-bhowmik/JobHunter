import React from 'react';
import Banner from '../Banner/Banner';
import Jobcategory from '../Jobcategory/Jobcategory';
import { useLoaderData } from 'react-router-dom';
import Jobcate from '../Jobcate/Jobcate';

const FontPage = () => {
    const jobcategorys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Jobcategory></Jobcategory>
            
        </div>
    );
};

export default FontPage;