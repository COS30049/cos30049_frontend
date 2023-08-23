import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
...theme.typography.body2,
padding: theme.spacing(1),
textAlign: 'center',
color: theme.palette.text.secondary,
}));
export default function BasicGrid() {
return (
<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={2}>
<Grid item xs={8} sm={12} md={8}>
<Item>Grid 1</Item>
</Grid>
<Grid item xs={4} sm={12} md={4}>
<Item>Grid 2</Item>
</Grid>
<Grid item xs={4} sm={6} md={12}>
<Item>Grid 3</Item>
</Grid>
<Grid item xs={8} sm={6} md={12}>
<Item>Grid 4</Item>
</Grid>
</Grid>
</Box>
);
}