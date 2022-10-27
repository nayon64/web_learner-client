import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
	const blogs=useLoaderData()
	return (
		
		<div>
			<h1>This is Blog page...</h1>
		</div>
	);
};

export default Blogs;