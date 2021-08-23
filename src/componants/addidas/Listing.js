import React, { useState } from 'react'
import './../addidas/Listing.css'
import Card from './Card';

function Listing() {
    const [cards, setcards] = useState([20]);


    return (
        <div class="cardSection p-5">
            <div className="container">
                <div className="d-flex flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Listing
