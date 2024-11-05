import React from 'react';
import Navbar from '../Components/Shaired/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shaired/Footer';

const Master = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Master;