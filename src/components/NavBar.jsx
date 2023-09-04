import React, { useState } from 'react';
import {AppBar, Box, Button, List, ListItemButton, ListItemText, ThemeProvider, Typography, createTheme, ListItem, Toolbar, Link} from '@mui/material';
import { ReactComponent as YourSvg } from '../logo.svg';
import { NavLink } from 'react-router-dom';
import { MenuIcon, IconButton} from '@mui/material';
import { LoginModal, SignupModal } from './Modals';

import theme from '../custom/theme';
import { Menu } from '@mui/icons-material';


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
            
                <AppBar position="static"
                    sx={{
                        px: "50px",
                        backgroundColor: '#FFFFFF',
                        fontSize: "18px",
                    }}
                >
                    <Toolbar disableGutters={true}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        
                    }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                mr: 2,
                                display: "none",
                                [theme.breakpoints.down("md")] : {
                                    display: "inline-block"
                                }
                            }}
                        >
                            <Menu 
                                fontSize={"large"}
                            />
                        </IconButton>
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
                                    fill="#648AF2" height={45}
                                />
                                
                            </Box>
                            <List className="link-lists nav-bar" disablePadding
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
                            </List>
                        </Box>
                        <Box className="authentication nav-bar" component="div"
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
                                    textTransform: "none",
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
                                    fontSize: "18px",
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