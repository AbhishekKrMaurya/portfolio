import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Code2,
  FileText
} from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="bg-[#080808] border-t border-[#1e1e1e] pt-12 pb-8 text-[#8a8a8a] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#1e1e1e]">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1a1714] border border-[#b89b72]/40 flex items-center justify-center text-[#cbb493] font-serif font-bold text-sm">
                AM
              </div>
              <span className="font-bold text-[#f2f2f2] text-base font-['Playfair_Display',serif]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-[#8a8a8a] max-w-sm font-light">
              Software Developer & MCA Student at University of Lucknow. Dedicated to building high-performance, elegant digital solutions.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono tracking-wider uppercase text-[#a8a8a8]">
            <a href="#about" className="hover:text-[#cbb493] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#cbb493] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#cbb493] transition-colors">Projects</a>
            <a href="#skills" className="hover:text-[#cbb493] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#cbb493] transition-colors">Education</a>
            <button 
              onClick={onOpenResume}
              className="hover:text-[#cbb493] text-[#a8a8a8] transition-colors uppercase"
            >
              Resume
            </button>
            <a href="#contact" className="hover:text-[#cbb493] transition-colors">Contact</a>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              id="footer-github-link"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0f0f0f] hover:bg-[#181818] text-[#8a8a8a] hover:text-[#cbb493] border border-[#222222] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              id="footer-linkedin-link"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0f0f0f] hover:bg-[#181818] text-[#8a8a8a] hover:text-[#cbb493] border border-[#222222] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              id="footer-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[#0f0f0f] hover:bg-[#181818] text-[#8a8a8a] hover:text-[#cbb493] border border-[#222222] transition-colors"
              aria-label="Email Abhishek"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1a1714] hover:bg-[#25201a] text-[#cbb493] border border-[#b89b72]/40 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8a8a8a] font-mono">
          <div>
            © {new Date().getFullYear()} Abhishek Kumar Maurya. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Sophisticated Engineering with React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
