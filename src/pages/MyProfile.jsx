import React, { useEffect, useState } from 'react'
import ProfileHeader from '../components/ProfileHeader';
import ProjectsSection from '../components/ProjectSection';
import profileInfo from '../data/profile.json';
import profilePic from '../assets/profilepic.jpg';
import { Send } from 'lucide-react';
import RecommendationsSection from '../components/Recommendations';
import PublicationsSection from '../components/Publications';
import HonorsAndAwards from '../components/Awards';
import TestScores from '../components/TestSection';
import Dialog from '@mui/material/Dialog';
import LetsConnect from '../components/LetsConnect'
import Skills from '../components/Skills';
import Alert from '@mui/material/Alert';
import { FileDown, Eye } from 'lucide-react';
import Button from '@mui/material/Button';
import About from '../components/About';
import EducationSection from '../components/Educations';
import ExperienceSection from '../components/Experience';
import LicencesSection from '../components/Licenses';
import ProfileLinks from '../components/ProfileLinks';

const MyProfile = () => {

  
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const profileBanner = document.getElementById('profile-banner');
      if (profileBanner) {
        profileBanner.style.transition = 'top 0.3s ease-in-out';
        profileBanner.style.top = '3.55rem';
        profileBanner.style.display = 'block';
        profileBanner.style.zIndex = '1';
      }
    }, []);
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleDownloadResume = () => {
      window.open('https://drive.google.com/file/d/1DSNV7iW8gMfe8ItTwzlz57l8hcdeflIs/view?usp=sharing', '_blank');
    };

  return (
    <>
    <div id="profile-banner" className="fixed left-0 right-0 bg-white shadow-md py-2 px-4 flex items-center justify-between" style={{ top: '-100px' }}>
        <div className="flex items-center gap-4 mx-auto">
          <img src={profilePic} alt='Profile Pic' width={32} height={32} style={{ borderRadius: '50%' }} />
          <div>
            <span className='font-semibold'>{profileInfo.name}</span>
            <p className="text-gray-600 mt-1 text-sm">
              {profileInfo.skills.join(' | ')}
            </p>

          </div>
          <div className='flex flex-row-reverse gap-3'>
            <button onClick={handleClickOpen} className="px-4 py-1 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Send className="w-4 h-4 inline mr-1" />
              Message
            </button>
            <button onClick={handleClickOpen} className="px-4 py-1 border border-gray-400 text-gray-600 rounded-full hover:bg-gray-50">
              More
            </button>
          </div>
        </div>
      </div>
      <div className='app-root grid grid-cols-1 md:grid-cols-[70%,30%] gap-2 py-20 mx-auto px-4 md:px-20'>
        <div className='boxes-wrapper flex gap-4 flex-col items-center'>
          <ProfileHeader />
          <div className='max-w-4xl w-full'>
            <Alert severity="info">
              <div className='flex gap-4 mx-4 items-center'>
                <span>Wow🤗, you are at the right window. Download my resume to find more about me</span>
              <Button variant="contained" endIcon={<FileDown />} onClick={handleDownloadResume}>
                    View & Download
              </Button>
              </div>
            </Alert>
          </div>
          <About />
          <ExperienceSection />
          <EducationSection />
          <LicencesSection />
          <ProjectsSection />
          <RecommendationsSection />
        </div>
        <div className='boxes-wrapper flex gap-4 flex-col'>
            <ProfileLinks />
          <Skills />
          <PublicationsSection />
          <HonorsAndAwards />
          <TestScores />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
        <LetsConnect />
      </Dialog>
    </>
  )
}

export default MyProfile