import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Prices from './components/Prices';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Appointment />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
