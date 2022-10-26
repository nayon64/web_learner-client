import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png"
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
	const [error, setError] = useState('')
	
	const googleProvider = new GoogleAuthProvider();

	const { singInWithProvider, singIn } = useContext(AuthContext)
	
	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		singIn(email, password)
			.then(result => {
				const user = result.user
				console.log(user)
				setError('')
				form.reset()
			})
			.catch(error => {
				const errorMassage = error.message
				setError(errorMassage)
				console.log(errorMassage)
		})
	}
	const logInWithGoogle = () => {
		singInWithProvider(googleProvider)
			.then(result => {
			const user = result.user
				console.log(user)
				setError('')
			})
		.catch(()=>{})
	}

	return (
		<div className=''>
			<Link to="/" className='flex items-center '><img style={{ width: '50px' }} src={logo} alt="" /><h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4></Link>
			<div className='bg-gray-200 max-w-sm p-8 mx-auto rounded-2xl'>
				<h2 className='mb-4 text-center text-2xl font-semibold text-rose-500'>Log In to Your Account</h2>
				<form onSubmit={handleSubmit} className='flex flex-col justify-center'>
					<label className='text-gray-700 font-semibold'>Email Address </label>
					<input className='border w-full py-2 px-4 mb-4' name="email" type="email" placeholder='Enter your email' required/>
					<label className='text-gray-700 font-semibold'>Password </label>
					<input className='border w-full py-2 px-4' name="password" type="password" placeholder='Enter your password' required />
					
					<Link className='text-right mt-2 text-rose-500'>Forget Password?</Link>
					{
						error ? <p className='text-sm'>{ error}</p>:""
					}
					<button className='py-2 px-5 mb-2 bg-rose-500 rounded-md  text-white font-semibold mt-4' type="submit">Log in</button>
				</form>
				<h1 className='text-center my-2 font-bold text-2xl text-rose-500 '>OR</h1>
				<div className='flex justify-center mb-4'>
					<FaGoogle onClick={logInWithGoogle} className='mr-2 text-3xl text-blue-500 font-bold'/>
					<FaGithub className='ml-2 text-3xl text-gray-500 font-bold'/>
				</div>
				<p>You are new in Web Learner? <Link to="/register" className='text-rose-400'>Register</Link></p>
			</div>
		</div>
		
	);
};

export default Login;