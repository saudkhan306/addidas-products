import React, { useEffect, useState } from 'react'
// import { addidasData } from '../../csvjson';
import './Listing.css'
import Card from './Card';
import axios from 'axios';


const url = "localhost:5000/products/get-products";

function Listing({addidasData, wishlist, cart, updateWishlist, updateCart}) {

    const newData = () => {
        axios.get(url).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    const [currentPageIndex, setCurrentPageIndex] = useState(1);
    const maxProductLimit = 12;
    const [cards, setcards] = useState(addidasData.slice(0, (maxProductLimit*currentPageIndex)));
    const [classActive, setClassActive] = useState(false);
    const [addToCartActive, setAddToCartActive] = useState(false);

    useEffect(() => {
        newData();
        setcards(addidasData.slice(0, (maxProductLimit*currentPageIndex)))
    }, [currentPageIndex])
    
    const incrementCurrentPageIndex = () => {
        const temp = currentPageIndex+1
        setCurrentPageIndex(temp)
    }
    return <div className="cardSection p-5">
        <div className="container">
            <div className="d-flex flex-wrap">
                {
                    cards.map((card, index) => <Card 
                        data={card} 
                        key={index} 
                        wishlist={wishlist}
                        cart={cart}
                        classActive={setClassActive}
                        addToCartActive={setAddToCartActive}
                        updateWishlist={updateWishlist} 
                        updateCart={updateCart} 
                    />)
                }
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-primary box-shadow" onClick={incrementCurrentPageIndex}>View More</button>
            </div>
        </div>
    </div>
        
}

export default Listing
