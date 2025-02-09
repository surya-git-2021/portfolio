import React from 'react';
import profileInfo from '../data/profile.json'
import edu1 from '../assets/vit.jpg';
import edu2 from '../assets/sri_chaitanya_college_of_education_logo.jpg';

const EducationSection = () => {
  const institutionLogoMap = {
    'Vellore Institute of Technology': edu1,
    'Sri Chaitanya College of Education': edu2,
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-6">Education</h2>
        <div className="space-y-6">
          {profileInfo.education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={institutionLogoMap[edu.institution] || edu2}
                alt={`${edu.institution} logo`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{edu.institution}</h3>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
                {edu.skills && (
                  <div className="mt-2 flex gap-2 flex-wrap">
                    {edu.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 text-sm bg-gray-100 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EducationSection;