import AOS from 'aos';
import {useEffect} from 'react'

export default function LandingDisplay() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="landingImg" id="landingImg">
        <div className="lText">
            <h1 data-aos-duration='2000' data-aos-delay="1000" data-aos="fade-in">Cipher</h1>
            <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" >HACKATHON</p>
            <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" > Coding today for a better tomarow</p>
            <p data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100"> How we use technology each day is what defines history. This summer, for just 24 hours, coders
                and
                designers of the world unite to reimagine the future.</p>
            </div>
            
            <div style={{position: 'absolute', bottom: '0px'}} id='presenters'></div>
    </div>
    )
}