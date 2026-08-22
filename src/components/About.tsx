import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  User, 
  Code2, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone,
  FileText
} from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      icon: Layers,
      title: "Full-Stack Web Development",
      description: "Crafting modern, responsive user interfaces with React, Tailwind CSS, and JavaScript paired with robust REST APIs and database layers."
    },
    {
      icon: Cpu,
      title: "Data Structures & Algorithms",
      description: "Strong algorithmic problem-solving foundation in Java and C/C++, focusing on space and time efficiency, recursion, trees, and graphs."
    },
    {
      icon: Database,
      title: "Database Management & CRUD",
      description: "Designing structured relational databases, implementing full CRUD operational workflows, and ensuring transaction safety."
    },
    {
      icon: Code2,
      title: "Real-World Engineering",
      description: "Hands-on experience delivering end-to-end applications through rigorous internships at Samsung Innovation Campus & Coding Blocks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
            Driven by curiosity, grounded in computer science fundamentals.
          </h2>
          <p className="text-[#8a8a8a] text-base sm:text-lg mt-3 leading-relaxed font-light">
            I am an MCA graduate from the University of Lucknow passionate about software engineering, 
            modern web development, and algorithmic optimization.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-sm space-y-4">
              <h3 className="text-xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#b89b72]" />
                <span>Professional Profile & Background</span>
              </h3>
              
              <p className="text-[#a8a8a8] leading-relaxed text-sm sm:text-base font-light">
                {PERSONAL_INFO.bio}
              </p>

              <div className="pt-2 space-y-3 text-[#cccccc] text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b89b72] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#f2f2f2]">Samsung Innovation Campus:</strong> Developed an interactive Crime Reporting Portal with automated case tracking and admin management dashboards.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b89b72] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#f2f2f2]">Coding Blocks:</strong> Intensive DSA training in Java combined with creating a real-time Canteen Booking & Availability System.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#b89b72] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#f2f2f2]">University of Lucknow:</strong> Advanced MCA curriculum emphasizing object-oriented design, operating systems, and distributed database systems.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#222222] flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#8a8a8a] font-mono">
                  Ready to deploy software solutions locally & in the cloud.
                </div>
                <button
                  id="about-resume-btn"
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1714] hover:bg-[#252019] text-[#cbb493] border border-[#b89b72]/40 text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#b89b72]" />
                  <span>View Full Curriculum Vitae</span>
                </button>
              </div>
            </div>

            {/* Core Pillars 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx} 
                    id={`about-pillar-${idx}`}
                    className="p-5 rounded-xl bg-[#0f0f0f] border border-[#222222] hover:border-[#38332a] transition-all hover:bg-[#141414]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1a1714] border border-[#b89b72]/30 flex items-center justify-center text-[#cbb493] mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-semibold text-[#f2f2f2] text-sm mb-1.5">{pillar.title}</h4>
                    <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Info & Stats Side Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Details Card */}
            <div className="p-6 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-sm space-y-5">
              <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">Quick Bio & Details</h3>
              
              <div className="space-y-3.5 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Full Name</span>
                  <span className="text-[#f2f2f2] font-medium">{PERSONAL_INFO.name}</span>
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Current Degree</span>
                  <span className="text-[#cbb493] font-medium">MCA (Univ of Lucknow)</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Prior Degree</span>
                  <span className="text-[#d4d4d4] font-medium">BCA (SMS Varanasi, 2023)</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Location</span>
                  <span className="text-[#d4d4d4] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#b89b72]" />
                    Lucknow, India
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Hometown</span>
                  <span className="text-[#d4d4d4]">Varanasi, India</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#1e1e1e]">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Nationality</span>
                  <span className="text-[#d4d4d4]">{PERSONAL_INFO.nationality}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="text-[#8a8a8a] text-xs font-mono uppercase tracking-wider">Status</span>
                  <span className="text-[#cbb493] font-mono text-xs px-2.5 py-0.5 rounded bg-[#1a1714] border border-[#b89b72]/40">
                    Open to Work
                  </span>
                </div>
              </div>

              {/* Roles Looking For */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8a8a8a] mb-2">Target Roles</div>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.availableFor.map((role, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-[#161616] text-[#b5b5b5] text-xs border border-[#262626]"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1c1813] via-[#121212] to-[#0c0c0c] border border-[#b89b72]/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#2a241c] text-[#cbb493] flex items-center justify-center border border-[#b89b72]/30">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-['Playfair_Display',serif] font-bold text-[#f2f2f2] text-sm">Have a Project or Opening?</h4>
                  <p className="text-xs text-[#8a8a8a]">Let's discuss how I can add value.</p>
                </div>
              </div>
              <a
                id="about-contact-cta"
                href="#contact"
                className="w-full py-2 px-3 bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] rounded-lg text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <span>Send a Message</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
