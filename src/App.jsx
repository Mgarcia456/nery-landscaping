
import './App.css';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  

  return (
    <div className='webpage-div'>
      <Banner/>
      <About/>
      <Services/>
      <Gallery/>
      <Footer/>
    </div>
    
  );
}

export default App;
