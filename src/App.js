import './App.css';
import { Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Services />
    </div>
  );
}

export default App;
