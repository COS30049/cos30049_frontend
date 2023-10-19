import React from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Profile() {
  return (
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
    </Container>
  );
}
