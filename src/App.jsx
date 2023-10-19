import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Txnhistory from './views/TxnHistory'
import Profile from './components/Profile';
import { Container, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom';
import theme from './custom/theme';


export default function App() {

  // this state being add for illustration use only (since no back-end work yet)
  const [logged, setLogged] = useState(false);
  const [userInformation, setUserInfo] = useState({username: "", token:""});

  return (
          <div>
            <ThemeProvider theme={theme}>
              <Router>

              <NavBar />
                <Container disableGutters className='content' maxWidth={false}
                  sx={{
                    m: '0',
                    p: '0 50px',

                    [theme.breakpoints.down("md")] : {
                      p: '0 25px',
                    }
                  }}
                >
                  
                    <Routes>
                      <Route path='/' element={<Home />}/> 
                      <Route path='/tradings' element={<Home />} />
                      <Route path='/txnhistory' element={<Txnhistory />} />
                      <Route path='/profile' element={<Profile />}/>
                    </Routes>
                  
                </Container>
              </Router>
            </ThemeProvider>
          </div>
        );
}
