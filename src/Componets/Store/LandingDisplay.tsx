import AOS from "aos";
import {useEffect} from 'react'


export default function LandingDisplay() {
    
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
    }, [])
    
    return <section className="landingpageContainer">
            <h1 data-aos-delay="1000" data-aos="fade-in">Shop CpHR</h1>
            <p data-aos-duration='1000' data-aos="fade-up">Home of premium and high quailty merchandise to express your love for CpHr</p>
        </section>
}