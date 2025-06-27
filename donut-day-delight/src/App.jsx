import Hero from './components/Hero';
import About from './components/About';
import Types from './components/Types';
import Celebrate from './components/Celebrate';
import FunFacts from './components/FunFacts';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <div className="main-bg">
      <Hero />
      <main className="main-content">
        <About />
        <Types />
        <Celebrate />
        <FunFacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;