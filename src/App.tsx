import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import './index.css';
import './store.css'
import 'aos/dist/aos.css';

import Home from './Pages/Home';
import Store from './Pages/Store';
import Footer from './Componets/Footer';




function App() {
  const [mobile, setMobile] = useState(false);


  function toggleNav(val:boolean) {
    setMobile(val)
  }

  return (
    <>
    <button aria-label="menu" style={{zIndex: mobile ? '3' : '-1', opacity: mobile ? '1' : '0'}} onClick={()=> toggleNav(false)} className="closeBtn">Close</button>
    <button aria-label="menu" style={{zIndex: mobile ? '-1' : '3', opacity: mobile ? '0' : '1'}} onClick={()=> toggleNav(true)} className="openBtn">Open Menu</button>       
        <Routes>
  
          <Route path='/' element={<Home setMobile = {setMobile} mobile = {mobile} />} />
          <Route path='/store' element={<Store setMobile = {setMobile} mobile = {mobile} />} />

        </Routes>
    <Footer />
    </>
  );
}

export default App;
