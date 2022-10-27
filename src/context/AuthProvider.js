import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser)
			}
			else {
				setUser({})
			}
			setLoading(false)
		})
		return ()=>unSuscribe()
	},[])


	// create user by email and password 

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth,email,password)
	}

	// Log In by email and password 

	const singIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password)
	}

	// Log in by provider 

	const singInWithProvider = (provider) => {
		setLoading(true)
		return signInWithPopup(auth,provider)
	}

	// user Log Out 

	const logOut = () => {
		setLoading(true)
		return signOut(auth)
	}

	// updata user name and user image 

	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	}

	// update password with email
	
	const updatePassword = (email) => {
		return sendPasswordResetEmail(auth,email)
	}


	// verify email address 
	const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

	const authInfo={user,createUser,singInWithProvider,singIn,logOut,loading, setLoading,updateUserProfile,verifyEmail,updatePassword }
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;