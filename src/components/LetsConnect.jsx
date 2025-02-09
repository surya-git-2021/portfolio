import React from 'react';
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import profileInfo from '../data/profile.json';
const ContactDisplay = () => {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: profileInfo.email,
      link: "mailto:example@email.com",
      hoverBg: "hover:bg-red-500",
      iconColor: "text-red-500"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: profileInfo.linkedin,
      link: profileInfo.linkedin,
      hoverBg: "hover:bg-blue-600",
      iconColor: "text-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: profileInfo.github,
      link: profileInfo.github,
      hoverBg: "hover:bg-gray-900",
      iconColor: "text-gray-900"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@surya_jama",
      link:  profileInfo.instagram, 
      hoverBg: "hover:bg-pink-600",
      iconColor: "text-pink-600"
    }
  ];

  return (
    <div className="w-full max-w-lg min-w-[33rem] mx-auto p-8 lets-connect">
        <div>
        <h3 className="text-2xl font-bold text-center mb-8">
          Let's Connect!
        </h3>
      <div className="grid gap-4">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center p-4 rounded-lg border border-gray-200 
              transition-all duration-500 ease-in-out hover:scale-105
              ${contact.hoverBg} hover:border-transparent hover:shadow-xl`}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-full 
              bg-gray-100 transition-all duration-500 group-hover:scale-110
              ${contact.iconColor} group-hover:text-white
              group-hover:rotate-[360deg] group-hover:bg-transparent`}>
              {contact.icon}
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm font-medium text-gray-900 transition-colors duration-500 
                group-hover:text-white">
                {contact.label}
              </p>
              <p className="text-sm text-gray-500 transition-colors duration-500 
                group-hover:text-white/90">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
        </div>
        <img src="" alt="" />
    </div>
  );
};

export default ContactDisplay;