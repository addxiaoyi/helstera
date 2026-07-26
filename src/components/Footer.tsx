import React from 'react';
import { PageView } from '../types';
import { ShieldCheck, Zap, Globe, FileText, Lock, Send, MessageSquare, Twitter, Github } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
  openApiKeyModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setCurrentView,
  openContractModal,
  openApiKeyModal
}) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F8F7F4] border-t border-[#1C1C1C]/15 text-[#1C1C1C]/70 pt-16 pb-12 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <span className="font-serif-title text-3xl italic font-semibold text-[#1C1C1C] tracking-tight group-hover:text-[#C73E28] transition-colors">
                Helstera
              </span>
            </div>

            <p className="text-[#1C1C1C]/70 text-xs leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            {/* Compliance Badge Box */}
            <div className="p-3 bg-white rounded-lg border border-[#1C1C1C]/10 space-y-1 max-w-sm shadow-2xs">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#C73E28] font-mono-tag font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C73E28]" /> Pilot Zone Authorized
                </span>
                <span className="text-[#1C1C1C] font-mono-tag font-semibold">99.9% SLA</span>
              </div>
              <p className="text-[10px] text-[#1C1C1C]/60">
                Formal Commercial Paper Contracts & DPA Available for Global Enterprises
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#1C1C1C]/20 text-[#1C1C1C]/70 hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#1C1C1C]/20 text-[#1C1C1C]/70 hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-[#1C1C1C]/20 text-[#1C1C1C]/70 hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform & API */}
          <div className="space-y-3">
            <div className="font-mono-tag text-xs font-semibold uppercase text-[#1C1C1C] tracking-wider">{t.footer.colPlatform}</div>
            <ul className="space-y-2 text-[#1C1C1C]/70 text-xs">
              <li>
                <button onClick={() => setCurrentView('home')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('pricing')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.pricing}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('docs')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.docs}
                </button>
              </li>
              <li>
                {openApiKeyModal && (
                  <button onClick={openApiKeyModal} className="text-[#C73E28] font-mono-tag font-bold hover:underline transition cursor-pointer">
                    {t.nav.getApiKey}
                  </button>
                )}
              </li>
            </ul>
          </div>

          {/* Column 3: Compliance & Legal */}
          <div className="space-y-3">
            <div className="font-mono-tag text-xs font-semibold uppercase text-[#1C1C1C] tracking-wider">{t.footer.colCompliance}</div>
            <ul className="space-y-2 text-[#1C1C1C]/70 text-xs">
              <li>
                <button onClick={() => setCurrentView('compliance')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.compliance}
                </button>
              </li>
              <li>
                <button onClick={openContractModal} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.common.requestDpa}
                </button>
              </li>
              <li>
                <span className="text-[#1C1C1C]/50 cursor-default">Zero Data Retention (ZDR)</span>
              </li>
              <li>
                <span className="text-[#1C1C1C]/50 cursor-default">99.9% Uptime Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-3">
            <div className="font-mono-tag text-xs font-semibold uppercase text-[#1C1C1C] tracking-wider">{t.footer.colCompany}</div>
            <ul className="space-y-2 text-[#1C1C1C]/70 text-xs">
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('blog')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.blog}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('contact')} className="hover:text-[#C73E28] transition cursor-pointer">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1C1C1C]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#1C1C1C]/60 font-mono-tag">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-[#1C1C1C] cursor-pointer" onClick={() => setCurrentView('compliance')}>Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-[#1C1C1C] cursor-pointer" onClick={() => setCurrentView('compliance')}>Terms of Service</span>
            <span>•</span>
            <span className="hover:text-[#1C1C1C] cursor-pointer" onClick={openContractModal}>Data Processing Agreement (DPA)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
