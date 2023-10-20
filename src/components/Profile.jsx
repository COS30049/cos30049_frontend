import React from "react";
import { TextField, Container, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Profile() {
  let auth = localStorage.getItem("auth") === "true";
  return ( auth ?
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      
      <TextField
        label="Username"
        variant="outlined"
        disabled
        defaultValue="Minh Nguyen"
        fullWidth
        margin="normal"
      />
      
      <TextField
        label="Address"
        variant="outlined"
        disabled
        defaultValue="Melbourne"
        fullWidth
        margin="normal"
      />
    </Container> : <Navigate to={"/"} />
  );
}
