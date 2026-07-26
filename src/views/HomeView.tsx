import React, { useState } from 'react';
import { PageView } from '../types';
import { motion } from 'motion/react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useLanguage } from '../i18n/LanguageContext';
import { InteractiveRouteVisualizer } from '../components/InteractiveRouteVisualizer';
import { KeynoteScrollStory } from '../components/KeynoteScrollStory';
import { BentoFeatures } from '../components/BentoFeatures';
import { ModelComparisonTable } from '../components/ModelComparisonTable';
import { HowToBuySection } from '../components/HowToBuySection';
import { EnterpriseComplianceSection } from '../components/EnterpriseComplianceSection';
import { SavingsCalculator } from '../components/SavingsCalculator';
import { FaqAccordion } from '../components/FaqAccordion';
import { CommunityPartners } from '../components/CommunityPartners';
import { NumberTicker } from '../components/NumberTicker';
import { ScrollRevealSection } from '../components/ScrollRevealSection';
import { LiveGatewayPingModal } from '../components/LiveGatewayPingModal';
import { ScrollProgressTracker } from '../components/ScrollProgressTracker';
import { HorizontalMarqueeStream } from '../components/HorizontalMarqueeStream';
import { HorizontalComparisonSlider } from '../components/HorizontalComparisonSlider';
import { HorizontalDragCarousel } from '../components/HorizontalDragCarousel';
import { ExaggeratedShowcaseSection } from '../components/ExaggeratedShowcaseSection';
import { HorizontalSlideSection } from '../components/HorizontalSlideSection';
import { KineticText } from '../components/KineticText';
import {
  ShieldCheck,
  Zap,
  Key,
  ArrowRight,
  CheckCircle2,
  Lock,
  FileText,
  Server,
  Sparkles,
  Activity,
  ChevronRight,
  Play
} from 'lucide-react';

interface HomeViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
  openApiKeyModal: () => void;
  currency: string;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setCurrentView,
  openContractModal,
  openApiKeyModal,
  currency
}) => {
  const [isPingModalOpen, setIsPingModalOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToCalculator = () => {
    const el = document.getElementById('calculator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Framer Motion staggered variants for Hero section
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const heroChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <div className="space-y-24 pb-28 text-[#1C1C1C] bg-[#F8F7F4] selection:bg-[#C73E28] selection:text-white relative">
      {/* Scroll Progress Indicator for Desktop */}
      <ScrollProgressTracker />

      {/* 1. Hero Section (Editorial Luxury & Grid System) */}
      <section id="hero-section" className="relative pt-8 sm:pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-12 border-b border-[#1C1C1C]/15">

            {/* Left Hero Content - Editorial Layout */}
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 space-y-6"
            >
              {/* Serif Display Heading with Kinetic Character Depth Hierarchy */}
              <div className="space-y-4">
                <KineticText
                  text={t.hero.mainTitle}
                  type="words"
                  direction="left"
                  stagger={0.05}
                  highlightWords={['Global', 'reach.', '全球触达。', '到達力。']}
                  highlightClass="italic font-normal text-[#C73E28]"
                  as="h1"
                  className="font-serif-title text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.92] text-[#1C1C1C]"
                />
                <KineticText
                  text={t.hero.subtitle}
                  type="words"
                  direction="right"
                  stagger={0.02}
                  delay={0.18}
                  as="p"
                  className="font-sans text-base sm:text-lg text-[#1C1C1C]/80 leading-relaxed max-w-lg"
                />
              </div>

              {/* Editorial Stat Items Row */}
              <motion.div variants={heroChildVariants} className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[#1C1C1C]/10 my-4">
                <div className="space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statCost}</span>
                  <div className="font-mono-tag text-2xl font-semibold text-[#1C1C1C]">
                    <NumberTicker value={80} suffix="%" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statUptime}</span>
                  <div className="font-mono-tag text-2xl font-semibold text-[#1C1C1C]">
                    <NumberTicker value={99.9} decimals={1} suffix="%" />
                  </div>
                </div>
                <div className="space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statLatency}</span>
                  <div className="font-mono-tag text-lg font-semibold text-[#1C1C1C] pt-0.5">
                    DPA & SLA
                  </div>
                </div>
              </motion.div>

              {/* Main CTA Group */}
              <motion.div variants={heroChildVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={openApiKeyModal}
                  className="btn-editorial-primary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>{t.hero.primaryCta}</span>
                </button>

                <button
                  onClick={() => setIsPingModalOpen(true)}
                  className="btn-editorial-outline flex items-center justify-center gap-2 cursor-pointer border-[#C73E28]/40 text-[#C73E28] hover:bg-[#C73E28]/10"
                >
                  <Activity className="w-3.5 h-3.5 text-[#C73E28]" />
                  <span>{t.hero.testPing}</span>
                </button>

                <button
                  onClick={() => setCurrentView('pricing')}
                  className="btn-editorial-outline flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.hero.modelsRates}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1C1C1C]/60" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Hero Column: Bento-Style Visualization Block */}
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6"
            >
              <motion.div variants={heroChildVariants}>
                <InteractiveRouteVisualizer openApiKeyModal={openApiKeyModal} />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section (Pure Editorial Hairline Row) */}
      <ScrollRevealSection>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-b border-[#1C1C1C]/15 divide-y lg:divide-y-0 lg:divide-x divide-[#1C1C1C]/15"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="space-y-1 text-center lg:text-left lg:px-4"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">
              <NumberTicker value={80} prefix="Up to " suffix="%" duration={1.8} />
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">Cost Savings vs OpenAI</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">Pay-as-you-go per 1M tokens</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">
              <NumberTicker value={99.9} decimals={1} suffix="%" duration={2.0} />
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">Guaranteed Uptime SLA</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">Dedicated optical submarine lines</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#C73E28] font-mono-tag tracking-tight">
              <NumberTicker value={8} suffix=" Flagship" duration={1.2} />
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">Premier Chinese LLMs</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">DeepSeek, Qwen, GLM, MiniMax</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">Formal DPA</div>
            <div className="text-xs font-semibold text-[#1C1C1C]">& Commercial Paper Contracts</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">Authorized Legal Framework</div>
          </motion.div>
        </motion.div>
      </ScrollRevealSection>

      {/* Live Continuous Horizontal Marquee Stream */}
      <HorizontalMarqueeStream
        openApiKeyModal={openApiKeyModal}
        currency={currency}
      />

      {/* Exaggerated Promotional Standalone Site Showcase Section */}
      <HorizontalSlideSection direction="alternate" distance={140}>
        <ExaggeratedShowcaseSection
          openApiKeyModal={openApiKeyModal}
          openContractModal={openContractModal}
        />
      </HorizontalSlideSection>

      {/* 2.5 Keynote Scroll Narrative Storytelling (Jobs Design Philosophy) */}
      <HorizontalSlideSection direction="left" distance={120}>
        <div id="story-section">
          <KeynoteScrollStory
            openApiKeyModal={openApiKeyModal}
            openContractModal={openContractModal}
          />
        </div>
      </HorizontalSlideSection>

      {/* Interactive Horizontal Comparison Split View */}
      <HorizontalSlideSection direction="right" distance={120}>
        <HorizontalComparisonSlider
          openApiKeyModal={openApiKeyModal}
        />
      </HorizontalSlideSection>

      {/* 3. Why Helstera (Bento Grid) */}
      <ScrollRevealSection>
        <div id="features-section">
          <BentoFeatures
            openContractModal={openContractModal}
            openApiKeyModal={openApiKeyModal}
          />
        </div>
      </ScrollRevealSection>

      {/* Interactive Horizontal Drag/Swipe Carousel for Use Cases */}
      <HorizontalSlideSection direction="left" distance={140}>
        <HorizontalDragCarousel
          openApiKeyModal={openApiKeyModal}
          openContractModal={openContractModal}
        />
      </HorizontalSlideSection>

      {/* 4. Supported Models */}
      <ScrollRevealSection>
        <div id="models-section">
          <ModelComparisonTable
            openApiKeyModal={openApiKeyModal}
            currency={currency}
          />
        </div>
      </ScrollRevealSection>

      {/* 5. How It Works (4-Step Flow) */}
      <ScrollRevealSection>
        <HowToBuySection
          openApiKeyModal={openApiKeyModal}
          openContractModal={openContractModal}
        />
      </ScrollRevealSection>

      {/* 6. Savings Calculator */}
      <ScrollRevealSection>
        <div id="calculator-section">
          <SavingsCalculator
            onNavigateToPricing={() => setCurrentView('pricing')}
            currency={currency}
            openApiKeyModal={openApiKeyModal}
          />
        </div>
      </ScrollRevealSection>

      {/* 7. Compliance Section */}
      <ScrollRevealSection>
        <div id="compliance-section">
          <EnterpriseComplianceSection openContractModal={openContractModal} />
        </div>
      </ScrollRevealSection>

      {/* 8. Ecosystem Partners */}
      <ScrollRevealSection>
        <CommunityPartners />
      </ScrollRevealSection>

      {/* 9. FAQ Section */}
      <ScrollRevealSection>
        <div id="faq-section">
          <FaqAccordion
            openContractModal={openContractModal}
            openApiKeyModal={openApiKeyModal}
          />
        </div>
      </ScrollRevealSection>

      {/* 10. Final CTA Banner (Pure Editorial Section) */}
      <div className="py-12 border-t border-b border-[#1C1C1C]/15 text-center space-y-6">
        <div className="space-y-3 max-w-2xl mx-auto">
          <KineticText
            text="Ready to Upgrade Your AI Compute Infrastructure?"
            type="words"
            direction="left"
            stagger={0.04}
            as="h2"
            className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
          />
          <KineticText
            text="Join thousands of global developers and tech enterprises accessing flagship LLMs with full legal compliance and unbeatable unit economics."
            type="words"
            direction="right"
            stagger={0.02}
            delay={0.15}
            as="p"
            className="text-sm sm:text-base text-[#1C1C1C]/75 font-sans"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={openApiKeyModal}
            className="btn-editorial-primary w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <Key className="w-4 h-4" />
            <span>Request API Key</span>
          </button>

          <button
            onClick={openContractModal}
            className="btn-editorial-outline w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Request Commercial DPA</span>
          </button>
        </div>
      </div>

      {/* Interactive Live Gateway Diagnostic Ping Modal */}
      <LiveGatewayPingModal
        isOpen={isPingModalOpen}
        onClose={() => setIsPingModalOpen(false)}
        openApiKeyModal={openApiKeyModal}
      />

    </div>
  );
};
