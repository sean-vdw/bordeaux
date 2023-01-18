import './App.css';
import { Route } from 'react-router-dom';

// COMPONENTS
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BlogSection from './components/BlogSection';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <Hero/>
      <About />
      <Services />
      <BlogSection />
      <Cta />
    </div>
  );
}

export default App;
