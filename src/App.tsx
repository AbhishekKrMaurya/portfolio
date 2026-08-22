import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { GitHubGuideModal } from './components/GitHubGuideModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808] text-[#f2f2f2] selection:bg-[#b89b72] selection:text-[#080808] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        />
        <About 
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Interactive Modals */}
      <ResumeModal 
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <GitHubGuideModal
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
}
