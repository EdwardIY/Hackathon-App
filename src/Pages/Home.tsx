import { useState } from "react";
import Comments from "../Componets/Home/Comments";
import Form from "../Componets/Home/Form";
import Header from "../Componets/Home/Header";
import LandingDisplay from "../Componets/Home/LandingDisplay";
import Main from "../Componets/Home/Main";
import Video from "../Componets/Home/Video";

interface HomeProps {
    mobile: boolean
    setMobile: Function
}
export default function Home({mobile,setMobile}:HomeProps) {
    const [activeForm, setActiveForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);




    return <>
        <Header setMobile = {setMobile} mobile={mobile} />
        <LandingDisplay />
            <Main toggleForm={setActiveForm} />
            
            {activeForm && <div className="overlay"></div> }
            {activeForm && <Form submitted={submitted} setSubmitted={setSubmitted} toggleForm={setActiveForm} activeForm = {activeForm} />}
            
            <Video />
            <Comments />
        </>
    
}