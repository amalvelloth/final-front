import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Container, Link, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ULogin = () => {
  const [inputs, setInputs] = useState({ "username": '', "password": '' });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const navigate = useNavigate();

  const checkData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:4006/Login", {
        name: inputs.name,
        password: inputs.password,
      });
      if (response.data.success) {
        alert('Login successful');
        navigate('/viewpro');
      }
      else {
        alert('Invalid email and Password. Please try again.');
        console.log(response.data);
      }
    } catch (err) {
      alert('Error occurred during login. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" style={{ marginTop: '50px', backgroundImage: 'url("C:\Users\krish\Downloads\old-library-book-set-isolated-compositions-with-doodle-characters-public-visitors-librarian-bookcase.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Login
            </Typography>
            <form onSubmit={checkData}>
              <div >
                <TextField
                  fullWidth
                  required
                  id="outlined-required"
                  label="Username"
                  name="name"
                  value={inputs.name}
                  onChange={inputHandler}
                  margin="normal"
                  variant="outlined"
                  style={{ marginBottom: '20px' }}
                />
                <TextField
                  fullWidth
                  required
                  name="password"
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={inputs.password}
                  onChange={inputHandler}
                  margin="normal"
                  variant="outlined"
                  style={{ marginBottom: '20px' }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </div>
            </form>
            <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
              Don't have an account? <Link href="/register">Sign up here</Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ULogin;
