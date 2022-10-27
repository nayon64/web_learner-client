import React from 'react';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseCart = ({ course }) => {
	const { picture, title,author,rating,price,totalReviews } = course
	return (
		<div className='border cursor-pointer max-w-sm mx-auto w-full'>
			<Link to={`/courses/${course._id}`}>
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
			</Link>
		</div>
	);
};

export default CourseCart;