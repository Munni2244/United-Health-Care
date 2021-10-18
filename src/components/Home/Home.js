import React from 'react';
import Banner from './Banner/Banner';
import Navbar from './Navbar/Navbar';
import Survices from './Survices/Survices';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Survices></Survices>
        </div>
    );
};

export default Home;