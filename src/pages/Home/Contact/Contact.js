import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
	return (
    <div
      className="py-12 mt-24 flex justify-center w-screen"
      style={{
        backgroundImage: `url("https://i.ibb.co/QPCnTWr/notepad-3299127-1280.jpg")`,
      }}
    >
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;