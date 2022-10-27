import React, { useContext, } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Navbar from '../Navbar/Navbar';

const Header = () => {
	
	const { user ,logOut, userToggle} = useContext(AuthContext)
	console.log(user)
	
	return (
		<>
		
			<div className={`bg-gray-600 z-50 p-4 rounded-lg text-white absolute right-5 ${userToggle? "-mt-96":"mt-24 "} ${user && user.uid? "block" :"hidden"}`}>
				<h3 className='text-lg mb-3'>{user.displayName?user.displayName:"user"}</h3>
				<button onClick={logOut} className='hover:bg-rose-600 px-2 border-2 rounded-md'>Log out</button>
			</div>
			<Navbar></Navbar>
		</>
	);
};

export default Header;