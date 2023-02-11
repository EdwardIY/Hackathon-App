import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const emailRef = useRef<any>(null);
    const passwordRef = useRef<any>(null);
    const {login,currentUser} = useAuth();
    const [error, setError] = useState<any>(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()



    async function handleLogin(e:any) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch {
            setError('Failed to login')
        }

        setLoading(false);
    }

    function goHome() {
        navigate('/')
    }

    return (

        <section className="container">
            <form onSubmit={handleLogin} className="userForm" action="">
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}

        <div className="field">
            <label>Email:</label>
                    <input type="email" ref={emailRef} required />
                </div>
            
        <div className="field">
            <label>Password:</label>
            <input type="password"  ref={passwordRef} required/>
        </div>

        <button disabled={loading}>Log In</button> 

        <span className=""><Link to='/user/forgot-password'>Forgot Password?</Link></span> 
    </form>
            <p>Need an acount? <span> <Link to='/user/signup'> Sign Up</Link></span></p>
            <div onClick={goHome} className="backBtn">Back</div>
        </section>
    )
}