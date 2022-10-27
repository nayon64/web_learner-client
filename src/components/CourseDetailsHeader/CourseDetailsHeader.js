import React from 'react';
import { FaStar,FaStarHalfAlt,FaLanguage, } from "react-icons/fa";
import { Link } from 'react-router-dom';

const CourseDetailsHeader = ({course}) => {
	const {title,about,rating,totalReviews,author,lastUpdate,language,picture,price}=course
	return (
		<div>
			<div className='max-w-7xl text-white mx-auto py-10 grid lg:grid-cols-2 gap-8 p-4'>
				<div className='my-auto order-2 lg:order-1 py-4'>
					<h1 className='text-4xl font-bold mb-3'>{title}</h1>
					<p className='mb-3'>{about.length > 150 ? <span>{ about.slice(0,150)+ "..."}</span>: about}</p>
					<div className='flex items-center mb-4' >
						<p className='text-yellow-600 font-bold text-xl'>{rating}</p>
						<span className='flex text-yellow-500 mx-2'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
						</span>
						<p className='text-gray-400'>({totalReviews})</p>
					</div>
					<div className='flex items-center'>
						<h4>Created by :</h4>
						<img className='w-9 mx-3' src={author.authorUrl} alt="" />
						<div>
							<h4>{author.name}</h4>
							<p>Insturctor</p>
						</div>
					</div>
					<div className='flex items-center mt-4' >
						<h3>Last Update : <span>{lastUpdate}</span></h3>
						<div className='flex text-xl ml-14'><FaLanguage className='text-3xl'/> <span className='ml-3'> { language}</span></div>
					</div>
					<div className='lg:hidden mt-4'>
						<h3 className='text-2xl font-semibold mb-6'>Prices : $<span>{price}</span></h3>
						<Link to={`/checkout/${course._id}`} className='bg-rose-600 py-2 px-6 text-lg font-medium rounded-lg' >Get premium access.</Link>
					</div>
				</div>
				<div className='flex order-1 lg:order-2 justify-center'>
					<img className='w-full h-full' src={picture} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CourseDetailsHeader;