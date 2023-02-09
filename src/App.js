import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Experiance from './components/experiance/Experiance';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';


function App() {
  return (
    <div>
     <Header></Header>
     <Nav></Nav>
     <About></About>
     <Experiance></Experiance>
     <Portfolio></Portfolio>
     <Testimonials></Testimonials>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
