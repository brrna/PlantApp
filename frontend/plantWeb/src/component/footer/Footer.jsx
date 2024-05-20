import React from "react";
import "../footer/Footer.css"
import facebook from "../../assets/images/facebook.png"
import linkedln from "../../assets/images/linkedln.png"
import youtube from "../../assets/images/youtube.png"
import instagram from "../../assets/images/instagram.png"

function Footer() {
    return(
        <div className="footer" >
            <div className="left-container" >
                <text className="left-text" >@ 2024 LeafLove, Inc. All Rights Reserved</text>
            </div>
            <div className="right-container" >
                <div className="button-container" >
                    <img src={facebook} className="image" />
                    <img src={linkedln} className="image" />
                    <img src={youtube} className="image" />
                    <img src={instagram} className="image" />
                </div>
                <div className="textView" >
                    <text className="right-text" >Terms of Service</text>
                    <text className="right-text" >|</text>
                    <text className="right-text" >Privacy Policy</text>
                </div>
            </div>
        </div>
    )
}

export default Footer