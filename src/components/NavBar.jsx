import {AppBar, Box, List, ListItemButton, ListItemText, ThemeProvider, Typography, createTheme, ListItem, Toolbar, Link} from "@mui/material";
import { ReactComponent as YourSvg } from '../logo.svg';
import React from 'react';
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar position="static">
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
                                display: "inline-block",
                                float: "right",
                            }}
                        >
                            <Link
                                sx={{
                                    textDecoration: 'none',
                                    py: ".5rem",
                                    px: "1rem",
                                }}
                                href="/login"
                            >
                                Login
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}


const theme = createTheme({
    components: {
        MuiList: {
            styleOverrides: {
                root: {
                    display: "inline-block",
                    
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    display: "inline-block",
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    display: "inline-block",
                    borderRadius: "8px",

                    "&:hover": {
                        backgroundColor: "#E4F1FF",
                        color: "#007FFF"
                    }
                }
            }
        }
    }
  })