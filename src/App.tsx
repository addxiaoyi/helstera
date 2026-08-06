import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { PageView } from './types';
import { SITE_CONFIG } from './config/siteConfig';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/LanguageContext';

import { HomeView } from './views/HomeView';
import { PricingView } from './views/PricingView';
import { ComplianceView } from './views/ComplianceView';
import { DocsView } from './views/DocsView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { ContactView } from './views/ContactView';

import { ContractModal } from './components/ContractModal';
import { ApiKeysModal } from './components/ApiKeysModal';
import { TokenBuyModal } from './components/TokenBuyModal';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [currency, setCurrency] = useState('USD');
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const navigateToAiSite = () => {
    window.location.assign(SITE_CONFIG.brand.applicationUrl);
  };

  // Apple-style Spring Damped Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8F7F4] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#C73E28] selection:text-white relative overflow-x-clip">
        {/* Editorial Terracotta Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#C73E28] z-[110] origin-left"
          style={{ scaleX }}
        />

        {/* Clean Subtle Background Paper Texture */}
        <div className="absolute inset-0 bg-[#F8F7F4] pointer-events-none z-0" />

        {/* Navigation - Sticky top bar fixed at viewport top */}
        <Navbar
          currentView={currentView}
          setCurrentView={(view) => {
            setCurrentView(view);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          openContractModal={navigateToAiSite}
          openApiKeyModal={navigateToAiSite}
          currency={currency}
          setCurrency={setCurrency}
        />

        {/* Main View Router */}
        <main className="flex-1 relative z-0 min-w-0">
          {currentView === 'home' && (
            <HomeView
              setCurrentView={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              openContractModal={navigateToAiSite}
              openApiKeyModal={navigateToAiSite}
              currency={currency}
            />
          )}

          {currentView === 'pricing' && (
            <PricingView
              setCurrentView={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              openContractModal={navigateToAiSite}
              openApiKeyModal={navigateToAiSite}
              currency={currency}
            />
          )}

          {currentView === 'compliance' && (
            <ComplianceView
              setCurrentView={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              openContractModal={navigateToAiSite}
            />
          )}

          {currentView === 'docs' && (
            <DocsView
              openApiKeyModal={navigateToAiSite}
            />
          )}

          {currentView === 'about' && (
            <AboutView
              setCurrentView={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              openContractModal={navigateToAiSite}
            />
          )}

          {currentView === 'blog' && (
            <BlogView
              setCurrentView={(view) => {
                setCurrentView(view);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              openContractModal={navigateToAiSite}
            />
          )}

          {currentView === 'contact' && (
            <ContactView
              openContractModal={navigateToAiSite}
            />
          )}
        </main>

        {/* Footer */}
        <div className="relative z-10">
          <Footer
            setCurrentView={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            openContractModal={navigateToAiSite}
            openApiKeyModal={navigateToAiSite}
          />
        </div>

        {/* Modals */}
        <ContractModal
          isOpen={isContractModalOpen}
          onClose={() => setIsContractModalOpen(false)}
        />

        <ApiKeysModal
          isOpen={isApiKeyModalOpen}
          onClose={() => setIsApiKeyModalOpen(false)}
          onNavigateToDocs={() => {
            setIsApiKeyModalOpen(false);
            setCurrentView('docs');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        <TokenBuyModal
          isOpen={isBuyModalOpen}
          onClose={() => setIsBuyModalOpen(false)}
          openApiKeyModal={navigateToAiSite}
        />
      </div>
    </LanguageProvider>
  );
}
