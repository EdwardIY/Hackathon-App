import { Link } from 'react-router-dom';
import {useEffect} from 'react'
import AOS from "aos";


interface Headerprops {
        mobile: boolean,
        setMobile: Function
        activeCart: boolean,
        setActiveCart:Function
        cart:any[]
}

export default function Header({ mobile, setMobile, activeCart, setActiveCart, cart }: Headerprops) {
        
        function handleAnchorLink(location:string) {
                setMobile(!mobile)
                window.location.replace(location)
        }

        useEffect(() => {
                AOS.init({
                  duration : 2000
                });
        }, [])
        
    return <header data-aos="fade-in">
            <nav style={{top: mobile ? '0vh': '-100vh'}}>
                    <ul>
                            <li className="logo" onClick={() => setMobile(false)}>  <Link to="/">CpHR</Link> </li>
                                    <li onClick={() => handleAnchorLink('#selection')}>Mens</li>
                                    <li onClick={() => handleAnchorLink("#selection")}>Womens</li>
                                    <li onClick={() => handleAnchorLink("#premiums")}>Premium</li>
                            <li onClick={() => setActiveCart(!activeCart) & setMobile(false)}>Cart<sup>{cart.length ? cart.length : '' }</sup></li>
                    </ul>
            </nav>
        </header>
}

