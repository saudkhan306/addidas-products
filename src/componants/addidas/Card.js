import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Card({data, wishlist, cart, updateCart, updateWishlist}) {
    const [imageIndex, setImageIndex] = useState(0)
    const handleSetImageIndex = (index) => setImageIndex(index) 
    const classActive = wishlist.find(wishData => wishData.productId === data.productId)
    const addToCartActive = cart.find(cartData => cartData.productId === data.productId)

    return <div className={addToCartActive ? "cardContainer active" : "cardContainer"}>
        <span id={data.productId} className={classActive ? "wishlistButton active" : "wishlistButton"} onClick={(e) => updateWishlist(e.target.id)}>
            <i id={data.productId} className={ classActive ? "fas fa-heart" : "far fa-heart"}></i>
        </span>
        <div className="imageBlock">
            <div className="priceCont">
                <span className="listingPrice">
                    Actual Price: <span>&#8377;{data.listingPrice}</span>
                </span>
                <span className="priceLabel">&#8377;{data.salePrice}</span>
            </div>
            <span className={addToCartActive ? "discountLabel active" : "discountLabel"}>{data.discount + "%"}</span>
            <Link to={`products/${data.productId}`}><img src={data.images[imageIndex]} alt="" /></Link>
        </div>
        <div className="p_textBlock">
            <div className="sizesBlock" style={{display: "block"}}>
                <ul className="subImages"> 
                    {data.images.map((image, index) => 
                    <li className={imageIndex===index?'active':""} key={index}>
                        <img src={image} onMouseOver={()=> handleSetImageIndex(index)} alt="" />
                    </li> )}
                </ul>
            </div>
            <div className="d-flex flex-column justify-content-between" style={{minHeight: "127px"}}>
                <div className="topBlock">
                    <Link to={`products/${data.productId}`}>
                        <div className="p_name mb-2 text-black">{data.productName}</div>
                    </Link>
                    <div className="p_category">Brand: {data.brand}</div>
                    <div className="d-flex align-items-center mt-1" style={{fontSize: "14px"}}>
                        <p className="mr-3 mb-0"><i className="fas fa-star text-warning"></i> <strong>{data.rating}</strong></p>
                        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <p className="mr-3 mb-0"><i className="fas fa-comment-alt text-secondary"></i> <strong>{data.reviews}</strong></p>
                    </div>
                </div>
                <div className="bottomBlock d-flex justify-content-between align-items-center mt-2">
                    <a href={data.URL} target="_blank" className="btn mr-3 btn-dark btn-sm px-3">Order Now</a>
                    <button 
                        id={data.productId} 
                        onClick={(e) => updateCart(e.target.id) } 
                        target="_blank" 
                        className={addToCartActive ? "btn btn-danger btn-sm px-3" : "btn btn-dark btn-sm px-3"} >
                        {/* <i className={addToCartActive ? "fas fa-minus" : "fas fa-plus"}></i>  */}
                        {/* { addToCartActive ? <i className="fas fa-shopping-cart"></i> : "Add to Cart" } */}
                        {addToCartActive ? "Remove from Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default Card;
