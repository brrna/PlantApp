import React from "react";
import "./Card.css"

function Card({headerText, descriptionText, imageSrc}) {
    return (
        <div className="darkFrame" >
            <div className="lightFrame" >
                <div className="content" >
                    <div className="contentImg" >
                        <img 
                            src={imageSrc} 
                            className="plantImg" />
                    </div>
                    <div className="contentText" >
                        <div className="contentHeader" >
                            <text className="contentHeaderText" >
                                {headerText}
                            </text>
                        </div>
                        <div className="contentDescription" >
                            <text className="contentNameText" >
                                {descriptionText}
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card