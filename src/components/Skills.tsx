import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Binary, 
  Wrench, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Layout':
        return Layout;
      case 'Binary':
        return Binary;
      case 'Wrench':
        return Wrench;
      default:
        return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#080808] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
            Skills, Frameworks & Tooling
          </h2>
          <p className="text-[#8a8a8a] text-base sm:text-lg mt-2 font-light leading-relaxed">
            A comprehensive overview of my programming proficiencies, web technologies, and developer tooling.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const Icon = getCategoryIcon(category.iconName);
            return (
              <div
                key={catIdx}
                id={`skill-category-${catIdx}`}
                className="p-6 sm:p-7 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-sm space-y-6 hover:border-[#38332a] transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#1a1714] border border-[#b89b72]/30 flex items-center justify-center text-[#cbb493]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">{category.title}</h3>
                      <span className="text-xs text-[#8a8a8a] font-mono">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skills List in Category */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      id={`skill-item-${catIdx}-${sIdx}`}
                      className="p-3.5 rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] hover:border-[#2d2820] transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-[#e6dfd3] text-sm">{skill.name}</span>
                        <span className="text-[11px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-[#1a1714] text-[#cbb493] border border-[#b89b72]/30">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Core Mindset & Highlights Bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-[#0f0f0f] border border-[#222222] text-center space-y-1.5">
            <span className="text-xs font-mono text-[#cbb493] uppercase tracking-wider font-semibold">Continuous Learner</span>
            <p className="text-xs text-[#8a8a8a] font-light">Quick to adapt to new frameworks, libraries, and design patterns.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#0f0f0f] border border-[#222222] text-center space-y-1.5">
            <span className="text-xs font-mono text-[#cbb493] uppercase tracking-wider font-semibold">Clean Code & OOP</span>
            <p className="text-xs text-[#8a8a8a] font-light">Committed to readable, modular, and maintainable software architecture.</p>
          </div>
          <div className="p-5 rounded-xl bg-[#0f0f0f] border border-[#222222] text-center space-y-1.5">
            <span className="text-xs font-mono text-[#cbb493] uppercase tracking-wider font-semibold">Problem Solver</span>
            <p className="text-xs text-[#8a8a8a] font-light">Focused on algorithmic efficiency, time complexity, and user delight.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
