import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
	const { createUser, updateUserProfile } = useContext(AuthContext)
	const [Error,setError]=useState('')

	const handleSubmit = (e) => { 
		e.preventDefault()
		const form = e.target
		const name = form.name.value;
		const userUrl = form.userUrl.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmdPassword = form.confirmdPassword.value;

		// check uppercase 

		if (!/.*?[A-Z]/.test(password)) {
			toast.error('Please enter one Uppercase in password')
			return
		}

		// check lowercase 

		if (!/.*?[a-z]/.test(password)) {
			toast.error('Please enter one lowercase in password')
			return
		}

		// check number 

		if (!/.*?[0-9]/.test(password)) {
			toast.error('Please enter one number in password')
			return
		}

		// check special caracter 

		if (!/.*?[#?!@$%^&*-]/.test(password)) {
			toast.error('Please enter one special caracter in password')
			return
		}

		// check length 

		if (!/.{8,}/.test(password)) {
			toast.error('Please enter eight caracters in password')
			return
		}

		// check password and confirmd password 

		if (password !== confirmdPassword) {
			toast.error("Your password and confirmd password doesn't mathc")
			return
		}

		// user create by email and password 

		createUser(email, password)
			.then(()=> {
				
				const profile={displayName:name,photoURL:userUrl}
				updateUserProfile(profile)
					.then(() => {
						toast.success("Profileupdat")
						setError('')
					})
				.catch(error=>{setError(error.massage)})
				form.reset()
				toast.success("Congratulation , You create a new account . Please login")
				
			})
			.catch(error => {setError(error.massage)})
		

	}
	
	return (
		<div className='p-4'>
			<div className='bg-gray-200 max-w-sm p-8 mx-auto rounded-2xl'>
				<h2 className='mb-4 text-center text-2xl font-semibold text-rose-500'>Create Your Account</h2>
				<form onSubmit={handleSubmit} className='flex flex-col justify-center'>
					<label className='text-gray-700 font-semibold'>Your Full Name </label>
					<input className='border w-full py-2 px-4 mb-4' name="name" type="text" placeholder='Enter your full name' required/>
					<label className='text-gray-700 font-semibold'>Your Photo Url</label>
					<input className='border w-full py-2 px-4 mb-4' name="userUrl" type="text" placeholder='Enter your photo url' required/>
					<label className='text-gray-700 font-semibold'>Email Address </label>
					<input className='border w-full py-2 px-4 mb-4' name="email" type="email" placeholder='Enter your email' required/>
					<label  className='text-gray-700 font-semibold' >Password </label>
					<input  className='border w-full py-2 px-4 mb-4' name="password" type="password" placeholder='Enter your password' required />
					<label className='text-gray-700 font-semibold'>Confirmd Password </label>
					<input className='border w-full py-2 px-4' name="confirmdPassword" type="password" placeholder='Again Enter your password' required /><button className='py-2 px-5 mb-2 hover:bg-gray-600 transition-all duration-500 bg-rose-500 rounded-md  text-white font-semibold mt-4' type="submit">Register</button>
				</form>
				{
					Error && <p>{Error}</p>
				}
				<p>Already have an account? <Link to="/login" className='text-rose-400'>Login</Link></p>
			</div>
		</div>
	);
};

export default Register;