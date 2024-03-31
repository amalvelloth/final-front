import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, TextField, Grid, Container, AppBar, Toolbar, Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import './viewpro.css';
import { Buffer } from 'buffer';
import { Link, useNavigate } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon

const Viewpro = () => {
    const [items, setItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:4005/iview")
            .then(response => {
                setItems(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleViewClick = (productId) => {
        console.log("View Product with ID:", productId);
        navigate(`/img/${productId}`)
    };

    const handleCategoryClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCategoryClose = () => {
        setAnchorEl(null);
    };

    const handleCategorySelect = (category) => {
        setSearchQuery(category); // Update search query with selected category
        handleCategoryClose(); // Close the dropdown menu
    };

    const filteredItems = items.filter(item =>
        item.Category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.Description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: 'orange' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">boOKWOrm 📚</Typography>
                    <Button onClick={handleCategoryClick}>Category</Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleCategoryClose}
                    >
                        <MenuItem onClick={() => handleCategorySelect('Love')}>Love</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect('crime')}>crime</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect('comic')}>comic</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect('motivation')}>motivation</MenuItem>
                        <MenuItem onClick={() => handleCategorySelect('Thriller')}>Thriller</MenuItem>
                    </Menu>
                    <Link to="http://localhost:3000/uh"><Button>Logout</Button></Link>
                </Toolbar>
            </AppBar>

            <h1>"Discover a world of stories at our bookselling website, where every page turns into an adventure waiting to be explored."</h1>

            <Container maxWidth="lg" style={{ marginTop: '64px' }}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ marginBottom: '20px', width: '100%' }}
                />
                <Grid container spacing={3}>
                    {filteredItems.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <Card className="postcard">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`data:image/jpeg;base64,${Buffer.from(item.image1.data).toString('base64')}`}
                                    alt="Product Image"
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {item.Category}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                                        {item.Subcategory}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item.Description}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Price: {item.Price}
                                    </Typography>
                                </CardContent>
                                <Button
                                    onClick={() => handleViewClick(item._id)}
                                    variant="contained"
                                    style={{ backgroundColor: 'orange', color: 'white' }}
                                    fullWidth
                                >
                                    View
                                </Button>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container><br></br>

            {/* Footer */}
            <footer className="footer" style={{ backgroundColor: 'orange' }}>
    <div>
        <Link to="https://www.instagram.com/shihad_shadhu?igsh=MWZmaHZ5c2Q4dHN1dg%3D%3D&utm_source=qr">
            <FaInstagram size={30} />
        </Link>
    </div>
</footer>

        </div>
    );
};

export default Viewpro;
