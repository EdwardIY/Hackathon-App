import React, { useContext, useState,useEffect, SetStateAction } from "react";
import { auth, } from '../firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,sendPasswordResetEmail, updateEmail,updatePassword,updateProfile } from "firebase/auth";

interface Context {
    currentUser: any
    signup:any
}

const AuthContext = React.createContext<any>(null)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }: any) {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState(true);

    const value = {
        currentUser,
        signup,
        addUserName,
        login,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword,
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user: any) => {
            setCurrentUser(user)
            setLoading(false)

            
        });
        
        return unsubscribe
    },[])

    async function signup(email: any, password: any) {
        console.log('ran signup')
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    function addUserName(name: any) {
        updateProfile(currentUser, {displayName:name})    
        
    }

    function login(email:any,password:any) {
        return signInWithEmailAndPassword (auth,email,password)
     }
     
    function logout() {
        return auth.signOut()
    }
     
    function resetPassword(email:any) {
        return sendPasswordResetEmail(auth,email)
    }

    function updateUserEmail(currentUser:any,email:any):any {
        return updateEmail(currentUser,email)
    }

    function updateUserPassword(currentUser:any,email:any):any {
        return updatePassword(currentUser,email)
    }


  
    return (
        <AuthContext.Provider value={value}>
         { !loading && children}
        </AuthContext.Provider>
        )
   
}

