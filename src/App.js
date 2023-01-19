import './App.css';
import { Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

// COMPONENTS
import Hero from './components/Hero';
import Hero_alt from './components/Hero_alt';
import About from './components/About';
import Services from './components/Services';
import BlogSection from './components/BlogSection';
import Cta from './components/Cta';

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        color="12,74,110"
        innerSize={8}
        outerSize={28}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          border: '2px solid rgb(148 163 184)'
        }}
      />
      <Hero_alt/>
      <About />
      <Services />
      <BlogSection />
      <Cta />
    </div>
  );
}

export default App;
