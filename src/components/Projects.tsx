import React, { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  X, 
  Sparkles, 
  Code2, 
  Calendar, 
  Cpu,
  ArrowUpRight,
  ShieldAlert,
  Coffee,
  Globe,
  Binary
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'Systems', 'Frontend', 'Java & DSA'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === selectedCategory);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'crime-reporting-portal':
        return ShieldAlert;
      case 'canteen-management-system':
        return Coffee;
      case 'developer-portfolio-showcase':
        return Globe;
      case 'dsa-java-suite':
        return Binary;
      default:
        return Code2;
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span className="tracking-wider uppercase">PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
              Featured Engineering Projects
            </h2>
            <p className="text-[#8a8a8a] text-base sm:text-lg mt-2 font-light">
              Explore key applications built during internships and specialized coursework.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0f0f0f] p-1.5 rounded-xl border border-[#222222] self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1a1714] text-[#cbb493] border border-[#b89b72]/40 shadow-sm'
                    : 'text-[#8a8a8a] hover:text-[#f2f2f2] hover:bg-[#141414]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="group rounded-2xl bg-[#0f0f0f] border border-[#222222] hover:border-[#38332a] transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-black/60"
              >
                {/* Card Top Section */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-[#1a1714] border border-[#b89b72]/30 flex items-center justify-center text-[#cbb493] group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#cbb493] font-semibold block">
                          {project.category}
                        </span>
                        {project.associatedWith && (
                          <span className="text-xs text-[#8a8a8a] block font-medium">
                            {project.associatedWith}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-xs font-mono text-[#8a8a8a] bg-[#141414] px-2.5 py-1 rounded-md border border-[#222222]">
                      {project.duration}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] group-hover:text-[#cbb493] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#a8a8a8] text-sm mt-2 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-1">
                    {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#cccccc] leading-snug font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b89b72] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#161616] text-[#d4c3ab] text-[11px] font-mono border border-[#282828]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom / Actions */}
                <div className="px-6 py-4 bg-[#0a0a0a] border-t border-[#1e1e1e] flex items-center justify-between">
                  <button
                    id={`btn-details-${project.id}`}
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#cbb493] hover:text-[#e6dfd3] transition-colors"
                  >
                    <span>Architecture & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    id={`btn-github-${project.id}`}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#141414] hover:bg-[#1f1f1f] px-3 py-1.5 rounded-lg border border-[#222222] transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-3.5 h-3.5 text-[#b89b72]" />
                    <span>Source</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* GitHub Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181510] via-[#121212] to-[#0c0c0c] border border-[#b89b72]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1a1714] border border-[#b89b72]/30 flex items-center justify-center text-[#cbb493] shrink-0">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">Looking for more source code?</h4>
              <p className="text-xs sm:text-sm text-[#8a8a8a] mt-0.5 font-light">
                Check out all active repositories, algorithmic scripts, and ongoing projects on my GitHub.
              </p>
            </div>
          </div>
          <a
            id="projects-github-banner-cta"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] font-semibold text-xs font-mono tracking-wider uppercase transition-all shadow-md shrink-0"
          >
            <span>Visit github.com/AbhishekKrMaurya</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {activeModalProject && (
        <div 
          id="project-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="w-full max-w-2xl bg-[#0e0e0e] border border-[#222222] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#222222]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-semibold text-[#cbb493] uppercase tracking-wider">
                    {activeModalProject.category}
                  </span>
                  <span className="text-[#444444]">•</span>
                  <span className="text-xs text-[#8a8a8a] font-mono">{activeModalProject.duration}</span>
                </div>
                <h3 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">
                  {activeModalProject.title}
                </h3>
                {activeModalProject.associatedWith && (
                  <p className="text-xs text-[#cbb493] font-medium mt-1">
                    Associated with: {activeModalProject.associatedWith}
                  </p>
                )}
              </div>

              <button
                id="btn-close-project-modal"
                onClick={() => setActiveModalProject(null)}
                className="p-2 text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#161616] rounded-lg transition-colors border border-[#262626]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-[#8a8a8a] tracking-wider">Project Overview</h4>
              <p className="text-[#cccccc] text-sm sm:text-base leading-relaxed font-light">
                {activeModalProject.longDescription}
              </p>
            </div>

            {/* Key Architectural Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#8a8a8a] tracking-wider">Key Functional Modules</h4>
              <div className="space-y-2.5">
                {activeModalProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#cccccc] font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#b89b72] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats if available */}
            {activeModalProject.stats && (
              <div className="grid grid-cols-3 gap-3 pt-2">
                {activeModalProject.stats.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#080808] border border-[#222222] text-center">
                    <div className="text-xs text-[#8a8a8a] font-mono">{s.label}</div>
                    <div className="text-sm font-bold text-[#cbb493] font-mono mt-0.5">{s.value}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono uppercase text-[#8a8a8a] tracking-wider">Tech Stack & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#161616] text-[#d4c3ab] border border-[#282828] text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[#222222] flex items-center justify-end gap-3">
              <a
                id="modal-github-link"
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] font-semibold text-xs font-mono uppercase tracking-wider transition-colors shadow-md"
              >
                <Github className="w-4 h-4" />
                <span>Open in GitHub</span>
              </a>
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 rounded-xl bg-[#161616] text-[#8a8a8a] hover:text-[#f2f2f2] text-xs font-mono uppercase tracking-wider transition-colors border border-[#262626]"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
