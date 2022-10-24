import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"

const Header = () => {
	const [isLight, setIsLight]=useState(true)
	return (
		<div className='flex items-center justify-between max-w-7xl mx-auto py-3'>
			<Link className='flex items-center'><img style={{width:'50px'}} src={logo} alt="" /><h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4></Link>
			
			<div className='flex items-center'>
				<div className='w-96 text-2xl font-semibold flex items-center justify-between'>
					<Link >Home</Link>
					<Link >Courses</Link>
					<Link >FAQ</Link>
					<Link >Blog</Link>
				</div>
				<div onClick={()=>setIsLight(!isLight)} className='text-xl ml-8'>
					{
					isLight? <div className='bg-gray-200  rounded-xl w-16 h-10 flex items-center justify-center cursor-pointer' >Light</div>:<div className='bg-gray-800 rounded-xl cursor-pointer w-16 h-10 flex items-center justify-center text-white'>Dark</div>
				}
				</div>
			</div>
			
		</div>
	);
};

export default Header;