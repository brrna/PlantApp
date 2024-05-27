import React from "react";
import "../footer/Footer.css"
import facebook from "../../assets/images/facebook.png"
import linkedln from "../../assets/images/linkedln.png"
import youtube from "../../assets/images/youtube.png"
import instagram from "../../assets/images/instagram.png"

function Footer() {
    const handleClickFacebook = () => {
        console.log('Facebook Image clicked!');
        window.open('https://www.facebook.com', '_blank'); // Yeni sekmede açılır
    };

    const handleClickLinkedIn = () => {
        console.log('LinkedIn Image clicked!');
        window.open('https://www.linkedin.com', '_blank'); // Yeni sekmede açılır
    };

    const handleClickYouTube = () => {
        console.log('YouTube Image clicked!');
        window.open('https://www.youtube.com', '_blank'); // Yeni sekmede açılır
    };

    const handleClickInstagram = () => {
        console.log('Instagram Image clicked!');
        window.open('https://www.instagram.com', '_blank'); // Yeni sekmede açılır
    };

    return(
        <div className="footer" >
            <div className="left-container" >
                <text className="left-text" >@ 2024 LeafLove, Inc. All Rights Reserved</text>
            </div>
            <div className="right-container" >
                <div className="button-container" >
                    <img src={facebook} onClick={handleClickFacebook} className="image" />
                    <img src={linkedln}  onClick={handleClickLinkedIn} className="image" />
                    <img src={youtube} className="image" onClick={handleClickYouTube} />
                    <img src={instagram} className="image" onClick={handleClickInstagram} />
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