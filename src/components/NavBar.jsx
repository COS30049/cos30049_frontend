import {AppBar, Box, List, ListItemButton, ListItemText, ThemeProvider, Typography, createTheme, ListItem, Toolbar} from "@mui/material";
import { ReactComponent as YourSvg } from '../logo.svg';
import React from 'react';

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <AppBar position="static">
                    <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    >
                        <Box className="logo" component="span"
                            sx={{
                                paddingRight: '2rem',
                            }}
                        >
                            <YourSvg fill="#648AF2" height={50}/>
                        </Box>
                        <List className="link-lists"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <ListItem>
                                <ListItemButton components="a" href="/trading">
                                    Tradings
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton components="a" href="/trading">
                                    Stats
                                </ListItemButton>
                            </ListItem>
                            {/* <ListItemButton components="a" href="/stats">
                                <ListItemText primary="Stats"/>
                            </ListItemButton> */}
                        </List>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}


const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    padding: "10px 25px 10px 25px",
                }
            }
        },
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
                    fontSize: "1.5rem",
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