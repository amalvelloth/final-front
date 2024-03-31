import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Reason = () => {
  const [selectedReason, setSelectedReason] = useState('');

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  const handleSubmit = () => {
    // Alert when the Submit button is clicked
    alert('Form submitted! Selected reason: ' + selectedReason);
    // Navigate to the next page
    window.location.href = 'http://localhost:3000/viewpro'; 
  };

  const isReasonSelected = selectedReason !== '';

  return (
    <div>
      <h2>Please select a reason:</h2>
      <div>
        <input
          type="radio"
          id="Changed Mind"
          name="reason"
          value="Changed Mind"
          checked={selectedReason === 'Changed Mind'}
          onChange={handleReasonChange}
        />
        <label htmlFor="Changed Mind">Changed Mind</label>
      </div><br />
      <div>
        <input
          type="radio"
          id="Gifted by Mistake"
          name="reason"
          value="Gifted by Mistake"
          checked={selectedReason === 'Gifted by Mistake'}
          onChange={handleReasonChange}
        />
        <label htmlFor="Gifted by Mistake">Gifted by Mistake</label>
      </div><br />
      <div>
        <input
          type="radio"
          id="Other..."
          name="reason"
          value="Other..."
          checked={selectedReason === 'Other...'}
          onChange={handleReasonChange}
        />
        <label htmlFor="Other...">Other...</label>
      </div><br />
      
      <Button disabled={!isReasonSelected} onClick={handleSubmit}>Submit</Button>

     <Link to="http://localhost:3000/buycnl"> <Button>Cancel</Button></Link>

    </div>
  );
};

export default Reason;
