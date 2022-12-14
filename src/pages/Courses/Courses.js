import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCart from '../../components/CourseCart/CourseCart';

const Courses = () => {
	const courses = useLoaderData()
	return (
		<div className='grid md:grid-cols-4 max-w-7xl mx-auto px-4'>
			<div className='md:col-span-3'>
				<h1 className='text-center my-3 mb-5 text-4xl font-bold text-gray-700'>Web <span className='text-rose-600'>Learner</span> Popular Courses</h1>

				{/* single course cart section  */}

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 pr-4 '>
					{
						courses.map(course => 
							<CourseCart
							key={course._id}
							course={course}
							></CourseCart>
						)
				}
				</div>
			</div>

				{/* course page side navigation */}

			<div className='mx-auto'>
				<div className='sticky top-0'>
					<h1 className='text-center mt-5 mb-4 text-2xl font-semibold text-gray-800'>Choose your <span className='text-rose-600'>Course</span></h1>
					<ul>
						{
							courses.map(course => <Link key={course._id} to={`/courses/${course._id}`}><li className='bg-gray-100 order-3 text-semibold cursor-pointer p-2 mb-3 hover:bg-rose-200 hover:text-gray-700 transition-all duration-200 text-rose-500'>{course.title}</li></Link>)
						}

					</ul>
				</div>
			</div>
		</div>
	);
};

export default Courses;