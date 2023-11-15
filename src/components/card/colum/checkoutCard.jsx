import React from "react";
import "../colum/checkOutCard.css"

const CheckoutCard = (props)=> {

  const courseAdded = props.cart.length;
  const totalPrice = props.cart.reduce((total, course)=> total + course.price, 0);
  

    return (

        <div className="mt-5 rounded col-md-3 background ">
        <div className='rounded custom-cart'>  
             <h2 className="card-title text-center mb-3 text-success fw-bolder"> Check Out</h2>
             <h5>Total Course Added: {courseAdded} </h5>
             <h6>Total Fees: {totalPrice} </h6>
             <div className="text-center"> 
             <button className="btn btn-primary btn-sm mt-4 text-center"> Purchase Now</button>
             </div>
       </div>
       </div> 
    )
}

export default CheckoutCard;



