import React, { useContext, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
	const [isLight, setIsLight] = useState(true)
	const { user ,logOut, userToggle,serUserToggle} = useContext(AuthContext)
	console.log(user)
	
	return (
		<div className='flex items-center justify-between max-w-7xl mx-auto py-3 px-4'>
			<Link to="/" className='flex items-center'><img style={{width:'50px'}} src={logo} alt="" /><h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4></Link>
			
			<div className='flex items-center'>
				<div className='w-96 text-2xl font-semibold flex items-center justify-between'>
					<Link to="/home">Home</Link>
					<Link to="/courses">Courses</Link>
					<Link to="/home">FAQ</Link>
					<Link to="/blogs">Blogs</Link>
				</div>
				<div onClick={()=>setIsLight(!isLight)} className='text-xl mx-5 ' >
					{
					isLight? <div className='bg-gray-200  rounded-xl w-16 h-10 flex items-center justify-center cursor-pointer' >Light</div>:<div className='bg-gray-800 rounded-xl cursor-pointer w-16 h-10 flex items-center justify-center text-white'>Dark</div>
				}
				</div>
				{
					user && user.uid ?
						<span onClick={()=>serUserToggle(!userToggle)} className='cursor-pointer' title={user.displayName? user.displayName:"No Name"}>
							{
								user?.photoURL? <img className='w-10 rounded-full' src={user?.photoURL} alt="" />:<FaUserAlt className='text-2xl'/>
							}
						</span>
						:
						<>
							<Link to="/login" className='py-2 px-3 bg-gray-700 text-white rounded-lg'>Log In</Link>
							<Link className='py-2 px-3 bg-gray-700 text-white rounded-lg'>Register</Link>
						</>
				}
				<div className={`bg-gray-600 z-50 p-4 rounded-lg text-white absolute right-5 ${userToggle? "-mt-96":"mt-40 "} ${user && user.uid? "block" :"hidden"}`}>
					<h3 className='text-lg mb-3'>{user.displayName?user.displayName:"user"}</h3>
					<button onClick={logOut} className='hover:bg-rose-600 px-2 border-2 rounded-md'>Log out</button>
				</div>
			</div>
			
		</div>
	);
};

export default Header;