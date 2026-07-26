import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { CustomSelect } from './CustomSelect';
import { Key, Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface NavbarProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
  openApiKeyModal: () => void;
  currency: string;
  setCurrency: (curr: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  openContractModal,
  openApiKeyModal,
  currency,
  setCurrency
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, supportedLanguages, t } = useLanguage();

  // Monitor scroll depth for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'compliance', label: t.nav.compliance },
    { id: 'docs', label: t.nav.docs },
    { id: 'about', label: t.nav.about },
  ];

  const languageOptions = supportedLanguages.map((lang) => ({
    value: lang.code,
    label: `${lang.flag} ${lang.name}`,
  }));

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1C1C1C]/15 shadow-xs'
          : 'bg-[#F8F7F4]/80 backdrop-blur-sm border-b border-[#1C1C1C]/10'
      } text-[#1C1C1C]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-6">
        {/* Brand Identity */}
        <div
          onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
          className="flex items-center gap-2 cursor-pointer group shrink-0"
        >
          <span className="font-serif-title text-2xl sm:text-3xl italic font-semibold text-[#1C1C1C] tracking-tight group-hover:text-[#C73E28] transition-colors">
            Helstera
          </span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-mono-tag text-[0.72rem] uppercase tracking-wider whitespace-nowrap">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`relative py-1 transition-colors cursor-pointer whitespace-nowrap ${
                  isActive ? 'text-[#C73E28] font-bold' : 'text-[#1C1C1C]/65 hover:text-[#1C1C1C]'
                }`}
              >
                <span className="whitespace-nowrap">{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C73E28] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Controls */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0 font-mono-tag text-[0.7rem]">
          {/* Language Selector */}
          <div className="w-32">
            <CustomSelect
              size="sm"
              value={language}
              onChange={(val) => setLanguage(val as any)}
              options={languageOptions}
            />
          </div>

          {/* Compact Currency Switcher */}
          <div className="w-24">
            <CustomSelect
              size="sm"
              value={currency}
              onChange={setCurrency}
              options={[
                { value: 'USD', label: 'USD ($)' },
                { value: 'EUR', label: 'EUR (€)' },
                { value: 'JPY', label: 'JPY (¥)' }
              ]}
            />
          </div>

          <button
            onClick={openApiKeyModal}
            className="btn-editorial-primary py-2 px-3.5 text-xs whitespace-nowrap shrink-0"
          >
            {t.nav.getApiKey}
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <div className="w-28">
            <CustomSelect
              size="sm"
              value={language}
              onChange={(val) => setLanguage(val as any)}
              options={languageOptions}
            />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#1C1C1C]/20 text-[#1C1C1C] hover:bg-[#1C1C1C]/5 transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="sm:hidden bg-[#F8F7F4] border-b border-[#1C1C1C]/20 px-4 pt-3 pb-6 space-y-4 overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#1C1C1C]/10">
              <span className="text-[10px] font-mono-tag font-semibold text-[#1C1C1C]/60 flex items-center gap-1">
                <Globe className="w-3 h-3 text-[#C73E28]" />
                <span>{t.common.language} / {t.nav.currency}</span>
              </span>
              <div className="flex items-center gap-2">
                <div className="w-28">
                  <CustomSelect
                    size="sm"
                    value={currency}
                    onChange={setCurrency}
                    options={[
                      { value: 'USD', label: 'USD ($)' },
                      { value: 'EUR', label: 'EUR (€)' },
                      { value: 'JPY', label: 'JPY (¥)' }
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setCurrentView(item.id); setMobileMenuOpen(false); }}
                  className={`p-3 rounded-xl text-xs font-mono-tag uppercase tracking-wider text-left transition flex items-center justify-between cursor-pointer whitespace-nowrap ${
                    currentView === item.id
                      ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold shadow-sm'
                      : 'bg-white text-[#1C1C1C] border border-[#1C1C1C]/10 hover:border-[#1C1C1C]/30'
                  }`}
                >
                  <span className="whitespace-nowrap truncate">{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => { openContractModal(); setMobileMenuOpen(false); }}
                className="btn-editorial-outline flex-1 text-center justify-center py-2 text-xs"
              >
                DPA & SLA
              </button>
              <button
                onClick={() => { openApiKeyModal(); setMobileMenuOpen(false); }}
                className="btn-editorial-primary flex-1 text-center justify-center py-2 text-xs flex items-center gap-1.5"
              >
                <Key className="w-3.5 h-3.5" />
                <span>{t.nav.getApiKey}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};


