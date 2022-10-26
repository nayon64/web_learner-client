import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaRegCheckSquare ,FaBook,FaVideo,FaPenSquare} from "react-icons/fa";
import CourseDetailsHeader from '../../components/CourseDetailsHeader/CourseDetailsHeader';

const CourseDetails = () => {
	const course = useLoaderData()
	const {syllabus,price,courseInfo,about}=course
	return (
		<div >
			<div className='bg-gray-800 mb-12'>
				<CourseDetailsHeader course={course}></CourseDetailsHeader>
			</div>
			<div className='grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-6'>
				<div className='col-span-3'>
					<div className='border-2 p-5 rounded-2xl col-span-3 mb-8'>
						<h1 className='text-3xl font-bold text-rose-600 mb-6'>This course includes:</h1>
						<div  className='flex justify-evenly flex-wrap'>
							<div className='border-2 rounded-xl py-3 px-6 mt-5'>
								<FaBook  className='text-5xl text-rose-600'/>
								<h2 className='mt-4 text-2xl text-gray-700'>{ courseInfo?.quizes?  courseInfo.quizes: "0"} <span>Quizs</span></h2>
							</div>
							<div className='border-2 rounded-xl py-3 px-6 mt-5'>
								<FaVideo  className='text-5xl text-rose-600'/>
								<h2 className='mt-4 text-2xl text-gray-700'>{ courseInfo?.videos?  courseInfo.videos: "0"} <span>Videos</span></h2>
							</div>
							<div className='border-2 rounded-xl py-3 px-6 mt-5'>
								<FaPenSquare  className='text-5xl text-rose-600'/>
								<h2 className='mt-4 text-2xl text-gray-700'>{ courseInfo?.assignments?  courseInfo.assignments: "0"} <span>Assignments</span></h2>
							</div>
						</div>
						
					</div>
					
					<div className='border-2 p-5 rounded-2xl mb-8'>
						<h1 className='text-3xl font-bold text-rose-600 mb-2'>What you will learn:</h1>
						<ul>
							{
								syllabus.map((items, id) => <li
									key={id}
									className='flex items-center'><FaRegCheckSquare /> <span className='ml-3'>{items}</span></li>)

							}
						</ul>
					</div>
					<div className='border-2 p-5 rounded-2xl '>
						<h1 className='text-3xl font-bold text-rose-600 mb-2'>About Course:</h1>
						<p>{about}</p>
					</div>
				</div>
				<div className=' col-span-2 hidden lg:block'>
					<div className='bg-gray-200 p-5 pb-9 rounded-xl'>
						<h2 className='text-rose-600 font-bold text-3xl mb-4'>Buy This Course</h2>
						<h3 className='text-2xl font-semibold mb-6 text-gray-700'>Prices : $<span>{price}</span></h3>
						<Link className='bg-rose-600 py-3 px-10 text-white text-xl font-semibold rounded-lg' to>Buy Now</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;