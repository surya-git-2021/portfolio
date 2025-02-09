import React, { useState } from 'react';
import aboutText from '../data/profile.json';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const text = aboutText.abouttext;
  const showSeeMore = text.length > 150;

  return (
    <div className="about-section p-5 rounded-lg max-w-4xl mx-auto my-5 bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">About</h2>
      <div
        className={`text-gray-700 text-base leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-28'
          }`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      {showSeeMore && (
        <div className='flex justify-end'>
          <button
            onClick={toggleExpand}
            className="text-blue-600 hover:text-blue-800 focus:outline-none mt-2"
          >
            {isExpanded ? 'Show less' : 'See more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default About;


