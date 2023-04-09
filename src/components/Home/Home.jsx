import React from 'react';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            dfg
        </div>
    );
};

export default Home;