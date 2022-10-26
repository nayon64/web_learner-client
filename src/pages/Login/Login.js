import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"

const Login = () => {
	return (
		<div className=''>
			<Link to="/" className='flex items-center '><img style={{ width: '50px' }} src={logo} alt="" /><h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4></Link>
			<div className='bg-gray-200 max-w-sm p-8 mx-auto rounded-2xl'>
				<h2 className='mb-4 text-center text-2xl font-semibold text-rose-500'>Log In to Your Account</h2>
				<form className='flex flex-col justify-center'>
					<label className='text-gray-700 font-semibold'>Email Address </label>
					<input className='border w-full py-2 px-4 mb-4' name="name" type="email" placeholder='Enter your email' required/>
					<label className='text-gray-700 font-semibold'>Password </label>
					<input className='border w-full py-2 px-4' name="password" type="password" placeholder='Enter your password' required />
					
					<Link className='text-right mt-2 text-rose-400'>Forget Password?</Link>
					<button className='py-2 px-5 mb-2 bg-rose-500 rounded-md  text-white font-semibold mt-4' type="submit">Log in</button>
					<p>You are new in Web Learner? <Link to="/register" className='text-rose-400'>Register</Link></p>
				</form>
			</div>
		</div>
		
	);
};

export default Login;