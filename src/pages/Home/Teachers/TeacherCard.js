import React from 'react';

const TeacherCard = ({ teacher }) => {
	console.log(teacher)
	return (
    <div className="border group rounded-md p-3 shadow-lg overflow-hidden relative">
      <div className="p-6 h-4/5 group-hover:scale-50 group-hover:-translate-y-14 duration-300">
        <img
          className="h-full w-full object-cover group-hover:rounded-full"
          src={teacher?.img}
          alt=""
        />
      </div>
      <div className="group-hover:-translate-y-28 duration-300">
        <h3 className="font-bold text-2xl text-center text-gray-800">
          {teacher?.name}
        </h3>
        <h5 className="text-gray-600 text-center">{teacher?.degignation}</h5>
        <p className="absolute mt-16 px-4 text-gray-600 text-sm group-hover:mt-2 text-center">
          {teacher?.about}
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;