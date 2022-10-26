import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [userToggle,serUserToggle]=useState(true)
	const [user, setUser] = useState({})
	
	useEffect(() => {
		const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser)
			}
			else {
				setUser({})
			}
		})
		return ()=>unSuscribe()
	},[])

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth,email,password)
	}
	const singIn = (email, password) => {
		serUserToggle(true)
		return signInWithEmailAndPassword(auth,email,password)
	}
	const singInWithProvider = (provider) => {
		serUserToggle(true)
		return signInWithPopup(auth,provider)
	}
	const logOut = () => {
		return signOut(auth)
	}

	const authInfo={user,createUser,singInWithProvider,singIn,logOut,userToggle,serUserToggle}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;