import React from 'react';
import CatsGrid from '../components/CatsGrid';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = ({ cats }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <div className='grow'>
                <CatsGrid cats={cats} />
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
