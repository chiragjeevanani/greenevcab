import React, { useState } from 'react';
import { X, Send, Mail, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Early Access & App Launch',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: 'Early Access & App Launch',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative max-w-xl w-full bg-[#0D1B15] border border-[#39E58C]/40 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#07110D] hover:bg-[#39E58C] text-white hover:text-[#07110D] border border-[#1B3328] transition-colors flex items-center justify-center"
          aria-label="Close Contact Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#39E58C]/20 text-[#39E58C] flex items-center justify-center mx-auto border border-[#39E58C]/50 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-[#font-heading]">Message Received!</h3>
            <p className="text-sm text-[#9AA9A1] max-w-md mx-auto">
              Thank you for connecting with <span className="text-[#39E58C] font-semibold">{COMPANY_INFO.shortName}</span>. Our team will reach out to you shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-full bg-[#39E58C] text-[#07110D] font-bold text-xs hover:bg-[#19B86B] transition-colors"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] text-xs font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRE-LAUNCH ENQUIRY</span>
            </div>

            <h3 className="text-2xl font-extrabold text-white tracking-tight font-[#font-heading]">
              Get In Touch With <span className="text-gradient-green">Green EV Cab</span>
            </h3>

            <p className="text-xs text-[#9AA9A1] mt-1 mb-6">
              Connect with our launch team for early app access, corporate fleet inquiries, or charging hub partnerships.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-white mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07110D] border border-[#1B3328] focus:border-[#39E58C] text-white text-xs outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07110D] border border-[#1B3328] focus:border-[#39E58C] text-white text-xs outline-none transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07110D] border border-[#1B3328] focus:border-[#39E58C] text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1">Enquiry Type</label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07110D] border border-[#1B3328] focus:border-[#39E58C] text-white text-xs outline-none transition-colors"
                >
                  <option value="Early Access & App Launch">Early Access & App Launch Notifications</option>
                  <option value="Corporate & Business Fleet">Corporate & Business Fleet Solutions</option>
                  <option value="Highway Hub & Land Partnership">Highway Charging Hub Site Partnership</option>
                  <option value="EV Driver Fleet Onboarding">EV Driver & Cab Fleet Onboarding</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-white mb-1">Message / Requirements</label>
                <textarea
                  rows="3"
                  placeholder="Share any specific requirements or details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#07110D] border border-[#1B3328] focus:border-[#39E58C] text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#39E58C] to-[#19B86B] text-[#07110D] font-extrabold text-xs shadow-lg shadow-[#39E58C]/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Launch Enquiry</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-[#1B3328] flex items-center justify-between text-[11px] text-[#9AA9A1]">
              <span>Official Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-white font-mono hover:text-[#39E58C]">{COMPANY_INFO.email}</a></span>
              <span>{COMPANY_INFO.website}</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
