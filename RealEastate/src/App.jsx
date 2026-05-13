import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Process from './components/Process';
import PopularHomes from './components/PopularHomes';
import Locations from './components/Locations';
import Features from './components/Features';
import Agents from './components/Agents';
import CtaBanner from './components/CtaBanner';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative font-sans text-gray-900 bg-[#e6f3fc] overflow-x-hidden">
      <Navbar />
      <Hero />
      <SearchBar />
      
      <Process />
      
      <PopularHomes />
      
      <Locations />
      
      <Features />
      
      <Agents />
      
      <CtaBanner />
      
      <Testimonial />
      
      <Footer />
    </div>
  )
}

export default App;
