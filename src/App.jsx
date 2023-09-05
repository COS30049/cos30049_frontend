import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Txnhistory from './views/TxnHistory'

import { Container, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import theme from './custom/theme';

export default function App() {

  // this state being add for illustration use only (since no back-end work yet)
  const [logged, setLogged] = useState(false);

  return (
          <div>
            <ThemeProvider theme={theme}>
              <Router>
              <NavBar />
                <Container disableGutters className='content' maxWidth={false}
                  sx={{
                    m: '0',
                    p: '0 50px',
                  }}
                >
                  
                    <Routes>
                      <Route path='/' element={<Home />}/> 
                      <Route path='/tradings' element={<Home />} />
                      <Route path='/txnhistory' element={<Txnhistory />} />
                    </Routes>
                  
                </Container>
              </Router>
            </ThemeProvider>
          </div>
        );
}
