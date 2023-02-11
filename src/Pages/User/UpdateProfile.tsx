import { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import {Link, useNavigate} from 'react-router-dom'

export default function UpdateProfile() {
    const usernameRef = useRef<any>(null)
    const emailRef = useRef<any>(null)
    const passwordRef = useRef<any>(null)
    const passwordConfirmRef = useRef<any>(null)
    const { currentUser, updateUserEmail, updateUserPassword,addUserName } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()
    
    async function handleUpdate(e: any) {

        e.preventDefault();
        // if (emailRef.current.value !== currentUser.email && passwordRef.current.value && usernameRef.current.value !== currentUser.displayName ) {
        //     updateUserEmail(currentUser, emailRef.current.value)
        //         .then(() => updateUserPassword(currentUser, passwordRef.current.value)
        //             .then(()=> addUserName(currentUser,usernameRef.current.value) )
        //                 .then(() => navigate('/user/profile')))
        // }
        // else if (passwordRef.current.value) {
        //     updateUserPassword(currentUser, passwordRef.current.value).then(()=> navigate('/user/profile'))
        // }
        // else if (emailRef.current.value !== currentUser.email) {
            // updateUserEmail(currentUser, emailRef.current.value).then(()=> navigate('/user/profile') )
        // }
        updateUserEmail(currentUser, emailRef.current.value)
            .then(() => addUserName(usernameRef.current.value ?? null))
            .then(() => {
                if (passwordRef.current.value) {
                    return updateUserPassword(currentUser, passwordRef.current.value)
                }   else return setTimeout(()=> navigate('/') ,2000)
            }).then(()=> setTimeout(()=> navigate('/') ,2000) )
      
        // updateUserEmail(currentUser, emailRef.current.value)
        //     .then(() => usernameRef.current.value && addUserName(usernameRef.current.value))
        //     .then(() => passwordRef.current.value && updateUserPassword(currentUser, passwordRef.current.value))
        //     .then(() => navigate('/user/profile'))
        //     .catch((x: any) => {
        //         setError('Failed to update');
        //         console.log(x)
        //     })
}
   

        function handleCancel() {
            navigate('/user/profile')
        }

        return (

            <section className="container">
                <form onSubmit={handleUpdate} className="userForm" action="">
                    <h1>Update Profile</h1>
                    {error && <p className="error">{error}</p>}

                    <div className="field">
                        <label>Username:</label>
                        <input type="text" ref={usernameRef} defaultValue={currentUser.displayName ?? ''} placeholder={currentUser.displayName ?? 'Add username'} />
                    </div>

                    <div className="field">
                        <label>Email:</label>
                        <input type="email" ref={emailRef} required defaultValue={currentUser?.email} placeholder={currentUser?.email} />
                    </div>
            
                    <div className="field">
                        <label>Password:</label>
                        <input type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                    </div>
        
                    <div className="field">
                        <label>Password confirm:</label>
                        <input type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                    </div>

                    <button disabled={loading}>Update</button>

                </form>
                <p>Need an account? <span><Link to='/user/signup' >Sign Up</Link></span></p>
                <div onClick={handleCancel} className="backBtn">Cancel</div>
            </section>
        )
    
}