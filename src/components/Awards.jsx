import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import profileInfo from '../data/profile.json';
import companyLogo from '../assets/valuelabs.jpg';
import award1 from '../assets/award1.jpg';
import award2 from '../assets/award2.jpg';
const HonorsAndAwards = () => {
  // Award data
  const awards = profileInfo.awards;
  const awardsMap = {
    "Super Star Of The Quarter": award1,
    "Star of the Month": award2,
  }

  // State for expanded descriptions
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  // Toggle description expansion
  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Honors & awards</h2>
      </div>

      {/* Awards List */}
      <div className="space-y-8">
        {awards.map((award, index) => (
          <div key={index} className="space-y-4">
            {/* Award Title and Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {award.title}
              </h3>
              <p className="text-gray-600">
                Issued by {award.issuer} · {award.date}
              </p>
            </div>

            {/* Associated Company */}
            <div className="flex items-center gap-2">
              <img
                src={companyLogo}
                alt={award.company.name}
                className="w-8 h-8"
              />
              <span className="text-gray-600">
                Associated with {award.company.name}
              </span>
            </div>

            {/* Award Description */}
            <div className="relative">
              <p className={`text-gray-700 ${expandedDescriptions[index] ? '' : 'line-clamp-2'}`}>
                {award.description}
              </p>
              {award.description.length > 100 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 flex items-center"
                >
                  {expandedDescriptions[index] ? 'see less' : '...see more'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>

            {/* Award Image */}
            {award.image && (
              <div className="border border-gray-200 rounded-lg overflow-hidden w-48">
                <img
                  src={awardsMap[award.title]}
                  alt={award.image.alt}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Divider */}
            {index < awards.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HonorsAndAwards;