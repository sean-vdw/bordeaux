import './App.css';
import { Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

// COMPONENTS
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServicesAlt from './components/Services_alt';
import BlogSection from './components/BlogSection';
import Cta from './components/Cta';
import Footer from './components/Footer';

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
      <Hero />
      <About />
      <ServicesAlt />
      <BlogSection />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
