import './App.css';
import { Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
    </div>
  );
}

export default App;
