import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Linkedin, 
  Github, 
  MessageSquare, 
  Sparkles,
  Calendar,
  Clock
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subjectEncoded = encodeURIComponent(formData.subject || `Inquiry from Portfolio — ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Abhishek,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );
    
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Open default mail client
    window.location.href = mailtoUrl;
    
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-[#080808] relative border-t border-[#1e1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span className="tracking-wider uppercase">GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] tracking-tight">
            Let's Discuss New Opportunities
          </h2>
          <p className="text-[#8a8a8a] text-base sm:text-lg mt-2 font-light leading-relaxed">
            I am actively looking for software development roles, internships, and collaborative engineering opportunities.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-sm space-y-6">
              <h3 className="text-lg font-['Playfair_Display',serif] font-bold text-[#f2f2f2]">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[#1e1e1e] flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-lg bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a8a8a]">Email Address</div>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`} 
                        className="font-medium text-[#f2f2f2] hover:text-[#cbb493] transition-colors truncate block text-xs sm:text-sm font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    id="contact-copy-email-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 text-[#8a8a8a] hover:text-[#cbb493] rounded-lg hover:bg-[#161616] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-[#b89b72]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[#1e1e1e] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a8a8a]">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${PERSONAL_INFO.phone}`} 
                        className="font-medium text-[#f2f2f2] hover:text-[#cbb493] transition-colors text-xs sm:text-sm font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    id="contact-copy-phone-btn"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 text-[#8a8a8a] hover:text-[#cbb493] rounded-lg hover:bg-[#161616] transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#b89b72]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl bg-[#080808] border border-[#1e1e1e] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1a1714] border border-[#b89b72]/30 text-[#cbb493] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#8a8a8a]">Location</div>
                    <div className="font-medium text-[#f2f2f2] text-xs sm:text-sm font-mono">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles Grid */}
              <div className="pt-4 border-t border-[#222222] space-y-2">
                <div className="text-xs font-mono text-[#8a8a8a] uppercase tracking-wider">Social & Code Profiles</div>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    id="contact-social-github"
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#080808] border border-[#1e1e1e] hover:border-[#b89b72]/40 hover:bg-[#141414] text-[#f2f2f2] text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4 text-[#b89b72]" />
                    <span>GitHub</span>
                  </a>

                  <a
                    id="contact-social-linkedin"
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#080808] border border-[#1e1e1e] hover:border-[#b89b72]/40 hover:bg-[#141414] text-[#f2f2f2] text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-[#b89b72]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Quick response badge */}
            <div className="p-4 rounded-xl bg-[#0f0f0f] border border-[#222222] flex items-center gap-3 text-xs text-[#8a8a8a]">
              <Clock className="w-4 h-4 text-[#b89b72] shrink-0" />
              <span>Typical response time: Within 24 hours via email or LinkedIn.</span>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-[#222222] shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-['Playfair_Display',serif] font-bold text-[#f2f2f2] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[#b89b72]" />
                  <span>Send a Direct Message</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#8a8a8a] mt-1 font-light">
                  Fill out the form below to draft an email directly to my inbox.
                </p>
              </div>

              {sentSuccess && (
                <div className="p-4 rounded-xl bg-[#1c1813] border border-[#b89b72]/40 text-[#cbb493] text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
                  <Check className="w-4 h-4 text-[#b89b72] shrink-0" />
                  <span>Your email client was opened with the message draft! Thank you for connecting.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#8a8a8a] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-[#222222] text-[#f2f2f2] text-sm focus:outline-none focus:ring-1 focus:ring-[#b89b72] focus:border-[#b89b72] transition-all placeholder:text-[#555555]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#8a8a8a] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-[#222222] text-[#f2f2f2] text-sm focus:outline-none focus:ring-1 focus:ring-[#b89b72] focus:border-[#b89b72] transition-all placeholder:text-[#555555]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase tracking-wider text-[#8a8a8a] mb-1.5">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Software Developer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-[#222222] text-[#f2f2f2] text-sm focus:outline-none focus:ring-1 focus:ring-[#b89b72] focus:border-[#b89b72] transition-all placeholder:text-[#555555]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#8a8a8a] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Write your message or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080808] border border-[#222222] text-[#f2f2f2] text-sm focus:outline-none focus:ring-1 focus:ring-[#b89b72] focus:border-[#b89b72] transition-all placeholder:text-[#555555] resize-y"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-[#8a8a8a] font-mono">
                    Dispatches directly to {PERSONAL_INFO.email}
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#b89b72] hover:bg-[#cbb493] text-[#080808] text-xs font-mono tracking-wider uppercase font-semibold shadow-md shadow-[#b89b72]/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
