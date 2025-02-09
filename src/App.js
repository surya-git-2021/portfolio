import './App.css';
import About from './components/About';
import EducationSection from './components/Educations';
import ExperienceSection from './components/Experience';
import LicencesSection from './components/Licenses';
import Navbar from './components/Navbar';
import ProfileHeader from './components/ProfileHeader';
import ProjectsSection from './components/ProjectSection';
function App() {
  return (
    <>
      <Navbar />
      <div className='app-root flex gap-4 flex-col py-20'>
        <ProfileHeader />
        <About />
        <ExperienceSection />
        <EducationSection />
        <LicencesSection />
        <ProjectsSection />
      </div>
    </>
  );
}

export default App;
