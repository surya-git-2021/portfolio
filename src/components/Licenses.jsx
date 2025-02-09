import React from 'react';
import { ChevronRight } from 'lucide-react';
import profileInfo from '../data/profile.json';
import one from '../assets/certifications/1.jpg';
import two from '../assets/certifications/2.jpg';
import three from '../assets/certifications/3.jpg';

const LicencesSection = () => {
  const licensesMap = {
    'Crash Course on Python': one,
    'Neural Networks and Deep Learning': two,
    'Programming for Everybody (Getting Started with Python)': three,
  };


  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <section>
        <h2 className="text-xl font-semibold mb-6">Licenses & certifications</h2>
        <div className="space-y-6">
          {profileInfo.certifications.map((cert, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={licensesMap[cert.name] || three}
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