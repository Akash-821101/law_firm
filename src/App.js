
import './App.css';
import Accordian from './components/Accordian/Accordian';
import BusinessCard from './components/BusinessCard/BusinessCard';
import Cards from './components/Cards';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter.jsx/Newsletter';
import TeamMember from './components/TeamMember';

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
      <BusinessCard/>
      <Accordian/>
      <TeamMember/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
