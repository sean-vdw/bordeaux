import './App.css';
import { Route } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import BlogSection from './components/BlogSection';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Services />
      <BlogSection />
      <Cta />
    </div>
  );
}

export default App;
