import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Code
} from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>(EXPERIENCES_DATA[0].id);

  return (
    <section id="experience" className="py-20 bg-[#080808] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">INTERNSHIPS & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
            Industry Experience & Hands-On Engineering
          </h2>
          <p className="text-[#8a8a8a] text-base sm:text-lg mt-3 font-light leading-relaxed">
            Real-world software development internships where I delivered full-stack web applications, 
            designed secure workflows, and strengthened core algorithmic capabilities.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Experience List Selector (Left) */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCES_DATA.map((exp) => {
              const isSelected = selectedExperience === exp.id;
              return (
                <button
                  key={exp.id}
                  id={`exp-card-${exp.id}`}
                  onClick={() => setSelectedExperience(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all border ${
                    isSelected 
                      ? 'bg-[#14120e] border-[#b89b72] shadow-lg shadow-[#b89b72]/10 ring-1 ring-[#b89b72]/40' 
                      : 'bg-[#0f0f0f] border-[#222222] hover:bg-[#141414] hover:border-[#333333]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[#1a1714] text-[#cbb493] border border-[#b89b72]/30">
                      {exp.period}
                    </span>
                    <span className="text-xs text-[#8a8a8a] font-mono">{exp.type}</span>
                  </div>

                  <h3 className="font-['Playfair_Display',serif] font-bold text-[#f2f2f2] text-base transition-colors">
                    {exp.company}
                  </h3>
                  
                  <div className="text-xs text-[#cbb493] font-medium mt-0.5">
                    {exp.role}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8a8a8a] mt-2 font-mono">
                    <MapPin className="w-3 h-3 text-[#666666]" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}

            {/* Career Note Card */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-[#181510] to-[#0f0f0f] border border-[#222222] text-xs text-[#8a8a8a] space-y-2">
              <div className="font-semibold text-[#e6dfd3] flex items-center gap-1.5 font-mono uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#b89b72]" />
                <span>Verified Credentials</span>
              </div>
              <p className="font-light leading-relaxed">
                Both internships involved direct technical project deliveries that were evaluated on architecture, 
                code quality, and presentation.
              </p>
            </div>
          </div>

          {/* Selected Experience Detail View (Right) */}
          <div className="lg:col-span-8">
            {EXPERIENCES_DATA.map((exp) => {
              if (exp.id !== selectedExperience) return null;
              return (
                <div 
                  key={exp.id}
                  id={`exp-details-${exp.id}`}
                  className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-xl space-y-6 animate-fadeIn"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222222]">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-[#cbb493] font-semibold uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <span className="text-[#444444]">•</span>
                        <span className="text-xs text-[#8a8a8a] font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#b89b72]" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[#cbb493] font-medium text-base mt-1">
                        <Building2 className="w-4 h-4 text-[#b89b72]" />
                        <span>{exp.company}</span>
                        <span className="text-[#444444]">•</span>
                        <span className="text-[#8a8a8a] text-sm flex items-center gap-1 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono uppercase text-[#8a8a8a] tracking-wider">
                      Key Contributions & Deliverables
                    </h4>
                    <div className="space-y-3">
                      {exp.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-[#cccccc] text-sm sm:text-base leading-relaxed font-light">
                          <CheckCircle2 className="w-5 h-5 text-[#b89b72] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies / Skills Gained */}
                  <div className="pt-4 border-t border-[#222222] space-y-3">
                    <h4 className="text-xs font-mono uppercase text-[#8a8a8a] tracking-wider">
                      Technologies & Competencies Exercised
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsGained.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg bg-[#141414] text-[#d4c3ab] text-xs font-mono border border-[#282828] flex items-center gap-1.5"
                        >
                          <Code className="w-3 h-3 text-[#b89b72]" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
