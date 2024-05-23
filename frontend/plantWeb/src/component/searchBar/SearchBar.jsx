import React from "react";
import "./SearchBar.css"

function SearchBar() {
    return (
        <div className="frame" >
            <div className="inputFrame">
                <input className="input" placeholder="Search about plants" />
            </div>
            <button className="buttonFrame" >
                <text className="buttonName" >Submit</text>
            </button>
        </div>
    )
}

export default SearchBar