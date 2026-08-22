import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Code2, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenDeployGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222] shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            id="brand-logo"
            href="#home" 
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-[#b89b72] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2a241c] via-[#1a1714] to-[#0d0d0d] border border-[#b89b72]/40 flex items-center justify-center text-[#e8d7be] font-bold shadow-md shadow-black/60 group-hover:border-[#b89b72] transition-colors">
              <span className="font-['Playfair_Display',serif] text-lg font-bold tracking-tighter text-[#cbb493]">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Playfair_Display',serif] font-bold text-[#f2f2f2] group-hover:text-[#cbb493] transition-colors tracking-wide text-base sm:text-lg">
                Abhishek Maurya
              </span>
              <span className="text-[11px] text-[#8a8a8a] font-mono flex items-center gap-1.5 tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b89b72] animate-pulse"></span>
                Software Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-1 bg-[#111111]/80 p-1.5 rounded-full border border-[#222222] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all ${
                    isActive 
                      ? 'bg-[#b89b72] text-[#080808] font-semibold shadow-sm shadow-[#b89b72]/20' 
                      : 'text-[#999999] hover:text-[#f2f2f2] hover:bg-[#1c1c1c]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="btn-deploy-guide-nav"
              onClick={onOpenDeployGuide}
              className="text-xs font-mono text-[#8a8a8a] hover:text-[#e8d7be] bg-[#111111] hover:bg-[#181818] border border-[#222222] hover:border-[#b89b72]/40 px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
              title="Learn how to deploy on GitHub Pages"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#b89b72]" />
              <span>Go Live on GitHub</span>
            </button>

            <button
              id="btn-open-resume-nav"
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-[#d9d9d9] bg-[#141414] hover:bg-[#1e1e1e] border border-[#262626] hover:border-[#b89b72]/40 rounded-lg transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#b89b72]" />
              <span>Resume</span>
            </button>

            <a
              id="btn-github-nav"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#141414] hover:bg-[#1e1e1e] border border-[#262626] rounded-lg transition-all hover:border-[#b89b72]/40"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="btn-linkedin-nav"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#141414] hover:bg-[#1e1e1e] border border-[#262626] rounded-lg transition-all hover:border-[#b89b72]/40"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="btn-hire-me-nav"
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#080808] bg-[#b89b72] hover:bg-[#cbb493] rounded-lg shadow-sm shadow-[#b89b72]/20 transition-all hover:scale-[1.02]"
            >
              <span>Get in Touch</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="btn-open-resume-mobile-header"
              onClick={onOpenResume}
              className="p-2 text-xs text-[#cbb493] bg-[#141414] border border-[#2a2a2a] rounded-lg flex items-center gap-1 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#b89b72]" />
              <span>CV</span>
            </button>
            <button
              id="btn-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#141414] border border-[#2a2a2a] focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden bg-[#0a0a0a]/95 border-b border-[#222222] px-4 pt-3 pb-6 space-y-3 backdrop-blur-xl mt-2">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs uppercase tracking-wider font-medium text-[#c0c0c0] bg-[#121212] border border-[#222222] hover:bg-[#b89b72] hover:text-[#080808] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#222222] flex flex-col gap-2">
            <button
              id="btn-mobile-resume"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#181818] text-[#f2f2f2] rounded-lg text-xs font-semibold tracking-wider uppercase border border-[#2c2c2c]"
            >
              <FileText className="w-4 h-4 text-[#b89b72]" />
              <span>View Full Resume</span>
            </button>

            <button
              id="btn-mobile-deploy"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#121212] text-[#8a8a8a] hover:text-[#f2f2f2] rounded-lg text-xs font-medium border border-[#222222]"
            >
              <Sparkles className="w-4 h-4 text-[#b89b72]" />
              <span>How to Host on GitHub</span>
            </button>

            <div className="flex gap-2">
              <a
                id="btn-mobile-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#121212] text-[#8a8a8a] border border-[#222222] rounded-lg text-xs font-mono"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                id="btn-mobile-linkedin"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-[#121212] text-[#8a8a8a] border border-[#222222] rounded-lg text-xs font-mono"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
