import React from 'react';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";

const CourseCart = ({ course }) => {
	const { picture, title,author,rating,price,totalReviews } = course
	console.log(course)
	return (
		<div className='border cursor-pointer'>
			<div className='h-44 w-full'>
				<img className='h-44 w-full' src={picture} alt="" />
			</div>
			<div className='p-2'>
				<h1 className='text-xl font-bold text-gray-700'>{title}</h1>
				<p className='text-base text-gray-600'>{author.name}</p>
				<div className='flex items-center'>
					<p className='text-yellow-600 font-bold text-xl'>{rating}</p>
					<span className='flex text-yellow-500 mx-2'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
					</span>
					<p className='text-gray-400'>({totalReviews })</p>
				</div>
				<h3 className='text-xl font-semibold text-gray-700'>Prices : ${price}</h3>
			</div>
		</div>
	);
};

export default CourseCart;