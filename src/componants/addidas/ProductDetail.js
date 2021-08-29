import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { addidasData } from '../../csvjson'
import './/ProductDetail.css'

function ProductDetail() {
    const {id} = useParams();
    console.log(id)
    const cardDetailsData = addidasData.find(prod => prod.productId === id);
    console.log('cardDetailsData',cardDetailsData)
    const [cardData, setCardData] = useState(cardDetailsData);
    const [ratings, setRatings] = useState([cardData?.rating[0]]);
    
    const [imageIndex, setImageIndex] = useState(0);
    const imageIndexHandler = (index) => setImageIndex(index);

    const [classActive, setClassActive] = useState(false);
    const toggleActive = (e) => setClassActive(!classActive);
    return <div className="cardDetailSection p-5">
        <div className="container">
            <div className="cardDetailContainer">
                <div className="row">
                    <div className="col-7">
                        <div className="cardImages d-flex">
                            <ul className="shortThumbnail">
                                { cardData.images.map((image, index) => 
                                    <li key={index} className={ imageIndex == index ? "active" : ""}><img src={image} alt="" onClick={()=> imageIndexHandler(index)} /></li>
                                )}
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
                                <p className="mb-0">Product ID: <strong>{cardData.productId}</strong></p>
                                <span className={classActive ? "wishlistButton2 active" : "wishlistButton2"} onClick={()=>toggleActive()}>
                                    <i className={classActive ? "fas fa-heart" : "far fa-heart"}></i>
                                </span>
                            </div>
                            <h2>{cardData.productName}</h2>
                            <p className="mb-1">Actual Price: <span className="line-through">{cardData.listingPrice}</span></p>
                            <h5>Offer Price: {cardData.salePrice}</h5>
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
                            <p className="mb-4">{cardData.description}</p>
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
