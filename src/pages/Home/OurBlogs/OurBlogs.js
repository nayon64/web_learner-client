import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCard from './BlogCard';

const OurBlogs = () => {

	const [blogs, setBlogs]=useState([])

	useEffect(() => {
		fetch("https://web-learner-server-site.vercel.app/blogs").then(res => res.json()).then(data => {
			console.log(data)
			setBlogs(data.slice(0,3))
		})
	}, [])
	console.log(blogs)

	return (
    <div className="mt-24 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-600 text-center my-4 mb-6">
        Our Recent Blogs
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
				{
					blogs.map(blog=><BlogCard key={blog?._id} blog={blog}></BlogCard>)
		}
      </div>
    </div>
  );
};

export default OurBlogs;