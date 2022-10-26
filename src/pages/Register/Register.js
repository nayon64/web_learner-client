import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/img/logo.png";
import { FaGoogle,FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
	const {createUser}=useContext(AuthContext)

	const handleSubmit = (e) => { 
		e.preventDefault()
		const form = e.target
		const name = form.name.value;
		const userUrl = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const confirmdPassword = form.confirmdPassword.value;
		console.log(name, userUrl, email, password, confirmdPassword)

		if (!/.*?[A-Z]/.test(password)) {
			alert('Please enter one Uppercase in password')
			return
		}
		if (!/.*?[a-z]/.test(password)) {
			toast.error('Please enter one lowercase in password')
			return
		}
		if (!/.*?[0-9]/.test(password)) {
			toast.error('Please enter one number in password')
			return
		}
		if (!/.*?[#?!@$%^&*-]/.test(password)) {
			toast.error('Please enter one special caracter in password')
			return
		}
		if (!/.{8,}/.test(password)) {
			toast.error('Please enter eight caracters in password')
			return
		}
		if (password !== confirmdPassword) {
			toast.error("Your password and confirmd password doesn't mathc")
			return
		}


		createUser(email, password)
			.then(resutl => {
				const user = resutl.user
				form.reset()
				toast.success("Congratulation , You create a new account . Please login")
				console.log(user)
			})
			.catch(error => console.error("error", error))
		

	}
	
	return (
		<div className=''>
			<Link to="/" className='flex items-center '><img style={{ width: '50px' }} src={logo} alt="" /><h4 className='text-3xl font-bold text-gray-700 ml-2'>Web <span className='text-rose-500'>Learner</span></h4></Link>
			<div className='bg-gray-200 max-w-sm p-8 mx-auto rounded-2xl'>
				<h2 className='mb-4 text-center text-2xl font-semibold text-rose-500'>Create Your Account</h2>
				<form onSubmit={handleSubmit} className='flex flex-col justify-center'>
					<label className='text-gray-700 font-semibold'>Your Name </label>
					<input className='border w-full py-2 px-4 mb-4' name="name" type="text" placeholder='Enter your name' required/>
					<label className='text-gray-700 font-semibold'>Your Photo Url</label>
					<input className='border w-full py-2 px-4 mb-4' name="userUrl" type="text" placeholder='Enter your photo url' />
					<label className='text-gray-700 font-semibold'>Email Address </label>
					<input className='border w-full py-2 px-4 mb-4' name="email" type="email" placeholder='Enter your email' required/>
					<label  className='text-gray-700 font-semibold' >Password </label>
					<input  className='border w-full py-2 px-4 mb-4' name="password" type="password" placeholder='Enter your password' required />
					<label className='text-gray-700 font-semibold'>Confirmd Password </label>
					<input className='border w-full py-2 px-4' name="confirmdPassword" type="password" placeholder='Again Enter your password' required /><button className='py-2 px-5 mb-2 bg-rose-500 rounded-md  text-white font-semibold mt-4' type="submit">Register</button>
				</form>
				<h1 className='text-center my-2 font-bold text-2xl text-rose-500 '>OR</h1>
				<div className='flex justify-center mb-4'>
					<Link className='mr-2 text-3xl text-blue-500 font-bold'><FaGoogle/></Link>
					<Link className='ml-2 text-3xl text-gray-500 font-bold'><FaGithub/></Link>
				</div>
				<p>Already have an account? <Link to="/login" className='text-rose-400'>Login</Link></p>
			</div>
		</div>
	);
};

export default Register;