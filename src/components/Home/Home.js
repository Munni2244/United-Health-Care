import React from 'react';
import Banner from './Banner/Banner';
import Doctor from './Doctors/Doctor';
import Navbar from './Navbar/Navbar';
import Survices from './Survices/Survices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Survices></Survices>
            <Doctor></Doctor>
        </div>
    );
};

export default Home;