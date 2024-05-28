import React from "react";
import "./SearchBar.css"

function SearchBar({onSearch, searchTerm}) {

    const handleChange = (event) => {
        onSearch(event.targetvalue);
    };

    return (
        <div className="frame" >
            <div className="inputFrame">
                <input
                    type="text" 
                    className="input" 
                    placeholder="Search about plants" 
                    value={searchTerm}
                    onChange={onSearch} />
            </div>
            <button className="buttonFrame" >
                <span className="buttonName" >Submit</span>
            </button>
        </div>
    )
}

export default SearchBar