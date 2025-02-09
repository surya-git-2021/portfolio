import React from 'react';
import { ChevronRight } from 'lucide-react';

const certifications =[
    {
      name: "Node.js Essential Certification",
      issuer: "LinkedIn",
      issuedDate: "Aug 2022",
      logo: "/api/placeholder/48/48"
    },
    {
      name: "React Hooks",
      issuer: "LinkedIn",
      issuedDate: "Aug 2022",
      logo: "/api/placeholder/48/48"
    }
  ]

const LicencesSection = () => {
  return (
    <div className="w-[56rem] max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-6">Licenses & certifications</h2>
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={cert.logo}
                alt={`${cert.issuer} logo`}
                className="w-12 h-12"
              />
              <div>
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-gray-700">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">Issued {cert.issuedDate}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          Show all 14 licenses & certifications
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </section>
    </div>
  );
};

export default LicencesSection;