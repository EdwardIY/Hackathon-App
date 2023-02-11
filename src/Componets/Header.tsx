import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';



export default function Header({ mobile, activeCart, setActiveCart }: any) {
    const location = useLocation();
    return (
        <>
        <header className="fade-In">
        <nav style={{top: mobile ? '0vh': '-100vh'}}>
                <ul>
                        <li className="logo"> <Link to="/">CpHR</Link> </li>
                        {location.pathname === '/store' && (
                            <>
                                <li><a href="#pickGender">Mens</a> </li>
                                <li><a href="#pickGender">Womens</a> </li>
                                <li><a href="#prem">Premium</a></li>
                                <li onClick={()=> setActiveCart(!activeCart)}>Cart<sup></sup></li>
                            </>
                        )}

                        {location.pathname === '/' && (
                            <>
                                <li><Link to="#event">Events</Link> </li>
                                <li><Link to="#form">Sign Up</Link> </li>
                                <li><Link to="#presenters">Hosts</Link></li>
                                <li><Link to='/store'>Store<sup style={{fontSize:'15px',color:'#9800fd'}}>(NEW!)</sup></Link></li>
                            </>
                        )}
                        

                </ul>
        </nav>
        </header>
        </>
    )
}