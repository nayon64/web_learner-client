import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CourseCart from '../../../components/CourseCart/CourseCart';
import Loader from '../../../components/Loader/Loader';

const CoursesSection = () => {


	const { data: courses = [], isLoading } = useQuery({
		queryKey: ["courses"],
		queryFn: async () => {
			const res = await fetch(`https://web-learner-server-site.vercel.app/courses`)
			const data = await res.json()
			return data.slice(0,3)
		}
	})
	console.log(courses)
	if (isLoading) {
		return <Loader></Loader>
	}

	return (
    <div className='max-w-6xl mx-auto'>
      <h1 className="text-4xl font-bold text-gray-600 text-center my-4 mb-6">
        Our Courses
			</h1>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:py-0'>
				{
					courses.map((course)=><CourseCart key={course._id} course={course}></CourseCart>)
				}

			</div>
    </div>
  );
};

export default CoursesSection;