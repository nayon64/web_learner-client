import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Checkout = () => {
	const course = useLoaderData()
	console.log(course)
	const { title, price } = course
	const discoutnPrice = parseInt(price * .10);
	const totalPrice = price - discoutnPrice;
	const handleEnroll = () => {
		toast.success('Congratulaion! Your are successfuly enroll this course')
	}
	return (
		<div className='flex px-3'>
			<div className='border-2 mx-auto p-4 text-center rounded-lg'>
				<h1 className=' font-bold text-rose-500 text-2xl'>CheckOut</h1>
				<h2 className='text-xl font-bold text-gray-700'>Course : <span className='text-md text-gray-500 font-semibold'>{title}</span></h2>

				<div className='max-w-xs mx-auto px-4 my-3 text-gray-600'>
					<h2 className='text-xl text-gray-800 font-bold text-left'>Summary</h2>
					<p className='flex justify-between'>Original price : <span> ${price}</span></p>
					<p className='flex justify-between'>Discounts : <span> -${discoutnPrice}</span></p>
					<div className='border bg-gray-600'></div>
					<p className='flex justify-between'>Total : <span> ${totalPrice}</span></p>
					</div>
				<button onClick={handleEnroll} className='p-2 bg-rose-500 rounded text-white mt-3'>Enroll Now</button>
			</div>

		</div>
	);
};

export default Checkout;