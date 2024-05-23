import React from "react";
import "../main/Main.css"
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import solUst from "../../assets/images/solUstYaprak.png"
import solAlt from "../../assets/images/solAltYaprak.png"
import sagUst from "../../assets/images/sağUstYaprak.png"
import sagAlt from "../../assets/images/sağAltYaprak.png"
import SearchBar from "../../component/searchBar/SearchBar";
import Card from "../../component/card/Card";

function Main() {

    

    return (
        <div className="containers" >
            <Header />
            <div className="view" >
                <div className="Leftdiv" >
                    <div className="topLeftDiv" >
                        <img src={solUst} />
                    </div>
                    <div className="bottomLeftDiv" >
                        <img src={solAlt} />
                    </div>
                </div>
                <div className="middleDiv" >
                    <div className="searchBarDiv" >
                        <SearchBar />
                    </div>
                    <div className="cardsDiv" >
                        <Card />
                    </div>
                </div>
                <div className="Rightdiv" >
                    <div className="topRightDiv" >
                        <img src={sagUst} />
                    </div>
                    <div className="bottomRightDiv" >
                        <img src={sagAlt} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main