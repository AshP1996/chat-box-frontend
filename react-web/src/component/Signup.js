import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import '../App.css'

const Signup = ({ onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("");


  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      password,
      dob,
      phone_number: phoneNumber,
      language,
      is_staff: false,
      is_active: true,
      created_at: new Date().toISOString(), // Generating current date and time
    };

    fetch("http://127.0.0.1:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Do something with the response data if needed
        console.log("Registration successful:", data);
        // Perform any additional actions, like redirecting to another page
      })
      .catch((error) => {
        console.error("Error during registration:", error.message);
        // Handle errors appropriately, such as displaying an error message to the user
      });
  };

  return (
    <>
      <Container maxWidth="md">
        <div className="content-container">
          
          <form onSubmit={handleRegister}>
            <Typography variant="h4">Register</Typography>
            <TextField
              label="First Name"
              variant="outlined"
              size="small"
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
            <TextField
              label="Date of Birth"              
              variant="outlined"
              fullWidth
              margin="normal"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
            <TextField
              label="Phone Number"              
              variant="outlined"
              fullWidth
              margin="normal"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <TextField
              label="Language"              
              variant="outlined"
              fullWidth
              margin="normal"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
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
          
          <div className="dummy">
          </div>

        </div>
      </Container>
    </>
  );
};

export default Signup;
