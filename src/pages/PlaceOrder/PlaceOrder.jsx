import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
 
  const {getTotalCartAmount}=useContext(StoreContext); 

  return (
   <form  className="place-order">
    <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type='email' placeholder='Email address'/>
        <input type='text' placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
    </div>
    <div className="place-order-right">
    <div className="cart-total">
                 <h2>Cart Totals</h2>
                 <div>
                   <div className="cart-total-details">
                    <p>SubTotal</p>
                    <p>{getTotalCartAmount()}</p>
                   </div>
                   <hr/>
                   <div className="cart-total-details">
                    <p>Delivery fee</p>
                    <p>{2}</p>
                   </div>
                   <hr/>
                   <div className="cart-total-details">
                    <p>Grand Total</p>
                    <p>{getTotalCartAmount()+2}</p>
                   </div>
                 </div>
                 <button >Proceed to Payment</button>
             </div>     
    </div>
   </form>
  )
}

export default PlaceOrder