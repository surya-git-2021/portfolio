import React from 'react';
import { Bell } from 'lucide-react';
import ProfilePic from '../assets/profilepic.jpg';
import ValueLabsLogo from '../assets/valuelabs.jpg';
import VITLogo from '../assets/vit.jpg';
import profileData from '../data/profile.json';
import { ShieldCheck } from 'lucide-react';
import { Send } from 'lucide-react';

const ProfileHeader = () => {
  const {
    name,
    location,
    connections,
    mutualConnection,
    skills,
    companies
  } = profileData;

  const companyLogos = {
    "ValueLabs": ValueLabsLogo,
    "Vellore Institute of Technology": VITLogo
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Cover Image */}
      <div className="relative w-full h-48 banner-image rounded-t-lg overflow-hidden">
        {/* Dark overlay with airpods image */}
      </div>

      {/* Profile Section */}
      <div className="relative bg-white rounded-b-lg shadow-sm px-8 pb-4">
        {/* Profile Image */}
        <div className="absolute -top-16 left-8">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
            <img
              src={ProfilePic}
              alt="Mutual connection"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-20">
          <div className="flex justify-between items-start gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">{name} </h2>
                
                <span className="text-xs bg-gray-100 px-2 py-1 rounded flex items-center"><ShieldCheck /> • 1st</span>
              </div>
              <p className="text-gray-600 mt-1">
                {skills.join(' | ')}
              </p>
              <p className="text-gray-500 text-sm mt-1">
                {location} • <span className="text-blue-600">Contact info</span>
              </p>
              <p className="text-blue-600 mt-1">{connections}</p>

              {/* Mutual Connection */}
              <div className="flex items-center mt-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    src={ProfilePic}
                    alt="Mutual connection"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm ml-2">
                  <span className="font-medium">{mutualConnection.name}</span> is a mutual connection
                </p>
              </div>
            </div>

            {/* Company Logos */}
            <div className="flex flex-col gap-4">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center gap-2">
                  <img
                    src={companyLogos[company.name]}
                    alt={company.name}
                    className="w-10 h-10 rounded"
                  />
                  <span className="text-sm">{company.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Send className="w-4 h-4 inline mr-1" />
              Message
            </button>
            <button className="px-4 py-1 border border-gray-400 text-gray-600 rounded-full hover:bg-gray-50">
              More
            </button>
            <button className="ml-auto p-2 text-gray-600 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;