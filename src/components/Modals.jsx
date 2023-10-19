import React from 'react';
import { 
    Box, 
    Button,
    Chip,
    Grid,
    Typography, 
    Modal, 
    TextField, 
    ThemeProvider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TollIcon from '@mui/icons-material/Toll';
import LoopIcon from '@mui/icons-material/Loop';

import theme from  '../custom/theme';

const wrapperStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#ffffff',
    border: '1px solid #707070',
    borderRadius: '24px',
    boxShadow: 24,
    p: '40px',
    pt: '25px'
};

const inputStyle = {
    
    "& div:has(input)": {
        borderRadius: '12px',
        bgcolor: '#F2F4F8',
        width: '100%',
        height: '55px',
    },

    "& input" : {
        pt: "24px",
        pb: "8px",
        boxSizing: "content-box"
    },

    "& ::after": {
        display: "none"
    },

    "& ::before": {
        display: "none"
    },
};

const buttonStyle = {
    width: 'fit-content', 
    px: 5, 
    py: 1, 
    borderRadius: '30px', 
    mt:5, 
    mx: 'auto'
};

const modalTitleStyle = {
    textAlign: 'center', 
    fontWeight: 'bold', 
    clear: 'both',
    mt: 4 
}

const closeIcStyle = {
    position: 'relative',
    float: 'right',
    mr: 0,
    fontSize: '2em',
    cursor: 'pointer',

    "&:hover": {
        fill: '#007fff',
    }
}


function LoginModal({open, setLoginOpen, setSignupOpen, setAuth}) {
    const handleClose = () => setLoginOpen(false);
    const switchSignup = (event) => {
        setLoginOpen(false)
        setSignupOpen(true)
    };

    const handleAuth = (event) => {
        setAuth(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-loginModal-title"
            >
                <Box sx={wrapperStyle}>
                    <CloseIcon 
                        sx={ closeIcStyle }
                        onClick={handleClose}
                    />
                    <Typography id="modal-loginModal-title" variant='h4' component="h2" 
                        sx={ modalTitleStyle }
                    >
                        Log In
                    </Typography>

                    <Box sx={{mt:'60px', display:"flex" , gap: 2, flexDirection: 'column'}}>
                        <TextField id="login_user" label="Username" variant="filled" sx={inputStyle} />
                        <TextField id="login_pass" label="Password" variant="filled" sx={inputStyle} type="password"/>

                        <Box  sx={{ display: 'flex', gap: 1 }}>
                            <Typography>Don't have an account?</Typography>
                            <Typography variant="pseudoBtn" color="primary" onClick={switchSignup}>Register</Typography>
                        </Box>
                        
                        <Button variant="action"
                            color="primary"
                            sx={ buttonStyle }
                            component="a"
                            href="/profile"
                            onClick={handleAuth}
                        >
                            Log In
                        </Button>
                    </Box>    
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

function SignupModal({open, setLoginOpen, setSignupOpen, setAuth}) {
    const handleClose = () => setSignupOpen(false);
    const switchLogin = (event) => {
        setSignupOpen(false)
        setLoginOpen(true)
    };

    const handleAuth = (event) => {
        setAuth(true)
    }

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-signupModal-title"
            >
                <Box sx={wrapperStyle}>
                    <CloseIcon 
                        sx={ closeIcStyle }
                        onClick={handleClose}
                    />
                    <Typography id="modal-signupModal-title" variant='h4' component="h2" 
                        // sx={ modalTitleStyle }
                    >
                        Sign Up
                    </Typography>

                    <Box sx={{mt:'60px', display:"flex" , gap: 2, flexDirection: 'column'}}>
                        <TextField id="reg_user" label="Username" variant="filled" sx={inputStyle} />
                        <TextField id="reg_pass" label="Password" variant="filled" sx={inputStyle} type="password"/>
                        <TextField id="ref_conf_pass" label="Confirm Password" variant="filled" sx={inputStyle} type="password"/>

                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <Typography>Already have an account?</Typography>
                            <Typography variant="pseudoBtn" color="primary" onClick={switchLogin}>Log in</Typography>
                        </Box>
                        
                        <Button variant="action"
                            color="primary" 
                            sx={ buttonStyle }
                            component="a"
                            href="/profile"
                            onclick={handleAuth}
                        >
                            Sign Up
                        </Button>
                    </Box>    
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

function AssetDetailsModal({open, setDetailsOpen, id, name, price, volume, tag, imgPath}) {
    const handleClose = () => setDetailsOpen(false);
    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-loginModal-title"
            >
                <Box sx={{...wrapperStyle, width: 1000}}>
                    <CloseIcon 
                        sx={ closeIcStyle }
                        onClick={handleClose}
                    />
                    
                    <Grid container spacing={4}>
                        <Grid item md={5}>
                            <img src={imgPath} width='100%' style={{border: '0.1px solid white', borderRadius: '15px'}}/>
                        </Grid>
                        <Grid item md={7}>
                            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                                <div>
                                    <Chip label={tag} color="info" fontSize={15} sx={{mb: 2}}/>
                                    <Typography variant='h4' component='h1'>{name}</Typography>

                                    <List sx={{display: 'flex' , gap: 3}}>
                                        <ListItem sx={{gap: 1}} disablePadding>
                                            <TollIcon/>
                                            <Typography>{price}</Typography>
                                        </ListItem>
                                        <ListItem sx={{gap: 1}} disablePadding>
                                            <LoopIcon/>
                                            <Typography>{volume}</Typography>
                                        </ListItem>
                                    </List>
                                </div>
                                
                                <Button variant="action"
                                    color="primary" 
                                    sx={{...buttonStyle, width: '100%' }}
                                >
                                    Buy
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>  
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export { LoginModal, SignupModal, AssetDetailsModal };
