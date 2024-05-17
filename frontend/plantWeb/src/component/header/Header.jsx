import React from "react";
import "../header/Header.css"

function Header() {
    return (
        <div className="container" >
            <div className="sign-container" >
                <div className="sign-in" >
                    <text className="signin-text">SIGN IN</text>
                </div>
                <div className="sign-up" >
                    <text className="signup-text">SIGN UP</text>
                </div>
            </div>
            <div className="text-container">
                <text className="text" >LeafLove</text>
            </div>
        </div>
    )
}

export default Header