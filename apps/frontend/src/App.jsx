import ScrollProgress from "@/components/ui/scroll-progress";
import HeroSection from "./components/layout/hero/HeroSection";
import EducationList from "./components/app/abouts/EducationList";
import ExperienceList from "./components/app/abouts/ExperienceList";
import ProjectList from "./components/app/projects/ProjectList";
import ProjectText from "./components/app/projects/ProjectText";
import ContactText from "./components/layout/footer/ContactText";
import SkillList from "./components/app/abouts/SkillList";
import DockMain from "./components/layout/hero/Dock";
import SpeakList from "./components/app/abouts/SpeakList";

function App() {
  return (
    <>
      <DockMain />
      <ScrollProgress />
      <HeroSection />
      <div className="container mx-auto py-6">
        <EducationList />
        <ExperienceList />
        <SpeakList />
        <SkillList />
      </div>
      <ProjectText />
      <ProjectList />
      <ContactText />
    </>
  );
}

export default App;
