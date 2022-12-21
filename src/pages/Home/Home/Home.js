import React from 'react';
import Banner from '../Banner/Banner';
import CoursesSection from '../CoursesSection/CoursesSection';
import SuccessFullStudents from '../SuccessFullStudents/SuccessFullStudents';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<CoursesSection></CoursesSection>
			<SuccessFullStudents></SuccessFullStudents>
		</div>
	);
};

export default Home;