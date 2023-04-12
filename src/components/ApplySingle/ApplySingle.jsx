// import React from 'react';

// const ApplySingle = ({job}) => {
//     console.log(job);
//     const {place,salary,FulltimeJob} = job
//     return (
//         <div>
//             <h1>{place}</h1>
//         </div>
//     );
// };

// export default ApplySingle;
import React from 'react';

const ApplySingle = ({job}) => {
    if (!job) {
        return <h1>error</h1>; // or render a message or component indicating no job was passed
    }
    console.log(job);
    const {place, salary, FulltimeJob} = job;
    return (
        <div>
            <h1>{place}</h1>
        </div>
    );
};

export default ApplySingle;
