import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
	const location = useLocation();
	const navigate=useNavigate()
	const [error, setError] = useState('')
	const [emails,setEmails]=useState('')
	const { singInWithProvider, singIn,updatePassword , setLoading} = useContext(AuthContext)

	// select location path 

	const from = location.state?.from?.pathname || '/';
	
	// google provider 

	const googleProvider = new GoogleAuthProvider();

	// github Provider 

	const githubProvider = new GithubAuthProvider();

	// sing in with email and password 

	const handleSubmit = (e) => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		singIn(email, password)
			.then(result => {
				const user = result.user
				setError('')
				if (user.uid) {
					navigate(from, {replace: true})
				}
				form.reset()
				toast.success("Login Successfull")
			})
			.catch(error => {
				const errorMassage = error.message
				setError(errorMassage)
			})
			.finally(() => {
                setLoading(false);
            })
	}

	// sign in with google 

	const logInWithGoogle = () => {
		singInWithProvider(googleProvider)
			.then(result => {
			const user = result.user
				setError('')
				toast.success("Login Successfull")
				if (user.uid) {
					navigate(from, {replace: true})
				}

			})
			.catch(() => { })
			.finally(() => {
                setLoading(false);
            })
	}

	// sign in with github 

	const logInWithGoithub = () => {
		singInWithProvider(githubProvider)
			.then(result => {
			const user = result.user
				setError('')
				toast.success("Login Successfull")
				if (user.uid) {
					navigate(from, {replace: true})
				}

			})
			.catch(() => { })
			.finally(() => {
                setLoading(false);
            })
	}

	const handleEmail = (e) => {
		const email = e.target.value;
		setEmails(email)
	}
	const handleForgetPassword = () => {
		setError("")
		toast.success("Send reset password link in your email")
		updatePassword(emails)
		setLoading(false);
	}

	return (
		<div className='p-4'>
			<div className='bg-gray-200 max-w-sm p-8 mx-auto rounded-2xl'>
				<h2 className='mb-4 text-center text-2xl font-semibold text-rose-500'>Log In to Your Account</h2>
				<form onSubmit={handleSubmit} className='flex flex-col justify-center'>
					<label  className='text-gray-700 font-semibold'>Email Address </label>
					<input onChange={handleEmail} className='border w-full py-2 px-4 mb-4' name="email" type="email" placeholder='Enter your email' required/>
					<label className='text-gray-700 font-semibold'>Password </label>
					<input className='border w-full py-2 px-4' name="password" type="password" placeholder='Enter your password' required />
					
					<Link onClick={handleForgetPassword} className='text-right mt-2 text-rose-500'>Forget Password?</Link>
					{
						error ? <p className='text-sm'>{ error}</p>:""
					}
					<button className='py-2 px-5 mb-2 bg-rose-500 rounded-md  text-white font-semibold mt-4' type="submit">Log in</button>
				</form>
				<h1 className='text-center my-2 font-bold text-2xl text-rose-500 '>OR</h1>
				<div className='flex justify-center mb-4'>
					<div className='hover:bg-rose-400 p-2 transition-all duration-500 rounded-full mr-2'>
						<FaGoogle onClick={logInWithGoogle} className='text-3xl text-blue-500 font-bold cursor-pointer'/>
					</div>
					<div className='hover:bg-rose-400 p-2 transition-all duration-500 rounded-full ml-2'>
						<FaGithub onClick={logInWithGoithub} className=' text-3xl text-gray-500 font-bold cursor-pointer ' />
					</div>
				</div>
				<p>You are new in Web Learner? <Link to="/register" className='text-rose-400'>Register</Link></p>
			</div>
			
		</div>
		
	);
};

export default Login;