import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import edu1 from '../assets/vit.jpg';
import contributor1 from '../assets/contributor1.jpg';
import profileInfo from '../data/profile.json'
const ProjectsSection = () => {
  const projectsData = profileInfo.projects;
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!projectsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
      </div>

      <div className="space-y-8">
        {projectsData.map((project, index) => (
          <div key={index} className="space-y-4">
            {/* Project Title and Duration */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.duration}</p>
            </div>

            {/* Associated Institution */}
            {project.associatedWith && (
              <div className="flex items-center gap-2">
                <img
                  src={edu1}
                  alt={'Vellore Institute of Technology logo'}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-600">
                  Associated with {project.associatedWith.name}
                </span>
              </div>
            )}

            {/* Project Description */}
            <div className="relative">
              <p className={`text-gray-700 ${expandedDescriptions[index] ? '' : 'line-clamp-2'}`}>
                {project.description}
              </p>
              {project.description.length > 150 && (
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 flex items-center"
                >
                  {expandedDescriptions[index] ? 'see less' : '...see more'}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              )}
            </div>

            {/* Contributors Section */}
            {project.contributors && project.contributors.length > 0 && (
              <div>
                <h4 className="text-gray-900 font-medium mb-2">Other contributors</h4>
                <div className="flex gap-2">
                  {project.contributors.map((contributor, idx) => (
                    <a href="https://www.linkedin.com/in/krishna-yanmantram-00b1741b6/" target="_blank" rel="noopener noreferrer">
                    <img
                      key={idx}
                      src={contributor1}
                      alt={contributor.name}
                      className="w-12 h-12 rounded-full"
                    />
                  </a>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Tags */}
            {project.skills && (
              <div className="flex gap-2 flex-wrap">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-sm text-gray-700"
                  >
                    <span className="mr-2">◆</span>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;