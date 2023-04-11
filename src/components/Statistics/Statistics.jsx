import React from 'react';
import './Statistics.css'
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area
} from "recharts";

const Statistics = () => {


    const data = [
        {
            name: "A-01",
            Marks: 55,
        },
        {
            name: "A-02",
            Marks: 57,
        },
        {
            name: "A-03",
            Marks: 55,
        },
        {
            name: "A-04",
            Marks: 60,
        },
        {
            name: "A-05",
            Marks: 55,
        },
        {
            name: "A-06",
            Marks: 60,
        },
        {
            name: "A-07",
            Marks: 60,
        }
    ];

    return (
        <div className='container mx-auto mt-[40px] '>
            <h1 className='assignment text-6xl underline text-center pb-20'>Assignment marks</h1>
            <section className='flex gap-[20%]'>
                <div className='chart'>
                    <ComposedChart
                        layout="vertical"
                        width={800}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 50
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Marks" barSize={20} fill="#081eac" />
                    </ComposedChart>
                </div>
                <div>
                    <ol className=''>
                        <li className='color1'>Assignment-55</li>
                        <li className='color2'>Assignment-57</li>
                        <li className='color3'>Assignment-55</li>
                        <li className='color4'>Assignment-60</li>
                        <li className='color5'>Assignment-55</li>
                        <li className='color6'>Assignment-60</li>
                        <li className='color7'>Assignment-60</li>
                    </ol>

                </div>
            </section>
        </div>
    );
};

export default Statistics;