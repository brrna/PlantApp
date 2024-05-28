import React, { useEffect, useState } from "react";
import "../main/Main.css"
import axios from "axios"
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import solUst from "../../assets/images/solUstYaprak.png"
import solAlt from "../../assets/images/solAltYaprak.png"
import sagUst from "../../assets/images/sağUstYaprak.png"
import sagAlt from "../../assets/images/sağAltYaprak.png"
import SearchBar from "../../component/searchBar/SearchBar";
import Card from "../../component/card/Card";

function Main() {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([])

    useEffect(() => {
        axios.get("/api/web/plants")
        .then(response => {
            setData(response.data);
            setFilteredData(response.data);
            console.log(response.data)
        })
        .catch(error => {
            console.error("error fetching data ", error)
        })
    }, [])

    const handleSearch = (searchText) => {
        setSearchTerm(searchText);
        const lowerCaseSearchText = searchText.toLowerCase();
        const filteredList = data.filter(item => 
            item.Name.toLowerCase().includes(lowerCaseSearchText)
        );
        setFilteredData(filteredList)
    }

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
                        <SearchBar onSearch={handleSearch} searchTerm={searchTerm} />
                    </div>
                    <div className="cardsDiv" >
                        {filteredData.map((item, index) => (
                            <Card 
                                key={index}
                                imageSrc={item.Image}
                                headerText={item.Name}
                                descriptionText={item.Description} />
                        ) )}
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