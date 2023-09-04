import React, { useState } from 'react';
import {AppBar, Box, Button, List, ListItemButton, ListItemText, ThemeProvider, Typography, createTheme, ListItem, Toolbar, Link} from '@mui/material';
import { ReactComponent as YourSvg } from '../logo.svg';
import { NavLink } from 'react-router-dom';
import { LoginModal, SignupModal } from './Modals';

import theme from '../custom/theme';


export default function NavBar() {
    // this enables the login and sign-up modals to be switched back and forth
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const handleLogin = (event) => {
        setLoginOpen(true)
    }
    
    const handleSignup = (event) => {
        setSignupOpen(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar position="static" className="nav-bar">
                    <Toolbar
                    sx={{
                        padding: '0px !important',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        backgroundColor: '#FFFFFF',
                        padding: "5px 25px 5px 25px",
                        fontSize: "22px",
                    }}
                    disablePadding
                    >
                        <Box
                            sx={{
                                display: "flex"
                            }}
                        >
                            <Box className="logo" component="div"
                                sx={{
                                    paddingRight: '2rem',
                                    display: "flex"
                                }}
                            >
                                <YourSvg
                                    fill="#648AF2" height={50}
                                />
                                
                            </Box>
                            <List className="link-lists" disablePadding
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <ListItem disablePadding
                                    sx={{
                                        mr:"15px",
                                    }}
                                >
                                    <ListItemButton components="a" href="/trading">
                                        Tradings
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding
                                    sx={{
                                        mr:"15px",
                                    }}
                                >
                                    <ListItemButton components="a" href="/trading">
                                        Stats
                                    </ListItemButton>
                                </ListItem>
                                {/* <ListItemButton components="a" href="/stats">
                                    <ListItemText primary="Stats"/>
                                </ListItemButton> */}
                            </List>
                        </Box>
                        <Box className="authentication" component="div"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: '12px',
                            }}
                        >
                            <Button
                                sx={{
                                    textDecoration: 'none',
                                    py: ".5rem",
                                    px: "1rem",
                                }}

                                onClick={handleLogin}
                            >
                                Login
                            </Button>
                            <Button variant="contained" disableRipple
                                sx={{
                                    backgroundColor: "#1E1E1E",
                                    color: "#F5F5F5",
                                    textTransform: 'none',
                                    py: '8px',
                                    px: '12px',
                                    fontWeight: '400',
                                    border: 'none',
                                    lineHeight: 'normal',
                                    borderRadius: '9px',
                                }}
                                
                                onClick={handleSignup}
                            >
                                Register
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <LoginModal open={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
            <SignupModal open={signupOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
        </ThemeProvider>
    )
}