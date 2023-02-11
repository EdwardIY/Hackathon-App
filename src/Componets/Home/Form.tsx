import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../context/AuthContext'

interface FormProps {
    toggleForm: Function
    setSubmitted: Function
    submitted: boolean
    activeForm: boolean
}
export default function Form({ toggleForm, activeForm, submitted, setSubmitted }: FormProps) {
    
    const { currentUser} = useAuth();

    function handleSubmit(e:any) {
        e.preventDefault()
        setSubmitted(true);

    }

    console.log()
    return (
    <>
        <form onSubmit={(e) => handleSubmit(e)} id="signUpForm" className="signUp-PopUpContainer">
        <FontAwesomeIcon onClick={()=> toggleForm(!activeForm)} className='exitPopUp close' icon={faXmark} />
            {!submitted && (
                <>
                <div>
                    <h3>Join Now</h3>
                    <input required type="text" defaultValue={(currentUser?.email) ? currentUser.email : ''} placeholder={(currentUser?.email) ? currentUser.email : 'Submit your email'}></input>
                    <button className="submitPopUp">SUBMIT</button>
                    <div onClick={()=> toggleForm(!activeForm)} role='button' aria-label="button" className="closePopUp close">Close</div>
               </div>
                <img src={require('./../../Assets/popUp\ SignUp-min.jpg')} alt="Sign up pop up" />
                </>
            )}

            {submitted && <h1>Thank you for your interest</h1>}
          
            </form>
     </>
    )
}