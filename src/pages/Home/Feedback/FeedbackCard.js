import React from 'react';

const FeedbackCard = ({feedback}) => {
	return (
    <div className="border rounded-md p-6 flex shadow-lg">
      <div>
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img className="" src={feedback?.img} alt="" />
        </div>
      </div>
      <div className='ml-3'>
        <h3 className="font-semibold text-gray-600">{feedback?.name}</h3>
        <p className="text-sm text-gray">{feedback?.message}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;