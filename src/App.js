import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Episodes from './components/Episodes';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Rating from './components/Rating';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Episodes/>
      <Hero/>
      <Subscribe/>
      <Rating/>
      <Footer/>
    </div>
  );
}

export default App;
