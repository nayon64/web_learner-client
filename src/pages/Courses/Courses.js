import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../../components/CourseCart/CourseCart';

const Courses = () => {
	const courses = useLoaderData()
	console.log(courses)
	return (
		<div className='grid grid-cols-4 max-w-7xl mx-auto gap-5'>
			<div className='col-span-3'>
				<h1 className='text-center my-3 mb-5 text-4xl font-bold text-gray-700'>Web <span className='text-rose-600'>Learner</span> Popular Courses</h1>
				<div className='grid grid-cols-3 gap-5'>
					{
					courses.map(course => <CourseCart
						key={course._id}
						course={course}
					></CourseCart>)
				}
				</div>
			</div>
			<div>
				<div className='sticky top-0'>
					<h1 className='text-center mt-5 mb-4 text-2xl font-semibold text-gray-800'>Choose your <span className='text-rose-600'>Course</span></h1>
					<ul>
						{
							courses.map(course => <li className='bg-gray-100 text-semibold cursor-pointer p-2 mb-3 hover:bg-rose-200 hover:text-gray-700 transition-all duration-200 text-rose-500'>{course.title}</li>)
						}

					</ul>
				</div>
			</div>
		</div>
	);
};

export default Courses;