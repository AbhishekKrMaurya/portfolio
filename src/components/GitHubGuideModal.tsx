import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  X, 
  Github, 
  Sparkles, 
  Terminal, 
  Copy, 
  Check, 
  Globe, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedStep, setCopiedStep] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, stepId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      id: "step1",
      title: "Step 1: Create a new repository on GitHub",
      description: "Go to your GitHub profile and create a public repo named 'portfolio' or 'abhishek-portfolio'.",
      command: `https://github.com/new`
    },
    {
      id: "step2",
      title: "Step 2: Push code to your GitHub repo",
      description: "In your project folder, link and push the code directly to your GitHub account:",
      command: `git init\ngit add .\ngit commit -m "Initial commit of Abhishek Maurya portfolio"\ngit branch -M main\ngit remote add origin https://github.com/AbhishekKrMaurya/portfolio.git\ngit push -u origin main`
    },
    {
      id: "step3",
      title: "Step 3: Free 1-Click Deployment on Vercel / GitHub Pages",
      description: "Connect your GitHub repository to Vercel (https://vercel.com) or Netlify for free automatic HTTPS hosting, or deploy directly via GitHub Pages.",
      command: `npm run build`
    }
  ];

  return (
    <div 
      id="deploy-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#000000]/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0d0d0d] border border-[#222222] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#1e1e1e]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a1714] text-[#cbb493] flex items-center justify-center border border-[#b89b72]/30">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-['Playfair_Display',serif] text-[#f2f2f2]">
                Go Live with your GitHub
              </h3>
              <p className="text-xs text-[#b89b72] font-mono mt-0.5">
                Target: {PERSONAL_INFO.github}
              </p>
            </div>
          </div>

          <button
            id="btn-close-deploy-modal"
            onClick={onClose}
            className="p-2 text-[#8a8a8a] hover:text-[#f2f2f2] bg-[#161616] border border-[#262626] rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Introduction */}
        <p className="text-[#a8a8a8] text-sm leading-relaxed font-light">
          This portfolio is production-ready. You can deploy it to the web for free in under 2 minutes 
          and attach it to your GitHub profile:
        </p>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step) => (
            <div 
              key={step.id} 
              id={`deploy-${step.id}`}
              className="p-4 rounded-xl bg-[#080808] border border-[#1e1e1e] space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-[#f2f2f2]">{step.title}</h4>
                <button
                  onClick={() => copyToClipboard(step.command, step.id)}
                  className="inline-flex items-center gap-1 text-xs text-[#8a8a8a] hover:text-[#cbb493] font-mono uppercase tracking-wider"
                  title="Copy command"
                >
                  {copiedStep === step.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#b89b72]" />
                      <span className="text-[#cbb493]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-[#8a8a8a] font-light">{step.description}</p>

              <div className="bg-[#0f0f0f] p-2.5 rounded-lg border border-[#222222] font-mono text-xs text-[#cbb493] overflow-x-auto whitespace-pre">
                {step.command}
              </div>
            </div>
          ))}
        </div>

        {/* Hosting Suggestions */}
        <div className="p-4 rounded-xl bg-[#14120e] border border-[#b89b72]/30 space-y-2 text-xs text-[#a8a8a8]">
          <div className="font-semibold text-[#cbb493] flex items-center gap-1.5 font-mono uppercase tracking-wider">
            <Globe className="w-4 h-4 text-[#b89b72]" />
            <span>Recommended Free Hosting:</span>
          </div>
          <p className="font-light leading-relaxed">
            Simply connect your GitHub repo to <strong className="text-[#f2f2f2]">Vercel (vercel.com)</strong> or <strong className="text-[#f2f2f2]">Netlify (netlify.com)</strong>. 
            They will automatically build Vite and give you a free live URL (e.g. <code className="text-[#cbb493]">https://abhishekmaurya.vercel.app</code>).
          </p>
        </div>

        {/* Modal Actions */}
        <div className="pt-2 flex items-center justify-between">
          <a
            id="deploy-modal-github-btn"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#b89b72] hover:text-[#cbb493] font-mono uppercase tracking-wider"
          >
            <span>Visit your GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] text-xs font-mono uppercase tracking-wider font-semibold shadow-md transition-colors"
          >
            Got it, Let's Go!
          </button>
        </div>

      </div>
    </div>
  );
};
