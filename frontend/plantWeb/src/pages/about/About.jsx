import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import sağaltyaprak from "../../assets/images/sağAltYaprak.png"
import '../about/About.css'

import file from "../../assets/images/file.png"

const About = () => {
  return (
    <div className='endiscontainer'>
      <Header/>
        <div className='middle-divs'>
          <div className='leftdiv'>
            <img src={file} className='imagefile'/>
          </div>
          
          <div className='rightdiv'>
            <div className='rightdivin'>
            
              <text className='Abouttext'>About</text>
              <text className='secondtext'>Learn all the plants through the mobile application</text>
              <text className='thirdtext'>Get information about plants by turning on your camera via the mobile application.</text>
              <text className='thirdtext'>The application is designed for people who want to learn about plants. When you encounter a plant in nature, to find out whether it is poisonous or not. It can be used to find out what temperature and weather conditions the plant should grow in. Thus, it provides convenience to plant growers.</text>
              <text className='thirdtext'>You can learn what kind of benefits the plant has if it is used in the health sector. Be aware of hundreds of plants used as treatment.</text>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default About
