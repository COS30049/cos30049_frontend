import React from 'react';
import { 
    Box, 
    Button, 
    Typography, 
    Modal, 
    TextField, 
    ThemeProvider} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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
        width: '100%'
    },

    "& input" : {
        pt: "24px",
        pb: "8px",
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
    cursor: 'pointer'
}


function LoginModal({open, setLoginOpen, setSignupOpen}) {
    const handleClose = () => setLoginOpen(false);
    const switchSignup = (event) => {
        setLoginOpen(false)
        setSignupOpen(true)
    };

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-loginModal-title"
            >
                <Box sx={wrapperStyle}>
                    <CloseIcon 
                        sx={{
                            
                        }}

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

                            // component="a" 
                            // href="/login"
                        >
                            Log In
                        </Button>
                    </Box>    
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

function SignupModal({open, setLoginOpen, setSignupOpen}) {
    const handleClose = () => setSignupOpen(false);
    const switchLogin = (event) => {
        setSignupOpen(false)
        setLoginOpen(true)
    };

    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-signupModal-title"
            >
                <Box sx={wrapperStyle}>
                    <CloseIcon 
                        sx={{
                            position: 'relative',
                            float: 'right',
                            mr: 0,
                            fontSize: '2em',
                            cursor: 'pointer'
                        }}

                        onClick={handleClose}
                    />
                    <Typography id="modal-signupModal-title" variant='h4' component="h2" 
                        sx={ modalTitleStyle }
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
                        >
                            Sign Up
                        </Button>
                    </Box>    
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export { LoginModal, SignupModal };
