import  './Card.css'
import React, {useState} from 'react';




function Card(props){

    const viewMenu = () => {
        window.open(props.menuUrl, "_blank");
    }    

    return (
        <div className="post-container">
            <img src={props.imgUrl} alt="restaurant"/>
            <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4>
            <button onClick={viewMenu}>View Info</button>
        </div>
    )

}

export default Card;