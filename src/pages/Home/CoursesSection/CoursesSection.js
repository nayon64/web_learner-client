import { useQuery } from '@tanstack/react-query';
import React from 'react';

const CoursesSection = () => {


	const { data: courses = [], isLoading } = useQuery({
		queryKey: ["courses"],
		queryFn: async () => {
			const res = await fetch(`https://web-learner-server-site.vercel.app/courses`)
			const data = await res.json()
			return data
		}
	})
console.log(courses)

	return (
    <div>
      <h1 className="text-4xl font-bold text-gray-600 text-center my-4 mb-6">
        Web Lerner most popular Blogs.
			</h1>
			<div>
				
			</div>
    </div>
  );
};

export default CoursesSection;