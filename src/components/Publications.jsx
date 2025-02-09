import React from 'react';
import { ExternalLink } from 'lucide-react';
import contributor1 from '../assets/contributor1.jpg';
import profileInfo from '../data/profile.json';

const PublicationsSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm max-h-fit">
      {/* Header with buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Publications</h2>
      </div>

      {/* Publications List */}
      <div className="space-y-8">
        {profileInfo.publications.map((publication, index) => (
          <div key={index} className="space-y-4">
            {/* Publication Title and Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {publication.title}
              </h3>
              <p className="text-gray-600">
                {publication.publisher} · {publication.date}
              </p>
            </div>

            {/* Show Publication Button */}
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" onClick={() => window.open(publication.redirectURL, '_blank')}>
              Show publication
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>

            {/* Other Authors Section */}
            {publication.otherAuthors && publication.otherAuthors.length > 0 && (
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Other authors</h4>
                <div className="flex gap-2">
                  {publication.otherAuthors.map((author, idx) => (
                    <img
                      key={idx}
                      src={contributor1}
                      alt={author.name}
                      className="w-12 h-12 rounded-full"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Divider */}
            {index < profileInfo.publications.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;