import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home/Home';
import { Stack } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p className='App-link'>
    //       Init Ansel's Portofolio
    //     </p>
    //     {/* <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Init Ansel's Portofolio
    //     </a> */}
    //   </header>
    // </div>
    <Stack sx={{
      backgroundColor: "black",
    }}>
      <Home/>
    </Stack>
    
  );
}

export default App;
