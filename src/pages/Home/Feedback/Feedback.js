import React from 'react';
import FeedbackCard from './FeedbackCard';

const Feedback = () => {

  const feedbacks = [
    {
      name: "Nitol Asa",
      img: "https://i.ibb.co/qxq0HdP/female-user-transparent-icon-d-Otd-VA.png",
      message:
        "This website is the very effective for any web development sector student. I am learn more things.",
    },
    {
      name: "Anup Jha",
      img: "https://i.ibb.co/9wJ2CWd/avatar-user-profile-icon-png-favpng-9e-Tu3u-L6i-Jm-KQsvfh-U4-Nm-BNAB-t.jpg",
      message:
        "This website is the very effective for any web development sector student. I am learn more things.",
    },
    {
      name: "Mitali Bothacharjo",
      img: "https://i.ibb.co/GkrFJ4R/pe-3.jpg",
      message:
        "This website is the very effective for any web development sector student. I am learn more things.",
    },
  ];


	return (
    <div className="my-12 max-w-6xl mx-auto ">
      <h1 className="text-4xl font-bold text-gray-600 text-center my-4 mb-6">
        Our Students Feedback
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
          feedbacks.map((feedback,i)=><FeedbackCard key={i} feedback={feedback}></FeedbackCard>)
        }
      </div>
    </div>
  );
};

export default Feedback;