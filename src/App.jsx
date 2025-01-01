import Deal from "./components/Deal";
import DownloadApp from "./components/DownloadApp";
import Features from "./components/Features";
import Hero from "./components/Hero";
import OurTestimonial from "./components/OurTestimonial";
import Review from "./components/Review";
import Footer from './components/shared/Footer';
import Navbar from "./components/shared/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Features />
      <Deal />
      <OurTestimonial /> 
      <Review /> 
      <DownloadApp />
      <Footer />
    </div>
  )
}
export default App;