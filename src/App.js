import './App.css';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Navbar/Navbar';
import {  Route, Routes } from 'react-router-dom'; 
import Projects from './Components/Projects/Projects'
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
<>
<Navbar />
     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/project' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
</>
  );
}

export default App;
