import React from 'react';
import './Home.css';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import iconege from "../assets/images/iconege.png"

import phone from "../assets/images/phone.png"
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
                        <h4 className='h4size'>You can isdentify over 10,000 plants and be given size care </h4>
                        <h4 className='h4sizes'> guides and reminders so your plants can thrive</h4>
                        <div className='bigcontainer'>

                            <div className='columcont'>
                                <h3 className='howtext'>How does LeafLove work?</h3>
                                <div className='rowdiv'>

                                    <div className='step1div'>
                                        <div className='rowyapan'>
                                            <img src={iconege} className='foto' />
                                            <text className='fantastiktext'>Step 1</text>
                                        </div>
                                        <div className='textiyidiv'>
                                            <text className='textiyi'>Download the LeafLove (now live in</text>
                                            <text className='textiyi'>Android) and sign in to your garden</text>
                                        </div>

                                    </div>
                                    <div className='step1div'>
                                        <div className='rowyapan'>
                                            <img src={iconege} className='foto' />
                                            <text className='fantastiktext'>Step 2</text>
                                        </div>
                                        <div className='textiyidiv'>
                                            <text className='textiyi'>Scan your plant and LeafLovewill identify it! Or find your plant in our database (if wehaven’t it - add your custom).</text>

                                        </div>

                                    </div>


                                </div>

                                <div className='rowdiv'>

                                    <div className='step1div'>
                                        <div className='rowyapan'>
                                            <img src={iconege} className='foto' />
                                            <text className='fantastiktext'>Step 3</text>
                                        </div>
                                        <div className='textiyidiv'>
                                            <text className='textiyi'>Access the information of the plant you scanned and get personalized plant care recommendations!</text>

                                        </div>

                                    </div>
                                    <div className='step1div'>
                                        <div className='rowyapan'>
                                            <img src={iconege} className='foto' />
                                            <text className='fantastiktext'>Step 4</text>
                                        </div>
                                        <div className='textiyidiv'>
                                            <text className='textiyi'>Keep your plants on your list by favoriteing them, always have quick access to information</text>

                                        </div>

                                    </div>
                                    <div className='buttonum'>
                                        <button className='custom-button'>About More </button>
                                    </div>


                                </div>



                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <img src={phone} className='phoneimg'/>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Home;