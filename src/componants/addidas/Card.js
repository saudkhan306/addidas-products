import React, { useState } from 'react'
function Card() {
    const [classActive, setClassActive] = useState(false);
    const toggleActive = () => setClassActive(!classActive);
    return <div className="cardContainer">
        <span className={classActive ? "wishlistButton active" : "wishlistButton"} onClick={() => toggleActive()}>
            <i className={ classActive ? "fas fa-heart" : "far fa-heart"}></i>
        </span>
        <div className="imageBlock">
            <span className="priceLabel">$535.300</span>
        </div>
        <div className="p_textBlock">
            <div className="sizesBlock" style={{display: "none"}}>
            </div>
            <div className="p_name">NMD_R1 shoe</div>
            <div className="p_category">Originals</div>
            <div className="p_colors">34 Colors, Exclusive</div>
        </div>
    </div>
}

export default Card;
