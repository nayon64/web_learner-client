import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from '../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
	
	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth,email,password)
	}

	const user={displayName:"korim"}
	const authInfo={user,createUser}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;