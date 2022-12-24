import React from 'react';
import Banner from '../Banner/Banner';
import CoursesSection from '../CoursesSection/CoursesSection';
import Feedback from '../Feedback/Feedback';
import SuccessFullStudents from '../SuccessFullStudents/SuccessFullStudents';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<CoursesSection></CoursesSection>
			<SuccessFullStudents></SuccessFullStudents>
			<Feedback></Feedback>
		</div>
	);
};

export default Home;