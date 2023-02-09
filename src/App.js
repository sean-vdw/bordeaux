import './App.css';
import { Route } from 'react-router-dom';
import AnimatedCursor from 'react-animated-cursor';

// COMPONENTS
import Hero from './components/Hero';
import About from './components/About';
import ServicesAlt from './components/Services_alt';
import BlogSection from './components/BlogSection';
import Cta from './components/Cta';
import Footer from './components/Footer';
import Contact from './components/Contact';

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
      <Route exact path='/' component={Hero} />
      <Route exact path='/' component={About} />
      <Route exact path='/' component={ServicesAlt} />
      <Route exact path='/' component={BlogSection} />
      <Route exact path='/' component={Cta} />
      <Route path='/contact' component={Contact} />

      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;
