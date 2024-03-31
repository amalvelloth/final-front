import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Buy.css';
import axios from 'axios';

const Buy = () => {
  const [inputs, setInputs] = useState({
    name: '',
    address: '',
    phone: '',
  });
  const [formError, setFormError] = useState('');

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const addHandler = (event) => {
    event.preventDefault();
    if (!inputs.name || !inputs.address || !inputs.phone) {
      setFormError('Please fill out all fields.');
      return;
    }
    axios.post('http://localhost:3005/unew', inputs)
      .then((response) => {
        alert('Item Ordered Successfully');
        // Navigate to "/viewpro" after successful submission
        window.location.href = "/viewpro";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d'>
      <h2>Cash on Delivery Payment</h2>
      <form onSubmit={addHandler}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={inputs.address}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={inputHandler}
            required
          />
        </label>
        <br /><br />
        {formError && <p style={{ color: 'red' }}>{formError}</p>}
        <div className='dd'>
          <button type="submit" variant="contained" color="primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Buy;
