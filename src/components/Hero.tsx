import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  Check, 
  Copy, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Sparkles,
  ExternalLink,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'skills'>('profile');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b89b72]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#2a241c]/40 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#1a1714]/60 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#b89b72]/30 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b89b72] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#b89b72]"></span>
              </span>
              <span className="text-xs font-mono tracking-wider uppercase text-[#cbb493]">
                Available for Software Engineering Roles & Internships
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight leading-[1.15]">
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5ede0] via-[#cbb493] to-[#8a7251]">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-light text-[#cbb493] tracking-wide font-['Cormorant_Garamond',serif] italic">
                Software Developer & MCA Candidate
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#a8a8a8] leading-relaxed max-w-2xl font-light">
              Master of Computer Applications student at the <strong className="text-[#f2f2f2] font-semibold">University of Lucknow</strong> with 
              hands-on industry internship experience at <span className="text-[#cbb493] font-medium">Samsung Innovation Campus</span> and <span className="text-[#cbb493] font-medium">Coding Blocks</span>. 
              Specializing in <span className="text-[#e0d6c8]">Java</span>, <span className="text-[#e0d6c8]">Data Structures & Algorithms</span>, <span className="text-[#e0d6c8]">React</span>, and full-stack web applications.
            </p>

            {/* Quick Metadata Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs text-[#8a8a8a] font-mono">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#222222]">
                <MapPin className="w-3.5 h-3.5 text-[#b89b72]" />
                <span>Lucknow & Varanasi, India</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#222222]">
                <GraduationCap className="w-3.5 h-3.5 text-[#b89b72]" />
                <span>MCA (2023 - Present)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111111] border border-[#222222]">
                <Briefcase className="w-3.5 h-3.5 text-[#b89b72]" />
                <span>Samsung & Coding Blocks Intern</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-3 flex flex-wrap gap-3.5">
              <a
                id="hero-cta-projects"
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] font-semibold text-sm sm:text-base tracking-wide shadow-lg shadow-[#b89b72]/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                id="hero-cta-resume"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141414] hover:bg-[#1e1e1e] text-[#f2f2f2] font-medium text-sm sm:text-base border border-[#2c2c2c] hover:border-[#b89b72]/40 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#b89b72]" />
                <span>View Full Resume</span>
              </button>

              <a
                id="hero-cta-contact"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0e0e0e] hover:bg-[#161616] text-[#8a8a8a] hover:text-[#f2f2f2] font-medium text-sm sm:text-base border border-[#222222] transition-all"
              >
                <Mail className="w-4 h-4 text-[#8a8a8a]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Direct Links */}
            <div className="pt-2 flex items-center gap-4 text-sm text-[#8a8a8a]">
              <span className="font-mono text-xs uppercase tracking-wider text-[#666666]">Connect:</span>
              
              <a
                id="hero-social-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#a8a8a8] hover:text-[#f2f2f2] transition-colors font-mono text-xs"
              >
                <Github className="w-4 h-4 text-[#b89b72]" />
                <span className="hover:underline">GitHub</span>
              </a>

              <span className="text-[#333333]">•</span>

              <a
                id="hero-social-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#a8a8a8] hover:text-[#f2f2f2] transition-colors font-mono text-xs"
              >
                <Linkedin className="w-4 h-4 text-[#b89b72]" />
                <span className="hover:underline">LinkedIn</span>
              </a>

              <span className="text-[#333333]">•</span>

              <button
                id="hero-copy-email-btn"
                onClick={copyEmail}
                className="flex items-center gap-1.5 text-[#a8a8a8] hover:text-[#cbb493] transition-colors font-mono text-xs"
                title="Click to copy email"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#b89b72]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy Email'}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Terminal / Developer Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0c0c0c]/90 border border-[#222222] shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080808] border-b border-[#222222]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3a3a3a]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#504a3e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#b89b72]" />
                  <span className="ml-2 text-xs font-mono text-[#8a8a8a] flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#b89b72]" />
                    developer_profile.ts
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveCodeTab('profile')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase transition-colors ${
                      activeCodeTab === 'profile' 
                        ? 'bg-[#221e17] text-[#cbb493] border border-[#b89b72]/40' 
                        : 'text-[#666666] hover:text-[#a8a8a8]'
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('skills')}
                    className={`px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wider uppercase transition-colors ${
                      activeCodeTab === 'skills' 
                        ? 'bg-[#221e17] text-[#cbb493] border border-[#b89b72]/40' 
                        : 'text-[#666666] hover:text-[#a8a8a8]'
                    }`}
                  >
                    Stack
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs sm:text-sm text-[#d4d4d4] leading-relaxed overflow-x-auto bg-[#0a0a0a]">
                {activeCodeTab === 'profile' ? (
                  <pre className="text-[#d4d4d4]">
                    <code>
<span className="text-[#b89b72]">const</span> <span className="text-[#e6dfd3]">developer</span>: <span className="text-[#cbb493]">SoftwareEngineer</span> = &#123;{'\n'}
{'  '}name: <span className="text-[#a3b899]">"{PERSONAL_INFO.name}"</span>,{'\n'}
{'  '}degree: <span className="text-[#a3b899]">"MCA @ University of Lucknow"</span>,{'\n'}
{'  '}experience: [{'\n'}
{'    '}&#123; role: <span className="text-[#a3b899]">"Intern"</span>, org: <span className="text-[#d8c3a5]">"Samsung Innovation Campus"</span> &#125;,{'\n'}
{'    '}&#123; role: <span className="text-[#a3b899]">"Summer Intern"</span>, org: <span className="text-[#d8c3a5]">"Coding Blocks"</span> &#125;{'\n'}
{'  '}],{'\n'}
{'  '}coreFocus: [<span className="text-[#a3b899]">"Full-Stack Web"</span>, <span className="text-[#a3b899]">"Java DSA"</span>, <span className="text-[#a3b899]">"React"</span>],{'\n'}
{'  '}location: <span className="text-[#a3b899]">"Lucknow, India"</span>,{'\n'}
{'  '}openForOpportunities: <span className="text-[#cbb493]">true</span>{'\n'}
&#125;;
                    </code>
                  </pre>
                ) : (
                  <pre className="text-[#d4d4d4]">
                    <code>
<span className="text-[#b89b72]">const</span> <span className="text-[#e6dfd3]">techArsenal</span> = &#123;{'\n'}
{'  '}languages: [<span className="text-[#d8c3a5]">"Java"</span>, <span className="text-[#d8c3a5]">"C/C++"</span>, <span className="text-[#d8c3a5]">"JavaScript"</span>, <span className="text-[#d8c3a5]">"SQL"</span>],{'\n'}
{'  '}frontend: [<span className="text-[#d8c3a5]">"React"</span>, <span className="text-[#d8c3a5]">"HTML5"</span>, <span className="text-[#d8c3a5]">"CSS3"</span>, <span className="text-[#d8c3a5]">"Tailwind"</span>],{'\n'}
{'  '}concepts: [<span className="text-[#a3b899]">"DSA"</span>, <span className="text-[#a3b899]">"OOP"</span>, <span className="text-[#a3b899]">"DBMS / CRUD"</span>],{'\n'}
{'  '}tools: [<span className="text-[#cbb493]">"Git"</span>, <span className="text-[#cbb493]">"GitHub"</span>, <span className="text-[#cbb493]">"VS Code"</span>],{'\n'}
{'  '}status: <span className="text-[#a3b899]">"Ready to build high impact software"</span>{'\n'}
&#125;;
                    </code>
                  </pre>
                )}
              </div>

              {/* Terminal Footer Quick Actions */}
              <div className="px-4 py-3 bg-[#080808] border-t border-[#222222] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#8a8a8a]">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#b89b72]" />
                  <span>git: main (clean)</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    id="hero-terminal-github-link"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8a8a8a] hover:text-[#cbb493] flex items-center gap-1 transition-colors"
                  >
                    <span>view repos</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Metrics Bar Under Terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3.5 rounded-xl bg-[#111111]/80 border border-[#222222] text-center">
                <div className="text-xl font-bold text-[#f2f2f2] font-mono">2</div>
                <div className="text-[11px] text-[#8a8a8a] uppercase tracking-wider font-mono mt-0.5">Internships</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111111]/80 border border-[#222222] text-center">
                <div className="text-xl font-bold text-[#cbb493] font-mono">4+</div>
                <div className="text-[11px] text-[#8a8a8a] uppercase tracking-wider font-mono mt-0.5">Real Projects</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#111111]/80 border border-[#222222] text-center">
                <div className="text-xl font-bold text-[#e6dfd3] font-mono">MCA</div>
                <div className="text-[11px] text-[#8a8a8a] uppercase tracking-wider font-mono mt-0.5">Univ of Lucknow</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
