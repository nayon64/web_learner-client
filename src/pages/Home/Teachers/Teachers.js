import React from 'react';
import TeacherCard from './TeacherCard';

const Teachers = () => {

	const teachers = [
    {
      name: "Nitol Asa",
      img: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      degignation: "Web Instractor",
      about:
        "Nitol Asa is a Web Instractor of WEB LEARNER. She is work in this sector in 5 years. She is very proffesional in her work.",
    },
    {
      name: "Anup Jha",
      img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      degignation: "UI/UX Desinger",
      about:
        "Anup Jha is a UI/UX Desinger of WEB LEARNER. He is work in this sector in 5 years. He is very proffesional in her work.",
    },
    {
      name: "Mitali Bothacharjo",
      img: "https://images.unsplash.com/photo-1664574652984-5b5f769bef07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      degignation: "MERN Stack Developer",
      about:
        "Mitali Bothacharjo is a MERN Stack Developer Instractor of WEB LEARNER. She is work in this sector in 5 years. She is very proffesional in her work.",
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