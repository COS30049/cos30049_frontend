import React from "react";
import { TextField, Container, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

export default function Profile() {
  let auth = localStorage.getItem("auth") === "true";
  return ( auth ?
    <Container disableGutters maxWidth={false} sx={{my: "2rem"}}>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      
      <TextField
        label="Username"
        variant="outlined"
        disabled
        defaultValue={localStorage.getItem("username")}
        fullWidth
        margin="normal"
      />
      
      <TextField
        label="Address"
        variant="outlined"
        disabled
        defaultValue={localStorage.getItem("token")}
        fullWidth
        margin="normal"
      />
    </Container> : <Navigate to={"/"} />
  );
}
