import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../App.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <>
      <Container maxWidth="sm">        
        <form onSubmit={handleLogin}>
          <Typography variant="h4" >Login</Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          <Typography>
            I don't have account <Link to="/signup">Signup</Link>
          </Typography>
        </form>
      </Container>
    </>
  );
};

export default Login;
