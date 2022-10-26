import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
	const [user, setUser] = useState({})
	
	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser)
			}
		})
		return ()=>unSuscribe()
	},[])

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth,email,password)
	}
	const singIn = (email,password) => {
		return signInWithEmailAndPassword(auth,email,password)
	}
	const singInWithProvider = (provider) => {
		return signInWithPopup(auth,provider)
	}

	const authInfo={user,createUser,singInWithProvider,singIn}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;