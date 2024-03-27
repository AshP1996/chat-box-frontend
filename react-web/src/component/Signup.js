import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signup = ({ onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      is_staff: false,
      is_active: true,
      created_at: new Date().toISOString(), // Generating current date and time
      language: "en",
    };
    onRegister(userData);
  };

  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: "25px" }}>
        <Typography variant="h4">Register</Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            type="email"
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
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            Register
          </Button>
          <Typography style={{ marginTop: "10px", color: "gray" }}>
            I have already account{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Typography>
        </form>
      </Container>
    </>
  );
};

export default Signup;
