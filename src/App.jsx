import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home';

import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PopUp from './components/PopUp';
import Products from './components/Products';
import Profile from './components/Profile';

export default function App() {
  // this state being add for illustration use only (since no back-end work yet)
  const [logged, setLogged] = useState(false);

  return (
          <div>
            <ThemeProvider theme={theme}>
              <NavBar />
              <Router>
                <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='/login' element={<PopUp />}/>
                  <Route path='/profile' element={<Profile />}/>
                </Routes>
              </Router>
              <div>
              <Products/>
              </div>
            </ThemeProvider>
          </div>
        );
}

const theme = createTheme({
  components: {
  }
})


