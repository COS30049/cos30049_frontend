import { createTheme } from "@mui/material";

const theme = createTheme ({
    palette: {
        mode: 'light',
        primary: {
            main: '#007fff',
            light: '#56b0ff',
            dark: '#2239b8',
        },
        secondary: {
            main: '#648af2',
            light: '#e7ebfd',
            dark: '#004dd9',
        },
        text: {
            primary: '#191919',
            secondary: '#797979',
            hint: '#797979',
        },
    },
    components: {
        // App Bar or NavBar theme
        MuiAppBar: {
            components: {
                MuiList: {
                    styleOverrides: {
                        root: {
                            display: {xs: "block", lg: "inline-block"},
                            width: '100%',
                        },
                    },
                },
                MuiListItem: {
                    styleOverrides: {
                        root: {
                            display: {xs: "block", lg:"inline-block"},
                            width: '100%',
                            "& a": {
                                textDecoration: "none",
                                borderRadius: "8px",
                                padding: "8px 16px",
                                "&:hover": {
                                    color: "#007FFF",
                                    backgroundColor: "#e4f1ff",
                                }
                            }
                        },
                    },
                },
                MuiListItemButton: {
                    styleOverrides: {
                        root: {
                            display: "inline-block",
                            borderRadius: "8px",
        
                            "&:hover": {
                                backgroundColor: "#E4F1FF",
                                color: "#007FFF"
                            },
                        },
                    },
                },
            },
        },

        // Button Theme
        MuiButton: {
            variants: [
                {
                    props: { variant: 'action', color: 'primary' },
                    style: {
                        backgroundColor: '#007fff',
                        color: '#fff',

                        "&:hover": {
                            backgroundColor: '#2239b8',
                        }
                    },
                },
                {    
                    props: { variant: 'action', color: 'secondary' },
                    style: {
                        backgroundColor: '#648af2',
                        color: '#fff',

                        "&:hover": {
                            backgroundColor: '#004dd9',
                        }
                    },
                },
            ],
        },

        // Typography Theme
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'pseudoBtn'},
                    style: {
                        cursor: 'pointer',
                    },
                },
                {
                    props: { variant: 'pseudoBtn', color: 'primary' },
                    style: {
                        color: '#007fff',

                        "&:hover": {
                            color: '#2239b8',
                        }
                    },
                },
                {
                    props: { variant: 'pseudoBtn', color: 'secondary' },
                    style: {
                        color: '#648af2',

                        "&:hover": {
                            color: '#004dd9',
                        },
                    },
                },
            ],
        },
    },
});

export default theme;