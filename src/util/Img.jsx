import { Button, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import './Img.css';


const Img = () => {
  const [viewData, setViewData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4006/getoneitem/${id}`).then(response => {
      setViewData(response.data.data);
    });
  }, [id]);

  return (
    <div className="card">
      <h2>Buy your choice</h2>
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {viewData.Category}
        </Typography>

        {viewData.image1 && viewData.image1.data && (
          <CardMedia
            component="img"
            className="card-image"
            image={`data:image/jpeg;base64,${Buffer.from(viewData.image1.data).toString('base64')}`}
            alt="Product Image"
          />
        )}

        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          {viewData.Subcategory}
        </Typography>
        <Typography variant="body2" component="p" align="center">
          {viewData.Description}
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Price: {viewData.Price}
        </Typography>

        <br />
        <Link to="/buy">
          <Button
            variant="contained"
            color="primary"
            onClick={() => alert("Are you sure!")}
          >
            Buy
          </Button>
        </Link>
      </CardContent>
    </div>
  );
};

export default Img;
