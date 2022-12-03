import { Menu } from './components/menu/Menu';
import { Progress } from './components/progress-bar/Progress';
import { Hero } from './components/hero/Hero';
import { Products } from './components/products/Products';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Menu />
      <Progress />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
