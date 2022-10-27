import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCart from '../../components/BlogCart/BlogCart';

const Blogs = () => {
	const blogs = useLoaderData()
	return (
		<div className='max-w-7xl mx-auto p-4'>
			<h1 className='text-4xl font-bold text-gray-600 text-center my-4 mb-6'>Web Lerner most popular Blogs.</h1>

			{/* blogs section  */}

			<div className='grid md:grid-cols-2 gap-7'>
				{
					blogs.map(blog => <BlogCart
						key={blog._id}
						blog={blog}
					></BlogCart>)
				}
			</div>

		</div>
	);
};

export default Blogs;