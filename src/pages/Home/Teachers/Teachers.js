import React from 'react';
import TeacherCard from './TeacherCard';

const Teachers = () => {

	const teachers = [
    {
      name: "Nitol Asa",
      img: "https://i.ibb.co/qxq0HdP/female-user-transparent-icon-d-Otd-VA.png",
      degignation: "Web Instractor",
    },
    {
      name: "Anup Jha",
      img: "https://i.ibb.co/9wJ2CWd/avatar-user-profile-icon-png-favpng-9e-Tu3u-L6i-Jm-KQsvfh-U4-Nm-BNAB-t.jpg",
      degignation: "UI/UX Desinger",
    },
    {
      name: "Mitali Bothacharjo",
      img: "https://i.ibb.co/GkrFJ4R/pe-3.jpg",
      degignation: "MERN Stack Developer",
    },
  ];

	return (
    <div className="my-12 max-w-6xl mx-auto ">
      <h1 className="text-4xl font-bold text-gray-600 text-center my-4 mb-6">
        Our Teachers Panel
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {teachers.map((teacher, i) => (
          <TeacherCard key={i} teacher={teacher}></TeacherCard>
        ))}
      </div>
    </div>
  );
};

export default Teachers;