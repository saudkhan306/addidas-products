import React from 'react'
import './Cart.css'

function Cart({data,update,isCart}) {
    const totalListedItems = data.length;
    
    return <section className="smallCartSection py-5">
        <div className="container">            
            <p>{isCart ?  `Your Cart Items (${totalListedItems})` : `Your Wishlist items (${totalListedItems})`}</p>
            <div className="row">
                <div className="col-9">
                    { 
                        data.map( cartData => {
                            const ratingArray = [];
                            for(let i=0;i<5;i++){
                                if(i < cartData.rating) ratingArray.unshift(1) 
                                else ratingArray.push(0)
                            }
                            return <div className="smallCart d-flex justify-content-between" key={cartData.productId}>
                                <div className="leftBlock d-flex">
                                    <div className="imgBlock">
                                        <img src={cartData.images[0]} alt="" />
                                    </div>
                                    <div className="cardHeading">
                                        <h5>{cartData.productName}</h5>
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="line-through text-danger me-3 ">
                                                &#8377;{cartData.listingPrice}
                                            </span>
                                            <h3 className="mb-0">
                                                &#8377;{cartData.salePrice}
                                            </h3>
                                        </div>
                                        <div className="ratingsCont d-flex w-100">
                                            <div className="d-flex">
                                                <span className="">Ratting:</span> &nbsp;
                                                <ul className="ratings d-flex align-items-center">
                                                    { 
                                                    ratingArray.map(star=>{
                                                        const starClass = star === 1 ? 'fas' : 'far';
                                                        console.log(`starClass`, starClass)
                                                    return <i className={`${starClass} fa-star text-warning`}></i>
                                                    })                                                             
                                                    }
                                                </ul>
                                            </div>
                                            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                                            <div className="reviews d-flex">
                                                <span>Reviews: </span> &nbsp;
                                                <strong>{cartData.reviews}</strong>
                                            </div>
                                        </div>
                                    </div>                            
                                </div>
                                <div className="rightBlock d-flex align-items-end">
                                    <span className="wishlistButton">
                                        <i className="fas fa-heart"></i>
                                    </span>
                                    {/* <div className="cardCheckout">
                                        <button className="btn btn-dark">Add To Cart</button>
                                    </div> */}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="col-3">
                    <div className="addCartBlock mb-3 d-flex justify-content-center align-items-center flex-column">
                        <div className="totalPriceBlock text-center mb-2">
                            <span>Totol Price:</span>
                            <h4>Total Price</h4>
                        </div>
                        <button className="btn btn-dark allToCart">Add All To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
}

export default Cart
