import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2';


function App() {

  return (
    <div id="app" >
      <Navbar />
      <div className="bg-gray-300">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default App;
