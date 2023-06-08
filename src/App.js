import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Features from './pages/Features';
import aboutImage from './images/about.png';
import downloadImage from './images/download.png';
import Praesentation from './pages/Presentation';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Features />
      <About image={aboutImage} title="Comes With All You Need For Daily Life" btnText="Get The App" />
      <Praesentation />
      <About image={downloadImage} title="Download & Get the App Now!" btnText="Download" />
      <Contact />
    </>
  );
}

export default App;
