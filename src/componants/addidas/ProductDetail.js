import React, { useState } from 'react'
import { addidasData } from '../../csvjson'
import './/ProductDetail.css'


function ProductDetail() {
    const [cardData, setCardData] = useState(addidasData[0]);
    const [imageIndex, setImageIndex] = useState(0);
    return <div className="cardDetailSection p-5">
        <div className="container">
            <div className="cardDetailContainer">
                <div className="row">
                    <div className="col-7">
                        <div className="cardImages d-flex">
                            <ul className="shortThumbnail">
                                {
                                    cardData.images.map((image, index) => {
                                        return <li key={index}><img src={image} alt="" /></li>
                                    })
                                }
                            </ul>
                            <div className="bigThumbnail">
                                <span className="discountLabel2">{cardData.discount + "%"}</span>
                                <img src={cardData.images[imageIndex]} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="productDetail">
                            <div className="_header d-flex justify-content-between align-items-center mb-2">
                                <p className="mb-0">Product ID:</p>
                                <span className="wishlistButton2">
                                    <i className="far fa-heart"></i>
                                </span>
                            </div>
                            <h2>Heading</h2>
                            <p className="mb-1">Price:</p>
                            <h5>Offer Price:</h5>
                            <div className="ratings d-flex my-3">
                                <div className="btn btn-outline-dark btn-sm pe-2 me-2">
                                    <span className="me-2">Rating:</span> 
                                    <i className="fas fa-star ml-2"></i>
                                    <i className="fas fa-star ml-2"></i>
                                    <i className="fas fa-star ml-2"></i>
                                </div>
                                <div className="btn btn-outline-dark btn-sm pe-2">
                                    <span className="me-2">Reviews:</span> 
                                    <strong>50</strong>
                                </div>
                            </div>
                            <p className="mb-4">
                                Channeling the streamlined look of an '80s racer, these shoes are updated with modern features. The foot-hugging adidas Primeknit upper offers a soft, breathable feel. The Boost midsole provides responsive comfort accented with a contrast-color EVA heel plug. Embroidered details add a distinctive finish.
                            </p>
                            <div className="btn btn-dark text-white text-uppercase px-4 btn-lg"> 
                                <strong>Add To Cart</strong> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProductDetail
