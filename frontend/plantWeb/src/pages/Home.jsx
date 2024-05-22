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
                  <div className='yazi'>
                    The best free mobile app for kids
                  </div>
                  <div className='yazi'>
                    and adults interested in plants,
                  </div>
                  <div className='yazi'>
                    gardening and plant growing
                  </div>
                  <div>
                    <h4 className='h4size'>You can identify over 10,000 plants and be given size care </h4>
                    <h4 className='h4sizes'> guides and reminders so your plants can thrive</h4>
                    <div className='bigcontainer'>
                        <h3 className='howtext'>How does LeafLove work?</h3>
                        <div className='columcont'>

                        </div>

                    </div>
                  </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;