import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Episodes from './components/Episodes';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Episodes/>
    </div>
  );
}

export default App;
