import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { 
  GraduationCap, 
  Building, 
  Calendar, 
  MapPin, 
  BookOpen,
  Award
} from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#0a0a0a] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-[#8a8a8a] text-base sm:text-lg mt-2 font-light leading-relaxed">
            Formal computer applications degrees and academic foundations shaping my analytical and engineering principles.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              id={`edu-card-${idx}`}
              className="p-6 sm:p-7 rounded-2xl bg-[#0f0f0f] border border-[#222222] hover:border-[#38332a] transition-all space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-[#1a1714] text-[#cbb493] border border-[#b89b72]/30">
                  {edu.period}
                </span>
                {edu.scoreOrStatus && (
                  <span className="text-xs text-[#8a8a8a] font-mono">
                    {edu.scoreOrStatus}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">{edu.degree}</h3>
                <div className="text-sm font-medium text-[#cbb493] flex items-center gap-1.5 mt-1">
                  <Building className="w-4 h-4 text-[#b89b72]" />
                  <span>{edu.institution}</span>
                </div>
                <div className="text-xs text-[#8a8a8a] flex items-center gap-1 mt-1 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {edu.details && (
                <p className="text-xs sm:text-sm text-[#a8a8a8] leading-relaxed pt-3 border-t border-[#1e1e1e] font-light">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
