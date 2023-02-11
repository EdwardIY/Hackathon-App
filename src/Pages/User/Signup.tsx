import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import {Link, useNavigate} from 'react-router-dom'
export default function Signup() {
    const chars = '1234567890abcdefghijklmnopqrstuvwxyz'
    const userNameRef = useRef<any>(null)
    const emailRef = useRef<any>(null)
    const passwordRef = useRef<any>(null)
    const passwordConfirmRef = useRef<any>(null)
    const { signup,currentUser,addUserName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    
    async function handleSubmit(e: any) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        // if ( userNameRef.current.value.length > 10 || userNameRef.current.value.length < 3) {
        //     return setError('Username length must be under 10 characters and at least 3 characters')
        // }

        // if ( chars.slice(0,10).includes(userNameRef.current.value[0])) {
        //     return  setError('First character cannot be number')

        // }
        // for (let i = 0; i < userNameRef.current.value.length; i++){
        //     if (!chars.includes(userNameRef.current.value[i].toLowerCase()))
        //     {
        //         return  setError('Username must only contain alphanumeric characters')
        //     }
        // }
        
        try {
            setError('');
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            navigate('/user/login')
            // await addUserName({ displayName: userNameRef.current.value })
        } catch {
            setError('Failed to create account')
        }


    }

    function goHome() {
        navigate('/')
    }

    return (

        <section className="container">
            <form onSubmit={handleSubmit} className="userForm" action="">
                <h1>Sign Up</h1>
                {error && <p className="error">{error}</p>}

        {/* <div className="field">
            <label>Username:</label>
                    <input type="text" ref={userNameRef} required />
                </div> */}
                
        <div className="field">
            <label>Email:</label>
                    <input type="email" ref={emailRef} required />
        </div>
            
        <div className="field">
            <label>Password:</label>
            <input type="password"  ref={passwordRef} required/>
        </div>
        
        <div className="field">
            <label>Password confirm:</label>
            <input type="password"  ref={passwordConfirmRef} required/>
        </div>

        <button disabled={loading}>Sign Up</button> 

    </form>
            <p>Already have an acount? <span><Link to='/user/login' >Log In</Link></span></p>
            <div onClick={goHome} className="backBtn">Back</div>
        </section>
        

    )
}