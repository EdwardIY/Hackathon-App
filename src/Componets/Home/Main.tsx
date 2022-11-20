import { useEffect } from 'react';
import AOS from "aos";

export default function Main({ toggleForm }: { toggleForm: Function }) {

    useEffect(() => {
        AOS.init();
      }, [])
  
  


    return (
        <>
        <section className="presenterSection" >
                <h2 data-aos-duration="1000"  data-aos="fade-right">Meet the presenters</h2>

                <div data-aos-duration="2500" data-aos="fade-in" className="presenters">
            <div className="presenter">
                <div className="person1"></div>
                <p className="presenterName">Lauren Smith</p>
                <p className="presenterInfo">CEO and founder of PB Inc.</p>
            </div>
            <div className="presenter">
                <div className="person2"></div>
                <p className="presenterName">Nels Cohen</p>
                <p className="presenterInfo">VP of Technology at DigiCast</p>
            </div>
            <div className="presenter">
                <div className="person3"></div>
                <p className="presenterName">Myra James</p>
                <p className="presenterInfo">CTO at Laptik</p>
            </div>
                    <div style={{ position: 'relative' }} className="presenter">
                <div className="person4"></div>
                <p className="presenterName">Ashley Nicole</p>
                <p className="presenterInfo">Senior Developer at Broink</p>
                
                <div style={{position: 'absolute', bottom: '0px'}} id="events"></div>
            </div>
        </div>
        </section>
        
        <section >
        <h2 data-aos-duration="1000" data-aos="fade-right">Event schedule</h2>
        <div  data-aos="fade-in" data-aos-duration="2500" className="schedule ">
            <div className="columnBox tlBox">
                <div className="sheduleTime">9:00 AM</div>
                <div className="columText">
                    <div>Registration</div>
                    <div>Digital registration begins at 9am, and ends at 11am.</div>
                </div>
            </div>

            <div className="columnBox blBox">
                <div className="sheduleTime">12:00 PM</div>
                <div className="columText">
                    <div>Let the Games begin</div>
                    <div>24 hours of coding and inspirational presentations.</div>
                </div>
            </div>

            <div className="columnBox trBox">
                <div className="sheduleTime">11:30 AM</div>
                <div className="columText">
                    <div>Kick off and Orientation</div>
                    <div>Host Andrew Clark sets the stage for the event. Meet your team, and get pumped.</div>
                </div>
            </div>

            <div className="columnBox brBox">
                <div className="sheduleTime">12:00 PM</div>
                <div className="columText">
                    <div>Day 2 - Closing Ceremonies</div>
                    <div>Present your amazing projects, and enjoy the big show.</div>
                </div>
            </div>
        </div>
            </section>

            


    <section className="event">
        <h2 data-aos-duration="1000" data-aos="fade-right"className="">Heres how it works</h2>

        <div data-aos-duration="2500"  data-aos="fade-in" className="eventSteps ">

            <div className="eventStep">
                <div className="stepNumber">1</div>
                <div className="stepText">
                    <div>Submit your email</div>
                    <div>We'll send you instructions on how to apply to get involved.</div>

                </div>

            </div>

            <div className="eventStep">
                <div className="stepNumber">2</div>
                <div className="stepText">
                    <div>Application Review</div>
                    <div>Once our panel has reviewed and approved your application, we'll send you a formal invite.

                    </div>

                </div>

            </div>

            <div className="eventStep">
                <div className="stepNumber">3</div>
                <div style={{position: 'relative'}} className="stepText">
                    <div>Get your tickest</div>
                    <div>Get tickets for yourself, and invite friends and family to be your guests.</div>
                    <div style={{position: 'absolute', bottom: '0px'}} id='sign_up'></div>
                </div>

            </div>
        </div>
            </section>
            
            <section>
        <h2 data-aos-duration="1000" data-aos="fade-right">Ready to code the future? Click Below</h2>
        <div data-aos-duration="2500"  data-aos="fade-in" className="signUp-Container">
            <h3>Improve Your Coding Skill</h3>
            <p><span>Creativity </span>ipsum dolor sit amet consectetur adipisicing ept. Voluptatum, quas
                pariatur?
                Eveniet
                voluptatibus, cumque labore odit, omnis porro iste iusto non voluptatem, quo soluta!
                Voluptatibus praesentium magni eaque. Illo, debitis.</p>
            <p><span>Teamwork </span>ipsum dolor sit amet consectetur adipisicing ept. Voluptatum, quas pariatur?
                Eveniet
                voluptatibus, cumque labore odit, omnis porro iste iusto non voluptatem, quo soluta!
                Voluptatibus praesentium magni eaque. Illo, debitis.</p>
            <p><span> Presentation skills </span>ipsum dolor sit amet consectetur adipisicing ept. Voluptatum,
                quas pariatur?
                Eveniet
                voluptatibus, cumque labore odit, omnis porro iste iusto non voluptatem, quo soluta!
                Voluptatibus praesentium magni eaque. Illo, debitis.</p>
            <p><span>Adaptabipty </span>ipsum dolor sit amet consectetur adipisicing ept. Voluptatum, quas
                pariatur?
                Eveniet
                voluptatibus, cumque labore odit, omnis porro iste iusto non voluptatem, quo soluta!
                Voluptatibus praesentium magni eaque. Illo, debitis.</p>
            <button onClick={()=> toggleForm(true)} className="signUp-Btn">Sign Up</button>
        </div>
    </section>
        </>
      )
}