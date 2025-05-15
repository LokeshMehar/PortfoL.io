/* eslint-disable no-unused-vars */
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  StarsCanvas,
  // Tech,
  Works
} from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Preloader from './components/Pre';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
    <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar/>
          <Home/>
      
        <About/>
        <Experience/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div> 
        </div>
       
    </BrowserRouter>
  );
}

export default App;
