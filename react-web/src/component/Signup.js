import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import RoundedTextField from './RoundedTextField';
import '../App.css';

const Signup = ({ onRegister }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    
  };

  return (
    <Container maxWidth="md">
      <div className="content-container">
        <form onSubmit={handleRegister} className='signup-form'>

          <Typography variant="h4" style={{ marginBottom: '16px' }}>Create new account</Typography>
          <Typography style={{ fontSize: '1rem' , marginBottom: '16px' }}>
            Already A Member?<Link to="/login" style={{ textDecoration: "none", fontWeight: "bold"}}> Log In</Link>
          </Typography>

          <div className="flex-box-div">
            <RoundedTextField
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <RoundedTextField
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />            
          </div>
          <RoundedTextField
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleInputChange}
              required
            />
          <RoundedTextField
              name="email"
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          <RoundedTextField
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ my: 2, borderRadius:2 }}
          >
            Register
          </Button>
          
          
        </form>
      </div>
    </Container>
  );
};

export default Signup;
