import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = `
    As a dedicated MERN stack developer with over 3 years of experience, I specialize in building robust and scalable web applications that prioritize exceptional user experiences. My expertise spans across a range of technologies including ReactJS, NextJS, Redux, Redux Toolkit, Angular, NodeJS, Express.js, and MongoDB. I am also proficient in working with databases, BigQuery, and implementing CI/CD pipelines using GitHub and Jenkins.
    I am passionate about leveraging my skills to create innovative solutions and continuously strive to stay updated with the latest industry trends. My goal is to contribute to impactful projects that push the boundaries of web development.
  `;

  const lines = text.split('\n');
  const showSeeMore = lines.length > 3;

  return (
    <div className="about-section p-5 rounded-lg max-w-4xl mx-auto my-5 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
      <div
        className={`text-gray-700 text-base leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
          isExpanded ? 'max-h-[1000px]' : 'max-h-24'
        }`}
      >
        {text}
      </div>
      {showSeeMore && (
        <button
          onClick={toggleExpand}
          className="text-blue-600 hover:text-blue-800 focus:outline-none mt-2"
        >
          {isExpanded ? 'Show less' : 'See more'}
        </button>
      )}
    </div>
  );
};

export default About;