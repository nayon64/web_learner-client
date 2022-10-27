import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivetRoutes = ({ children }) => {
	const { user,loading} = useContext(AuthContext)
	const location =useLocation()
	console.log(user)
	if (loading) {
		return  <p className='text-center'>Loadding...</p>
	}
	if (user && user.uid) {
		return children
	}
	return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRoutes;