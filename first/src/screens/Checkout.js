import React from 'react'
import './checkout.css'
const Checkout = () => {
   
  return (
    <div>
    <div class="container checkk">
  <h1 className='ship'>Shipping</h1>
  <p className='please'>Please enter your shipping details.</p>
  <hr />
  <div class="form chick">
    
  <div class="fields fields--2">
    <label class="field">
      <span class="field__label" for="firstname">First name</span>
      <input class="field__input" type="text" id="firstname"  />
    </label>
    <label class="field">
      <span class="field__label" for="lastname">Last name</span>
      <input class="field__input" type="text" id="lastname"  />
    </label>
  </div>
  <label class="field">
    <span class="field__label" for="address">Address</span>
    <input class="field__input" type="text" id="address" />
  </label>
  <label class="field">
    <span class="field__label" for="country">Country</span>
    <select class="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">United States</option>
      <option value="unitedstates">India</option>
      <option value="unitedstates">France</option>
      <option value="unitedstates">Russia</option>
      <option value="unitedstates">United Kingdom</option>
      <option value="unitedstates">Argentina</option>
      <option value="unitedstates">Brazil</option>
      <option value="unitedstates">Portugal</option>
    </select>
  </label>
  <div class="fields fields--3">
    <label class="field">
      <span class="field__label" for="zipcode">Zip code</span>
      <input class="field__input" type="text" id="zipcode" />
    </label>
    <label class="field">
      <span class="field__label" for="city">City</span>
      <input class="field__input" type="text" id="city" />
    </label>
    <label class="field">
      <span class="field__label" for="state">State</span>
      <select class="field__input" id="state">
        <option value="">Himachal Pradesh</option>
        <option value="">Madhya Pradesh</option>
        <option value="">Punjab</option>
        <option value="">Haryana</option>
        <option value="">Delhi</option>
        <option value="">Bihar</option>
        <option value="">Gujrat</option>
      </select>
    </label>
  </div>
  </div><br/>
    <div style={{color:'red'}}><u><h3>Only Cash on Delivery is Available</h3></u></div>
  <hr/>
  <a href='/'><button class="butt" onClick={()=>{
    alert("Your  Order has been Placed Successfully!");
  }}>Continue</button></a>
</div>    </div>
  )
}
// onClick={() => {
//     dispatch({
//       type: "REMOVE_FROM_CART",
//       payload: prod,
//     });

export default Checkout

