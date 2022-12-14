import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import CoursesSection from '../CoursesSection/CoursesSection';
import Feedback from '../Feedback/Feedback';
import OurBlogs from '../OurBlogs/OurBlogs';
import SuccessFullStudents from '../SuccessFullStudents/SuccessFullStudents';
import Teachers from '../Teachers/Teachers';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<CoursesSection></CoursesSection>
			<SuccessFullStudents></SuccessFullStudents>
			<Feedback></Feedback>
			<Teachers></Teachers>
			<Contact></Contact>
			<OurBlogs></OurBlogs>
		</div>
	);
};

export default Home;