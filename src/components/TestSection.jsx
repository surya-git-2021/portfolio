import React from 'react';
import universtyLogo from '../assets/vit.jpg';
import profileInfo from '../data/profile.json'
const testScores = profileInfo.testScores;

const TestScores = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <h2 className="text-xl font-semibold mb-6">Test scores</h2>

      {/* Scores List */}
      <div className="space-y-6">
        {testScores.map((test, index) => (
          <div key={index} className="space-y-4">
            {/* Test Name and Score */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {test.testName}
              </h3>
              <p className="text-gray-600">
                Score: {test.score} · {test.date}
              </p>
            </div>

            {/* Associated Institution */}
            <div className="flex items-center gap-2">
              <img
                src={universtyLogo}
                alt={test.institution.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-600">
                Associated with {test.institution.name}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700">
              {test.description}
            </p>

            {/* Divider */}
            {index < testScores.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestScores;