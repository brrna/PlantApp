import React from "react";
import "../header/Header.css"
import googleplay from "../../assets/images/google-play.png"
function Header() {

    const handleClick = () => {
        console.log('Image clicked!');
        window.open('https://play.google.com/store/apps/details?id=com.denizlimoyunu&hl=tr&gl=US', '_blank'); // Yeni sekmede açılır
    };

    return (    
        <div className="container" >
            <div className="sign-container" >
                <div className="sign-in" >
                    <text className="signin-text">Dowland Now For Full Version</text>
                </div>
                <div className="sign-up" >
                    <img 
                        className="googleplay" 
                        src={googleplay}
                        onClick={handleClick} 
                       
                        />
                </div>
            </div>
            <div className="text-container">
                <text className="text" >LeafLove</text>
            </div>
        </div>
    )
}

export default Header