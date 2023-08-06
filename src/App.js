import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/Carrer';
import Departments from './components/Blog';
import Doctors from './components/CarrerGui';
import Contact from './components/Contact';
import Home from './components/Home';
import Appointment from './components/Pages';
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Appointment />} />
      </Routes>
     
   
  );
}

export default App;
