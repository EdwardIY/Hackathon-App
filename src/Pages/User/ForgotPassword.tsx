import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

export default function ForgotPassword() {
    const [message, setMessage] = useState('');
    const [error, setError] = useState<any>();
    const [loading,setLoading] = useState(false)
    const emailRef = useRef<any>();
    const {resetPassword} = useAuth()

    const navigate = useNavigate()

    async function handleForgotPassword(e:any) {
        e.preventDefault();
        try {
            setError('');
            setMessage('')
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further directions')
        }
        catch {
            setError('Failed to change password')
        }
        setLoading(false);
    }

    function goHome() {
        navigate('/')
    }

    return    <section className="container">
    <form onSubmit={handleForgotPassword} className="userForm" action="">
        <h1>Reset Password</h1>
        {error && <p className="error">{error}</p>}
        {message && <p className="error">{message}</p>}

<div className="field">
    <label>Email:</label>
            <input type="email" ref={emailRef} required />
        </div>

<button disabled={loading}>Reset Password</button> 

</form>
    <p>Need an acount? <span> <Link to='/user/signup'> Sign Up</Link></span></p>
    <div onClick={goHome} className="backBtn">Back</div>
</section>
}