import React from 'react';
import './Home.css';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';

const Home = () => {
    return (
        <div className='contain'>
            <Header />
            <div className="middle-div">
                <div className="orta"> 
                  eöre iemn
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;