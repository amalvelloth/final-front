import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Buycnl.css';

const Buycnl = () => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handlePlaceOrder = () => {
    // Handle form submission logic here
    console.log(customerInfo);
    // You can process the order or perform further actions
    alert('Please Try Again Later After Some Time!');
  };

  return (
    <div>
      <h2>Cash on Delivery Payment</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={customerInfo.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={customerInfo.address}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={customerInfo.phone}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />
        <div className='ss'>
          <Link to="http://localhost:3000/viewpro"><Button type="button" onClick={handlePlaceOrder}>Place Order</Button></Link>
        </div>
      </form>
    </div>
  );
};

export default Buycnl;
