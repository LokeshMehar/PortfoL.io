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
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar/>
          <Banner/>
      </div>
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
