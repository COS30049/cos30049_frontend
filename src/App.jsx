import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';



// this one being add for illustration use within
// const [logged, setLogged] = useState(false);

// const router = createBrowserRouter([
//   {
//     path: "/",
//   }
// ])

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <NavBar />
          {/* <RouterProvider /> */}
        </ThemeProvider>
      </div>
    );
  }
}

const theme = createTheme({
  components: {

  }
})

export default App;
