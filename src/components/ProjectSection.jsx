import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';

const projectsData = {
  overview: {
    title: "Projects",
    description: "There are many others projects that I have developed and working on. I would like you visit my GitHub page where you can find all my work",
    duration: "Jan 2021 - Present",
    additionalInfo: "Description for all the projects is also available to leverage the technology and the project"
  },
  projects: [
    {
      title: "Chatbot application using React.js and Node.js",
      duration: "Nov 2021 - Dec 2021",
      description: "I have developed this project using React.js and Node.js. I have also used socket.io to implement chat rooms between users. We have used html5 and css to style the web application. This application is well tested for all the testcases..."
    },
    // Add more projects here as needed
  ]
};

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState({});

  const toggleDescription = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="max-w-4xl w-[56rem] mx-auto p-6">
      <section className="bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{projectsData.overview.title}</h2>
        
        {/* Overview Section */}
        <div className="mb-6">
          <p className="text-gray-800 mb-2">{projectsData.overview.description}</p>
          <p className="text-gray-500 text-sm">{projectsData.overview.duration}</p>
          <p className="text-gray-700 mt-2">{projectsData.overview.additionalInfo}</p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200" />

        {/* Projects List */}
        <div className="space-y-6">
          {projectsData.projects.map((project, index) => (
            <div key={index} className="group">
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{project.duration}</p>
              <div className="relative">
                <p className={`text-gray-700 ${expanded[index] ? '' : 'line-clamp-2'}`}>
                  {project.description}
                </p>
                {project.description.length > 150 && (
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1"
                  >
                    {expanded[index] ? (
                      <span className="flex items-center">
                        see less
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </span>
                    ) : (
                      <span className="flex items-center">
                        ...see more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show All Projects Button */}
        <button className="mt-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors">
          Show all 4 projects
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </section>
    </div>
  );
};

export default ProjectsSection;