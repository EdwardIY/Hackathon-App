import {useState} from 'react'
import { Routes, Route } from "react-router-dom";
import './index.css';
import './store.css';
import './user.css'
import 'aos/dist/aos.css';

import { AuthProvider } from './context/AuthContext';
import Home from './Pages/Home';
import Store from './Pages/Store';
import SignUp from './Pages/User/Signup';
import Login from './Pages/User/Login';
import Dashboard from './Pages/User/Dashboard';
import Footer from './Componets/Footer';
import ForgotPassword from './Pages/User/ForgotPassword';
import UpdateProfile from './Pages/User/UpdateProfile';




function App() {
  const [mobile, setMobile] = useState(false);


  function toggleNav(val:boolean) {
    setMobile(val)
  }

  return (
    <>
      <AuthProvider>
          <button aria-label="menu" style={{zIndex: mobile ? '3' : '-1', opacity: mobile ? '1' : '0'}} onClick={()=> toggleNav(false)} className="closeBtn">Close</button>
          <button aria-label="menu" style={{zIndex: mobile ? '-1' : '3', opacity: mobile ? '0' : '1'}} onClick={()=> toggleNav(true)} className="openBtn">Open Menu</button>       
              <Routes>
        
                <Route path='/' element={<Home setMobile = {setMobile} mobile = {mobile} />} />
                <Route path='store' element={<Store setMobile={setMobile} mobile={mobile} />} />
                <Route path='user/login' element={<Login />} />
                <Route path='user/signup' element={<SignUp />} />
                <Route path='user/profile' element={<Dashboard />} />
                <Route path='user/forgot-password' element={<ForgotPassword />} />
                <Route path='user/update' element={<UpdateProfile />} />


              </Routes>
              <Footer />
        </AuthProvider>
    </>
  );
}

export default App;
