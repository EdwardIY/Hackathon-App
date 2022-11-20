import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";



interface HeaderProps {
  mobile: boolean
  setMobile:Function
}


export default function Header({ mobile, setMobile }: HeaderProps) {


  function handleAnchorLink(location:string) {
    setMobile(!mobile)
    window.location.replace(location)
}

  
  
    useEffect(() => {
      AOS.init({
        duration : 2000
      });
    }, [])

 
    return (

        <header  data-aos="fade-in">
        <nav style={{top: mobile ? '0vh': '-100vh'}}>
                <ul>
            <li className="logo"> <Link to="/">CpHR</Link> </li>
                  <li onClick={() =>  handleAnchorLink("/#presenters")}>Presenters</li>
                  <li onClick={() =>  handleAnchorLink("/#events")}>Events</li>
                  <li onClick={() =>  handleAnchorLink("/#sign_up")}>Sign up</li>
                  <li onClick={() =>  handleAnchorLink("/#comments")}>Comments</li>
                  <li  onClick={()=> setMobile(false)} ><Link to='/store'>Store<sup style={{fontSize:'15px',color:'#9800fd'}}>(NEW!)</sup></Link></li>  
                </ul>
        </nav>
        </header>
    )
}