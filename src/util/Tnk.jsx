import React from 'react';
import './Tnk.css'; 
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Tnk = () => {
  return (
    <div className="tnk">
      <h1>Thank you for choosing us 💫</h1><br></br>

      <h2>
        Dear User,

        We wanted to take a moment to express our heartfelt gratitude for choosing boOKWOrm 📚. Your trust and support mean the world to us.<br></br>

        Thank you for giving us the opportunity to serve you. We strive to provide the best possible experience for each and every customer, and your satisfaction is our top priority.<br></br>

        Your decision to choose us is a testament to the quality of our products/services, and we are truly honored to have earned your business.<br></br>

        If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. We're here to assist you every step of the way. You can connect with us on Instagram "@shihad_shadhu" for updates, promotions, and more.<br></br>

        Once again, thank you for choosing boOKWOrm 📚. We look forward to serving you again in the future.<br></br>

        Warm regards,<br></br>

        boOKWOrm Team 💖
      </h2><br></br>
      
      <div className="bottom-button">
        <Link to="http://localhost:3000/viewpro">
          <Button  variant="contained" color="primary">Go To Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Tnk;
