import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../../components/CourseCart/CourseCart';

const Courses = () => {
	const courses = useLoaderData()
	console.log(courses)
	return (
		<div className='grid grid-cols-4 max-w-7xl mx-auto'>
			<div className='col-span-3'>
				<h1>This is courses section...</h1>
				<div className='grid grid-cols-3 gap-5'>
					{
					courses.map(course => <CourseCart
						key={course._id}
						course={course}
					></CourseCart>)
				}
				</div>
			</div>
		</div>
	);
};

export default Courses;