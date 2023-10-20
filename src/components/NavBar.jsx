import React, { useState, useEffect } from 'react';
import {AppBar, Box, Drawer, Button, List, ThemeProvider, ListItem, Toolbar} from '@mui/material';
import { ReactComponent as YourSvg } from '../logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { IconButton} from '@mui/material';

import { CfModal, LoginModal, SignupModal } from './Modals';

import theme from '../custom/theme';
import { Menu } from '@mui/icons-material';


const drawerWidth = '50%';

export default function NavBar() {

    const navigate = useNavigate();

    const [cfOpen, setCfOpen] = useState(false);
    const [drawer, setDrawer] = useState(false);

    // this enables the login and sign-up modals to be switched back and forth
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    // this manages the log-in state of user
    const[auth, setAuth] = useState(false);

    console.log("auth ", auth);
    useEffect(() => {
        const authS = localStorage.getItem("auth");
        if (authS === "true") {
            setAuth(authS === "true");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("auth", auth.toString());
    });

    const handleCf = (event) => {
        setCfOpen(true)
    }

    const handleLogin = (event) => {
        setLoginOpen(true);
    }
    
    const handleSignup = (event) => {
        setSignupOpen(true);
    }

    const handleLogout = () => {
        setAuth(false);
        setCfOpen(false);
        localStorage.clear();
        window.location.reload();
    }

    const handleDrawer = (event) => {
        setDrawer((prev) => {
            if(!prev) return true;
            else return false;
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    position:"sticky",
                    zIndex: "999",
                }}
            >
                <AppBar
                    sx={{
                        px: "50px",
                        backgroundColor: '#FFFFFF',
                        fontSize: "18px",

                        [theme.breakpoints.down("md")] : {
                            px: "25px",
                        }
                    }}
                >
                    <Toolbar disableGutters={true}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        
                        [theme.breakpoints.down('md')]: {
                            justifyContent: 'start'
                        }
                    }}
                    >
                        <IconButton className='mobile-menu-btn'
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
                            onClick={handleDrawer}
                        >
                            <Menu 
                                fontSize={"large"}
                            />
                        </IconButton>
                        <Box className="nav-list"
                            sx={{
                                display: "flex"
                                
                            }}
                        >
                            <Box className="logo" component="div"
                                sx={{
                                    paddingRight: '2rem',
                                    minHeight: "45px",
                                    
                                    "& a": {
                                        display: "flex",
                                        alignItems: 'center',
                                    }
                                }}
                            >
                                <Link to="/">
                                    <YourSvg
                                        fill="#648AF2" height={45}
                                    />
                                </Link>
                            </Box>
                            <List className="link-lists nav-bar" disablePadding
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    
                                    [theme.breakpoints.down('md')]: {
                                        display: "none",
                                    }
                                }}
                            >
                                <ListItem disablePadding
                                    sx={{
                                        mr:"15px",
                                    }}
                                >
                                    <Link to={"/tradings"} className='nav-links'
                                    >
                                        Tradings
                                    </Link>
                                </ListItem>
                                <ListItem disablePadding
                                    sx={{
                                        mr:"15px",
                                    }}
                                >
                                    <Link to={"/txnhistory"} className='nav-links'>
                                        History
                                    </Link>
                                </ListItem>
                            </List>
                        </Box>
                        <Box className="authentication nav-bar" component="div"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: '12px',

                                [theme.breakpoints.down('md')]: {
                                        display: "none",
                                }
                            }}
                        >
                        {!auth && (<>
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
                                }}
                                
                                onClick={handleSignup}
                            >
                                Register
                            </Button>
                        </>)}
                            {auth && <Box>
                                <Button
                                    sx={{
                                        textDecoration: 'none',
                                        textTransform: "none",
                                    }} 
                                    onClick={() => {
                                            navigate("/profile");
                                        }}
                                >Username</Button>
                                <Button sx={{
                                        textDecoration: 'none',
                                        textTransform: "none",
                                        color: "#13131353",
                                        "&:hover": {
                                            color: "#fc0000",
                                        }
                                    }} 
                                    onClick={handleLogout}>Logout
                                </Button>
                            </Box>}
                        </Box>
                    </Toolbar>
                    <Drawer
                            sx={{
                                display: "none",

                                [theme.breakpoints.down('md')]: {
                                    display: "block",
                                },
                                
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, mx: 'auto', py: '30px'},
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            open={drawer}
                            onClose={handleDrawer}
                    >
                        <List className="link-lists nav-bar" disablePadding>
                            <ListItem disablePadding
                            >
                                <Link to={"/tradings"} className='nav-links'
                                >
                                    Tradings
                                </Link>
                            </ListItem>
                            <ListItem disablePadding
                                sx={{
                                }}
                            >
                                <Link to={"/txnhistory"} className='nav-links'>
                                    History
                                </Link>
                            </ListItem>
                        </List>
                        <Box className="authentication nav-bar" component="div"
                            sx={{
                                width: '100%',
                            }}
                        >
                            {!auth && (<>
                                <Button
                                    sx={{
                                        textDecoration: 'none',
                                        textTransform: "none",
                                        py: ".5rem",
                                        px: "1rem",
                                    }}
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                                <Button
                                    sx={{
                                        textDecoration: 'none',
                                        textTransform: "none",
                                        py: ".5rem",
                                        px: "1rem",
                                    }}
                                    onClick={handleLogin}
                                >
                                    Register
                                </Button></>)}
                            {auth && <Box>
                                <Button
                                    sx={{
                                        textDecoration: 'none',
                                        textTransform: "none",
                                    }} 
                                    onClick={() => {
                                            navigate("/profile");
                                        }}
                                    >Username</Button>
                                <Button onClick={handleLogout} variant="action" color="danger">Logout</Button>
                            </Box>}
                        </Box>
                    </Drawer> 
                </AppBar>
            </Box>

            <LoginModal open={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} setAuth={setAuth} />
            <SignupModal open={signupOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} setAuth={setAuth} />
            <CfModal open={cfOpen} setCfOpen={setCfOpen} onAccept={handleLogout} title={"You are logging out!"} msg={"Do you wish to continue?"} />
        </ThemeProvider>
    )
}