import React from 'react';

const Loader = () => {
	return (
		<div className='flex justify-center my-3'>
			<div className='w-12 h-12 border-4 rounded-full border-dashed animate-spin border-sky-500'></div>
		</div>
	);
};

export default Loader;