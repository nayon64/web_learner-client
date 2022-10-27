import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
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

	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth,email,password)
	}
	const singIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password)
	}
	const singInWithProvider = (provider) => {
		setLoading(true)
		return signInWithPopup(auth,provider)
	}
	const logOut = () => {
		setLoading(true)
		return signOut(auth)
	}
	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile);
	}

	const authInfo={user,createUser,singInWithProvider,singIn,logOut,loading, setLoading,updateUserProfile}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;