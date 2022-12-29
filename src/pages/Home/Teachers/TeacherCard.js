import React from 'react';

const TeacherCard = ({ teacher }) => {
	console.log(teacher)
	return (
    <div className="border rounded-md p-3 shadow-lg">
      <div className="p-6">
        <img src={teacher?.img} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-2xl text-center text-gray-800">
          {teacher?.name}
        </h3>
        <h5 className='text-gray-600 text-center'>{teacher?.degignation}</h5>
      </div>
    </div>
  );
};

export default TeacherCard;