import React from 'react'
import "../Signin/Signin.css"
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import plantyap from "../../assets/images/plantyap.png"
import emre from "../../assets/images/emre.png"


const Signin = () => {
  return (
    <div className='signincontainer'>
      <Header/>
        <div className='sigininortadiv'>
            <div className='imageplantyap'>
                <img src={plantyap}/>
            </div>
            <div className='rightout'>
                <div className='welcomedivout'>
                    <img src={emre} className='imagewelcome'/>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Signin
