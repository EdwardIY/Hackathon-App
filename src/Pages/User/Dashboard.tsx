import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import {Link, useNavigate} from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();

    const navigate = useNavigate()

console.log(currentUser)


    function handleUpdateRequest() {
        navigate('/user/update')
    }
   
    
    async function handleLogOut() {
        setError('');
        try {
            await logout();
            navigate('/user/login')
        } catch {
            setError('Falied to log out')
        }
    }

    function goHome() {
        navigate('/')
    }
    console.log(currentUser)
    console.log(currentUser.displayName)

    return (
        <section className="container">
            <form onSubmit={handleUpdateRequest} className="userForm" action="">
                <h1>Profile</h1>
                {error && <p className="error">{error}</p>}

                {
                    currentUser &&
                    <div className="profile">
                    <p>Username: <em>{currentUser.displayName ?? ''}</em></p>
                    </div>
                }
                
                <div className="profile">
                    <p>Email: <em>{currentUser.email}</em></p>
                </div>
                <button>Update Profile</button>
            </form>
            <p onClick={handleLogOut}><span>Log Out</span></p>
            <div onClick={goHome} className="backBtn">Back</div>
    </section>
    )
}