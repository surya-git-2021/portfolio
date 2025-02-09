import React from 'react';
import { ChevronRight } from 'lucide-react';

const education = [
    {
      institution: "Gayatri Vidya Parishad College of Engineering (Autonomous)",
      degree: "Bachelor of Technology - BTech, Computer Science",
      duration: "Jul 2017 - Jun 2021",
      logo: "/api/placeholder/48/48",
      skills: ["Hibernate", "Python (Programming Language)", "+10 skills"]
    },
    {
      institution: "Narayana Junior College - India",
      degree: "MPC",
      duration: "Apr 2015 - May 2017",
      logo: "/api/placeholder/48/48"
    }
  ]

const EducationSection = () => {
  return (
    <div className="w-[56rem] max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-6">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={edu.logo}
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