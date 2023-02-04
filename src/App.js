import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Experiance from './components/experiance/Experiance';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
     <Header></Header>
     <Nav></Nav>
     <About></About>
     <Experiance></Experiance>
     <Services></Services>
     <Testimonials></Testimonials>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
