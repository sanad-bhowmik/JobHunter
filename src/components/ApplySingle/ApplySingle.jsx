import React, { useEffect, useState } from 'react';

const ApplySingle = () => {
    const {item,setItems} = useState([]);
    useEffect(()=>{
        const item = JSON.path(localStorage.getItem("jobs"));
        console.log(item);
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ApplySingle;