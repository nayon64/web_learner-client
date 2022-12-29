import React from 'react';

const BlogCard = ({blog}) => {
	return (
    <div className='border rounded-md shadow-lg p-5'>
      <div>
        <img className='w-full' src={blog?.picture} alt="" />
			</div>
			<div className='mt-4'>
				<h3 className='font-semibold text-gray-700'>{blog?.title}</h3>
				<p className='text-sm mt-3 text-gray-500'>{blog?.details.slice(0,120)}...</p>
			</div>
    </div>
  );
};

export default BlogCard;