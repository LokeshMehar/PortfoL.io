import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Navbar,
  StarsCanvas,
  Tech,
  Works
} from './components';
import Banner from './components/Banner';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 app">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Banner/>
        </div>
        <About/>
        <Experience/>
        <Tech />
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
