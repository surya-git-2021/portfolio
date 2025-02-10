import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Menu,
  X,
  ChevronDown, File
} from 'lucide-react';
import profileData from '../data/profile.json';
import ProfilePic from '../assets/profilepic.jpg';

// Create filled versions of the icons
const Home = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const Briefcase = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const Message = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
  </svg>
);

const Bell = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const User = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Desktop navigation item
const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <button className="flex flex-col items-center text-[#00000099] hover:text-black transition-colors" onClick={onClick}>
      <div className={`p-1 ${active ? 'text-black' : ''}`}>
        {icon}
      </div>
      <span className="text-xs mt-0.5">{label}</span>
    </button>
  );
};

// Mobile navigation item
const MobileNavItem = ({ icon, label, active, onClick }) => {
  return (
    <button className="flex items-center w-full px-4 py-2 text-[#00000099] hover:text-black hover:bg-gray-50 transition-colors" onClick={onClick}>
      <div className={`p-1 ${active ? 'text-black' : ''}`}>
        {icon}
      </div>
      <span className="ml-2">{label}</span>
    </button>
  );
};

// Menu link component for dropdown
const MenuLink = ({ icon, text }) => (
  <button className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 flex items-center">
    {icon && <span className="mr-2">{icon}</span>}
    {text}
  </button>
);

const LinkedInNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const { name, title } = profileData;

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1DSNV7iW8gMfe8ItTwzlz57l8hcdeflIs/view?usp=sharing', '_blank');
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left section - Logo and Search */}
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </div>
            
            <div className="hidden md:block ml-4 flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md border-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#00000099] hover:text-black"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItem icon={<Home className="w-6 h-6" />} label="Home" active />
            <NavItem icon={<Users className="w-6 h-6" />} label="Network" />
            <NavItem icon={<Briefcase className="w-6 h-6" />} label="Jobs" />
            <NavItem icon={<Message className="w-6 h-6" />} label="Messaging" />
            <NavItem icon={<File className="w-6 h-6" />} label="Resume" onClick={handleDownloadResume} />
            <div className="border-l border-gray-200 h-8" />
            
            {/* Me dropdown */}
            <div className="relative" ref={profileRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex flex-col items-center text-[#00000099] hover:text-black transition-colors"
              >
                <div className="p-1">
                  <User className="w-6 h-6" />
                </div>
                <div className="flex items-center text-xs mt-0.5">
                  <span>Me</span>
                  <ChevronDown className="w-4 h-4 ml-0.5" />
                </div>
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200">
                  {/* Profile Section */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img
                          src={ProfilePic}
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-black">{name}</h3>
                        <p className="text-sm text-gray-600 mt-0.5 line-clamp-2">
                          {title}
                        </p>
                      </div>
                    </div>
                    <button className="mt-3 w-full text-center text-blue-600 font-medium border border-blue-600 rounded-full py-1 hover:bg-blue-50 text-sm">
                      View Profile
                    </button>
                  </div>

                  {/* Account Section */}
                  <div className="py-2">
                    <h4 className="px-4 py-2 text-sm font-medium">Account</h4>
                    <MenuLink icon="⭐️" text="Try 1 month of Premium for ₹0" />
                    <MenuLink text="Settings & Privacy" />
                    <MenuLink text="Help" />
                    <MenuLink text="Language" />
                  </div>

                  {/* Manage Section */}
                  <div className="py-2 border-t border-gray-200">
                    <h4 className="px-4 py-2 text-sm font-medium">Manage</h4>
                    <MenuLink text="Posts & Activity" />
                    <MenuLink text="Job Posting Account" />
                  </div>

                  {/* Sign Out */}
                  <div className="border-t border-gray-200">
                    <MenuLink text="Sign Out" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-md border-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                />
              </div>
            </div>
            
            <div className="py-2">
              <MobileNavItem icon={<Home className="w-6 h-6" />} label="Home" active />
              <MobileNavItem icon={<Users className="w-6 h-6" />} label="Network" />
              <MobileNavItem icon={<Briefcase className="w-6 h-6" />} label="Jobs" />
              <MobileNavItem icon={<Message className="w-6 h-6" />} label="Messaging" />
              <MobileNavItem icon={<File className="w-6 h-6" />} label="Resume" onClick={handleDownloadResume} /> 
              <MobileNavItem icon={<User className="w-6 h-6" />} label="Me" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LinkedInNavbar;