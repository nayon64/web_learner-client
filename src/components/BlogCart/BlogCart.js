import React from 'react';

const BlogCart = ({blog}) => {
	return (
		<div className='border-2 rounded-3xl overflow-hidden'>

			{/* blog cart img  */}

			<div className='w-full'>
				{
					blog.picture && 
					<img className='w-full' src={blog.picture} alt="" />
				}
			</div>

			{/* blog cart body  */}

			<div className='p-4'>
				<h1 className='text-2xl font-semibold mb-4 text-gray-700'>{blog.title}</h1>
				<p className='text-gray-500'>{blog.details}</p>
			</div>
		</div>
	);
};

export default BlogCart;