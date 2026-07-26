import React, { useState } from 'react';
import { PageView } from '../types';
import { KineticText } from '../components/KineticText';
import {
  Mail,
  MessageSquare,
  Building,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  ArrowRight
} from 'lucide-react';

interface ContactViewProps {
  openContractModal: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ openContractModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'sales',
    estimatedMonthlyVolume: '50M',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1C1C1C]/15 text-[#C73E28] font-mono-tag text-xs font-semibold">
          <Mail className="w-3.5 h-3.5 text-[#C73E28]" />
          Enterprise Support & Sales [06]
        </span>
        <KineticText
          text="Talk to Our Enterprise Team"
          type="words"
          direction="left"
          stagger={0.04}
          as="h1"
          className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text="Whether you need an enterprise custom quote, legal DPA review, or dedicated high-QPS route allocation, our engineering and compliance leads are ready to assist."
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-b border-[#1C1C1C]/15 py-8">
        {/* Left Form */}
        <div className="lg:col-span-7 bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-sans">
              <div className="w-14 h-14 rounded-full bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#C73E28] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">Inquiry Received</h3>
              <p className="text-xs text-[#1C1C1C]/75 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#C73E28] font-semibold">{formData.name}</span>. An enterprise executive and legal specialist will respond to <span className="text-[#C73E28] font-semibold">{formData.email}</span> within 2 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-editorial-outline text-xs mt-4 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
              <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C] mb-2">Send an Enterprise Inquiry</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1C1C1C] font-medium mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-3.5 py-2.5 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none focus:border-[#C73E28]"
                  />
                </div>
                <div>
                  <label className="block text-[#1C1C1C] font-medium mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3.5 py-2.5 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none focus:border-[#C73E28]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#1C1C1C] font-medium mb-1">Company / Project Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nexus AI Inc."
                    className="w-full px-3.5 py-2.5 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none focus:border-[#C73E28]"
                  />
                </div>
                <div>
                  <label className="block text-[#1C1C1C] font-medium mb-1">Topic / Inquiry Area</label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none cursor-pointer"
                  >
                    <option value="sales">Enterprise Volume Pricing</option>
                    <option value="dpa">Legal DPA & Compliance Contract</option>
                    <option value="qps">Dedicated High-QPS Route Allocation</option>
                    <option value="custom">Custom Invoicing / NET30 PO</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#1C1C1C] font-medium mb-1">Estimated Monthly Token Volume</label>
                <select
                  value={formData.estimatedMonthlyVolume}
                  onChange={(e) => setFormData({ ...formData, estimatedMonthlyVolume: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none cursor-pointer"
                >
                  <option value="10M">10 Million - 50 Million Tokens</option>
                  <option value="50M">50 Million - 250 Million Tokens</option>
                  <option value="1B">250 Million - 1 Billion Tokens</option>
                  <option value="1B+">1 Billion+ Tokens (Custom Compute Hub)</option>
                </select>
              </div>

              <div>
                <label className="block text-[#1C1C1C] font-medium mb-1">Message or Specific Requirements</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your current setup, target models, latency requirements, or legal compliance needs..."
                  className="w-full p-3 bg-[#F8F7F4] border border-[#1C1C1C]/15 rounded-xl text-[#1C1C1C] font-mono-tag focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-editorial-primary text-xs py-3 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enterprise Inquiry</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Info Details */}
        <div className="lg:col-span-5 space-y-6 font-sans">
          <div className="bg-white border border-[#1C1C1C]/20 rounded-2xl p-6 space-y-4">
            <span className="font-mono-tag text-xs text-[#C73E28] font-bold uppercase tracking-wider">[DIRECT CHANNELS]</span>
            <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C]">Official Response SLA</h3>

            <div className="space-y-3 text-xs text-[#1C1C1C]/80">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1C1C]">2-Hour SLA for Enterprise</p>
                  <p className="text-[#1C1C1C]/60 text-[11px]">Business hours: 09:00 - 21:00 UTC+8 (Mon-Sun)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1C1C]">Direct Email</p>
                  <p className="font-mono-tag text-[#C73E28]">enterprise@helstera.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="w-4 h-4 text-[#C73E28] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1C1C]">Shantou Experimental Zone Hub</p>
                  <p className="text-[#1C1C1C]/60 text-[11px]">Overseas Chinese Digital Economy Headquarters, Shantou Pilot Zone, Guangdong</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1C1C1C]/10">
              <button
                onClick={openContractModal}
                className="w-full btn-editorial-outline text-xs py-2.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#C73E28]" />
                <span>Request B2B DPA Contract</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
