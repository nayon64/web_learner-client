import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from "../../assets/img/home.svg"

const Home = () => {
	return (
		<div className='grid lg:grid-cols-2 max-w-7xl mx-auto px-4'>

			{/* header details sectioni */}

			<div className='flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left'>
				<h1 className='text-5xl leading-tight font-semibold text-gray-700'>Effective Your Learning Process With <span className='text-rose-500 font-bold'>Web Learner</span></h1>
				<h4 className='text-3xl tracking-widest my-5 font-semibold text-rose-600'>Basic to Advance</h4>
				<p className='text-lg text-gray-500'>Learn more and more and Build up your knowledge. Make your dream website , That is you want.</p>
				<div className='mt-10'>

					{/* go to course page btn  */}

					<Link to="/courses" className='py-3 px-8 rounded-md bg-rose-500 text-white font-semibold text-xl'>Go To Courses</Link>
				</div>
			</div>

			{/* header img section */}

			<div className='order-1 lg:order-2 py-8'>
				<img className='w-full h-full' src={HomeImg} alt="" />
			</div>
		</div>
	);
};

export default Home;