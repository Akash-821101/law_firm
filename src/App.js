
import './App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <div className="introWrapper">
        <h1>
          Let’s Introduce <br />
          Ourself
        </h1>
        <div className='line'></div>
        <div className="heroIntro">
          <h3>Criminal Lawyer</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <Cards/>
    </div>
  );
}

export default App;
