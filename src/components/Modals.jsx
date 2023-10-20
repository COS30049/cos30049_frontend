import React, { useState } from "react";
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
    ListItem} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TollIcon from "@mui/icons-material/Toll";
import LoopIcon from "@mui/icons-material/Loop";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

import theme from  "../custom/theme";

import login from "../api/login"
import register from "../api/register"

const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#ffffff",
    border: "1px solid #707070",
    borderRadius: "24px",
    boxShadow: 24,
    p: "40px",
    pt: "25px"
};

const inputStyle = {
    
    "& div:has(input)": {
        borderRadius: "12px",
        bgcolor: "#F2F4F8",
        width: "100%",
        height: "55px",
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
    width: "fit-content", 
    px: 5, 
    py: 1, 
    borderRadius: "30px", 
    mt:5, 
    mx: "auto"
};

const modalTitleStyle = {
    textAlign: "center", 
    fontWeight: "bold", 
}

const closeIcStyle = {
    ml: "auto",
    fontSize: "2em",
    cursor: "pointer",

    "&:hover": {
        fill: "#007fff",
    }
}


function CfModal({open, setCfOpen, onAccept, title, msg}) {
    const handleClose = () => setCfOpen(false);

    return (
        <ThemeProvider theme={theme}>   
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box sx={{...wrapperStyle, width: 500}}>
                    <CloseIcon 
                        sx={ closeIcStyle }
                        onClick={handleClose}
                    />
                    <div>
                        <Box sx={{display: "flex", flexDirection: "column", gap: 3}}>
                            <Box sx={{...modalTitleStyle, display: "flex", flexDirection: "column", alignItems: "center", gap: 1}}>
                                <WarningRoundedIcon sx={{display: "block", fontSize: "150px", textAlign: "center"}}/>
                                <Typography id="modal-loginModal-title" variant="h4" component="h2" 
                            >
                                {title}
                            </Typography>
                            </Box>
                            <Typography sx={{textAlign: "center", fontSize: "1.2em"}}>{msg}</Typography>
                            <Box sx={{display:"flex", flexDirection: "column" , gap: 3}}>
                                
                                <Box sx={{display:"flex" , gap: 2, justifyContent: "center"}}>
                                    <Button variant="action"
                                        color="secondary"
                                        sx={{ ...buttonStyle, m: 0 }}
                                        onClick={handleClose}
                                    >
                                        No
                                    </Button>
                                    <Button variant="action"
                                        color="danger"
                                        sx={{ ...buttonStyle, m: 0 }}
                                        onClick={onAccept}
                                        autoFocus
                                    >
                                        Yes
                                    </Button>
                                </Box> 
                            </Box>
                        </Box> 
                    </div>  
                </Box>
            </Modal>
        </ThemeProvider>
    );
    
}


function LoginModal({open, setLoginOpen, setSignupOpen, setAuth}) {
    const handleClose = () => setLoginOpen(false);
    const switchSignup = (event) => {
        setLoginOpen(false)
        setSignupOpen(true)
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleAuth = (event) => {
        login({username: username, password: password})
        .then(resp => resp.data)
        .then(data => {
            if(data.hasOwnProperty("message"))
            {
                setAuth(true)
                handleClose()
            }
            else alert(data["error"])
        })
        .catch((err) => {
            console.error(err)
        })
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
                    <Typography id="modal-loginModal-title" variant="h4" component="h2" 
                        sx={ modalTitleStyle }
                    >
                        Log In
                    </Typography>

                    <Box sx={{mt:"60px", display:"flex" , gap: 2, flexDirection: "column"}}>
                        <TextField id="login_user" label="Username" variant="filled" sx={inputStyle} onChange={(event)=>setUsername(event.target.value)}/>
                        <TextField id="login_pass" label="Password" variant="filled" sx={inputStyle} onChange={(event)=>setPassword(event.target.value)} type="password"/>

                        <Box  sx={{ display: "flex", gap: 1 }}>
                            <Typography>Don"t have an account?</Typography>
                            <Typography variant="pseudoBtn" color="primary" onClick={switchSignup}>Register</Typography>
                        </Box>
                        
                        <Button variant="action"
                            color="primary"
                            sx={ buttonStyle }
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

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cfpassword, setCfPassword] = useState("");

    const handleAuth = (event) => {
        if(password === cfpassword)
        {
            register({username: username, password: password, token: ""})
            .then(resp => resp.data)
            .then(data => {
                if(data.hasOwnProperty("message"))
                {
                    setAuth(true)
                    handleClose()
                }
                else alert(data["error"])
            })
            .catch((err) => {
                console.error(err)
            })
        } else {
            alert("Your confirmed password does not match!")
        }
        
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
                    <Typography id="modal-signupModal-title" variant="h4" component="h2" 
                        sx={ modalTitleStyle }
                    >
                        Sign Up
                    </Typography>

                    <Box sx={{mt:"60px", display:"flex" , gap: 2, flexDirection: "column"}}>
                        <TextField id="reg_user" label="Username" variant="filled" onChange={(event)=>setUsername(event.target.value)} sx={inputStyle} />
                        <TextField id="reg_pass" label="Password" variant="filled" onChange={(event)=>setPassword(event.target.value)} sx={inputStyle} type="password"/>
                        <TextField id="ref_conf_pass" label="Confirm Password" variant="filled" onChange={(event)=>setCfPassword(event.target.value)} sx={inputStyle} type="password"/>

                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Typography>Already have an account?</Typography>
                            <Typography variant="pseudoBtn" color="primary" onClick={switchLogin}>Log in</Typography>
                        </Box>
                        
                        <Button variant="action"
                            color="primary" 
                            sx={ buttonStyle }
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

function AssetDetailsModal({open, setDetailsOpen, asset, imgPath}) {
    const auth = localStorage.getItem("auth") === "true";

    const handleClose = () => setDetailsOpen(false);
    return (
        <ThemeProvider theme={theme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-assetDetails-title"
            >
                <Box sx={{...wrapperStyle, width: 1000}}>
                    <CloseIcon 
                        sx={{ ...closeIcStyle, mb: 3 }}
                        onClick={handleClose}/>
                    <Grid container spacing={4}>
                        <Grid item md={5}>
                            <img src={imgPath} width="100%" style={{border: "0.1px solid white", borderRadius: "15px"}}/>
                        </Grid>
                        <Grid item md={7}>
                            <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}>
                                <div>
                                    <Chip label={asset.tag} color="info" fontSize={15} sx={{mb: 2}}/>
                                    <Typography variant="h4" component="h1">{asset.title}</Typography>

                                    <List sx={{display: "flex" , gap: 3}}>
                                        <ListItem sx={{gap: 1}} disablePadding>
                                            <TollIcon/>
                                            <Typography>{asset.price}</Typography>
                                        </ListItem>
                                        <ListItem sx={{gap: 1}} disablePadding>
                                            <LoopIcon/>
                                            <Typography>{asset.volume}</Typography>
                                        </ListItem>
                                    </List>
                                </div>
                                
                                {auth ? 
                                    <Button variant="action"
                                        color="primary" 
                                        sx={{...buttonStyle, width: "100%" }}
                                    >
                                        Buy
                                    </Button> : 
                                    <Button disabled variant="action"
                                    color="inactive" 
                                    sx={{...buttonStyle, width: "100%"}}
                                    >
                                        You need to log in first!
                                    </Button>
                                }
                            </Box>
                        </Grid>
                    </Grid> 
                </Box>
            </Modal>
        </ThemeProvider>
    );
}

export { CfModal, LoginModal, SignupModal, AssetDetailsModal };
