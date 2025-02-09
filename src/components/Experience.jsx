import React from 'react';
import { Code } from 'lucide-react';
import experienceData from '../data/profile.json';

const ExperienceSection = () => {
  return (
    <div className="w-[56rem] max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      
      <div className="space-y-6">
        {experienceData['experience'].map((experience) => (
          <div key={experience.id} className="flex gap-4">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <img
                src={experience.companyLogo}
                alt={experience.company}
                className="w-12 h-12 rounded"
              />
            </div>

            {/* Experience Details */}
            <div className="flex-1">
              {/* If it's a single position */}
              {!experience.positions && (
                <div>
                  <h3 className="font-semibold">{experience.role}</h3>
                  <p className="text-sm text-gray-600">
                    {experience.company} · {experience.employmentType}
                  </p>
                  <p className="text-sm text-gray-500">
                    {experience.startDate} - {experience.endDate} · {experience.duration}
                  </p>
                  <p className="text-sm text-gray-500">
                    {experience.location} · {experience.workType}
                  </p>
                </div>
              )}

              {/* If it has multiple positions */}
              {experience.positions && (
                <div>
                  <h3 className="font-semibold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.employmentType} · {experience.duration}</p>
                  
                  <div className="mt-4 space-y-4">
                    {experience.positions.map((position, index) => (
                      <div key={index} className="relative pl-4 border-l-2 border-gray-200">
                        <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-gray-200 rounded-full"></div>
                        <h4 className="font-medium">{position.role}</h4>
                        <p className="text-sm text-gray-500">
                          {position.startDate} - {position.endDate} · {position.duration}
                        </p>
                        <p className="text-sm text-gray-500">{experience.location}</p>
                        
                        {position.skills.length > 0 && (
                          <div className="mt-2 flex items-center text-gray-600">
                            <Code className="w-4 h-4 mr-2" />
                            <p className="text-sm">
                              {position.skills.join(" and ")}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;