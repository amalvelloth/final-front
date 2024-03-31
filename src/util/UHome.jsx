import React from 'react';
import './UHome.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const UHome = (props) => {
  const handleButtonClick = () => {
    // Define the functionality when the button is clicked
    console.log("Button clicked!");
  };

  return (
    <div className="uhome-container"> {/* Apply the CSS class to the container */}
      {/* Your content */}
      <div className='swee'>
        <Link to="http://localhost:3000/Authentication">
          <Button onClick={handleButtonClick}>Click Me To Explore</Button>
        </Link>
      </div>
    </div>
  );
};

export default UHome;
