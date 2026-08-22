import React from 'react';
import { PERSONAL_INFO, EXPERIENCES_DATA, EDUCATION_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Calendar, 
  FileText,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-[#000000]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div 
        id="resume-modal-container"
        className="relative w-full max-w-4xl bg-[#0d0d0d] border border-[#222222] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#080808] border-b border-[#1e1e1e] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#1a1714] border border-[#b89b72]/30 flex items-center justify-center text-[#cbb493]">
              <FileText className="w-4 h-4" />
            </div>
            <span className="font-bold text-[#f2f2f2] text-sm sm:text-base font-['Playfair_Display',serif]">
              Curriculum Vitae — {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="btn-print-resume"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] text-xs font-mono uppercase tracking-wider font-semibold shadow-sm transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              id="btn-close-resume-modal"
              onClick={onClose}
              className="p-2 rounded-xl text-[#8a8a8a] hover:text-[#f2f2f2] hover:bg-[#161616] transition-colors border border-transparent hover:border-[#262626]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans printable-resume">
          
          {/* Resume Header */}
          <div className="text-center pb-6 border-b border-slate-300">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-slate-700 mt-0.5">
              Student / Software Developer
            </p>

            {/* Contact Details Grid */}
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-700" />
                {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-700" />
                {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
                {PERSONAL_INFO.location}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-700" />
                {PERSONAL_INFO.dob}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-1.5 font-medium">
              <span>Nationality: Indian</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-indigo-700 font-semibold">
                <Linkedin className="w-3.5 h-3.5" />
                linkedin.com/in/abhishek-maurya-25254b227
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-900 font-semibold">
                <Github className="w-3.5 h-3.5" />
                github.com/AbhishekKrMaurya
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="py-5 border-b border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2 font-mono">
              Profile Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
              Motivated MCA graduate with hands-on experience in web development and software engineering through
              internships at Coding Blocks and Samsung Innovation Campus. Proficient in C/C++, Java, JavaScript, and web
              technologies like HTML5, CSS3, React. Seeking an internship or entry-level role to apply my technical skills and
              contribute to innovative engineering projects.
            </p>
          </div>

          {/* Education Section */}
          <div className="py-5 border-b border-slate-200 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Education
            </h2>
            
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-950">Master of Computer Applications (MCA)</strong>
                  <span className="text-slate-700">, University of Lucknow, Lucknow</span>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  2023 – present | Lucknow, INDIA
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-950">Bachelor of Computer Applications (BCA, 2023)</strong>
                  <span className="text-slate-700">, School of Management Sciences</span>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  2020 – 2023 | Varanasi, INDIA
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-950">Intermediate (2020)</strong>
                  <span className="text-slate-700">, St. John's Hindi School</span>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  2020 | Varanasi, INDIA
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <div>
                  <strong className="text-slate-950">High School (2018)</strong>
                  <span className="text-slate-700">, St. John's Hindi School</span>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  2018 | Varanasi, INDIA
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-5 border-b border-slate-200 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Professional Experience
            </h2>

            {/* Samsung Innovation Campus */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <strong className="text-slate-950 text-xs sm:text-sm">INTERN, Samsung Innovation Campus</strong>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  08/2024 – 09/2024 | Lucknow, INDIA
                </div>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Led the development of a Crime Reporting System, focusing on building a user-friendly interface and implementing efficient back-end logic.</li>
                <li>Designed and implemented real-time crime reporting and data retrieval features, improving system performance, security, and data integrity.</li>
              </ul>
            </div>

            {/* Coding Blocks */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <strong className="text-slate-950 text-xs sm:text-sm">SUMMER INTERNSHIP, Coding Blocks</strong>
                </div>
                <div className="text-xs text-slate-600 font-medium sm:text-right">
                  07/2024 – 08/2024 | Lucknow, INDIA
                </div>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Gained hands-on experience in Data Structures and Algorithms (DSA) using Java, improving problem-solving and coding skills.</li>
                <li>Developed a functional portfolio website to showcase personal projects and skills, while also building a Canteen Management System that implemented CRUD operations, enhancing both web development knowledge and database management expertise.</li>
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="py-5 border-b border-slate-200 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Projects
            </h2>

            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <strong className="text-slate-950 text-xs sm:text-sm">Crime Reporting Portal</strong>
                <span className="text-xs text-slate-600 font-medium">08/2024 – 09/2024</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Developed a crime reporting portal for users to submit complaints and track case status online.</li>
                <li>Created an admin panel for managing reports, updating case progress, and improving response handling.</li>
              </ul>
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <strong className="text-slate-950 text-xs sm:text-sm">Canteen Snacks Booking and Availability System</strong>
                <span className="text-xs text-slate-600 font-medium">02/2023 – 08/2024</span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs sm:text-sm text-slate-700">
                <li>Developed an automated canteen system for snack booking with real-time stock updates, reducing errors and waste.</li>
                <li>Designed a staff dashboard for inventory and sales management with order confirmations to improve user experience.</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <div className="pt-5 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
              Skills
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-950 block mb-1">Programming Languages:</strong>
                <span className="text-slate-700">C/C++, Java, JavaScript, TypeScript</span>
              </div>
              <div>
                <strong className="text-slate-950 block mb-1">Web Development:</strong>
                <span className="text-slate-700">HTML5, CSS3, JavaScript, React, Tailwind CSS</span>
              </div>
              <div>
                <strong className="text-slate-950 block mb-1">Tools & Productivity:</strong>
                <span className="text-slate-700">Git/GitHub, VS Code, MS Word, Excel, PowerPoint</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#080808] border-t border-[#1e1e1e] flex items-center justify-between text-xs text-[#8a8a8a] font-mono">
          <span>Formatted from verified academic & internship credentials</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#161616] hover:bg-[#202020] text-[#f2f2f2] border border-[#262626] transition-colors uppercase tracking-wider text-xs"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
