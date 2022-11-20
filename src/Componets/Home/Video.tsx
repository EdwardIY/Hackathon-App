import AOS from "aos";
import { useEffect } from 'react';
export default function Video() {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
    return (
        <section style={{position: 'relative'}} className="video">
        <h2  data-aos="fade-right" className="bottom-In">First Hackathon? Watch the video below</h2>
        <iframe  data-aos-duration='2000' data-aos="fade-in" title="Youtube hackathon starter video" loading="lazy" className="fade-In" allowFullScreen src="https://www.youtube.com/embed/uRpP7_nosuU"
          frameBorder="0"></iframe>
        <div style={{position: 'absolute', bottom: '0px'}} id='comments'></div>
    </section>
    )
}