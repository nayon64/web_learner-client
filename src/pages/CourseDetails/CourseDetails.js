import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar,FaStarHalfAlt,FaLanguage } from "react-icons/fa";

const CourseDetails = () => {
	const course = useLoaderData()
	const {title,about,rating,totalReviews,author,lastUpdate,language,picture}=course
	return (
		<div className='bg-gray-800 '>
			<div className='max-w-7xl text-white mx-auto py-10 grid grid-cols-2 gap-8'>
				<div className='my-auto py-4'>
					<h1 className='text-4xl font-bold mb-3'>{title}</h1>
					<p className='mb-3'>{about}</p>
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
				</div>
				<div className='flex justify-center'>
					<img className='max-w-lg h-full' src={picture} alt="" />
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;