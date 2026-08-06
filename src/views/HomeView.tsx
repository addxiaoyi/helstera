import React, { useState } from 'react';
import { PageView } from '../types';
import { motion } from 'motion/react';
import { MODELS_DATA } from '../data/modelsData';
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

const MODEL_ROUTE_COUNT = MODELS_DATA.length;
const MODEL_FAMILIES = [...new Set(MODELS_DATA.map((model) => model.provider))];
const MODEL_FAMILY_COUNT = MODEL_FAMILIES.length;
const MODEL_FAMILY_LABEL = MODEL_FAMILIES.join(', ');

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
    <div className="min-w-0 overflow-x-clip space-y-24 pb-28 text-[#1C1C1C] bg-[#F8F7F4] selection:bg-[#C73E28] selection:text-white relative">
      {/* Scroll Progress Indicator for Desktop */}
      <ScrollProgressTracker />

      {/* 1. Hero Section (Editorial Luxury & Grid System) */}
      <section id="hero-section" className="relative pt-8 sm:pt-12 lg:pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#1C1C1C]/15 min-w-0">

            {/* Left Hero Content - Editorial Layout */}
            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-6 min-w-0 space-y-6"
            >
              {/* Serif Display Heading with Kinetic Character Depth Hierarchy */}
              <div className="space-y-4">
                <KineticText
                  text={t.hero.mainTitle}
                  type="words"
                  direction="left"
                  stagger={0.05}
                  highlightWords={[
                    'frontier',
                    'governed',
                    'route.',
                    '前沿模型',
                    '路由。',
                    '先端モデル。',
                    'ルート。',
                    'Modelos',
                    'ruta',
                    'Aktuelle',
                    'Route.',
                    'Modèles',
                    'route',
                  ]}
                  highlightClass="italic font-normal text-[#C73E28]"
                  as="h1"
                  className="font-serif-title text-4xl sm:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.98] text-[#1C1C1C] break-words"
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
              <motion.div variants={heroChildVariants} className="grid grid-cols-1 min-[360px]:grid-cols-3 gap-3 py-4 border-t border-b border-[#1C1C1C]/10 my-4">
                <div className="min-w-0 space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statRoutes}</span>
                  <div className="font-mono-tag text-2xl font-semibold text-[#1C1C1C]">
                    <NumberTicker value={MODEL_ROUTE_COUNT} suffix={` ${t.hero.routeUnit}`} />
                  </div>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statRateCard}</span>
                  <div className="font-mono-tag text-2xl font-semibold text-[#1C1C1C]">
                    {t.hero.liveValue}
                  </div>
                </div>
                <div className="min-w-0 space-y-0.5">
                  <span className="font-mono-tag text-[0.65rem] text-[#1C1C1C]/50 block">{t.hero.statTerms}</span>
                  <div className="font-mono-tag text-lg font-semibold text-[#1C1C1C] pt-0.5">
                    {t.hero.contractValue}
                  </div>
                </div>
              </motion.div>

              {/* Main CTA Group */}
              <motion.div variants={heroChildVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={openApiKeyModal}
                  className="btn-editorial-primary w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Key className="w-3.5 h-3.5" />
                  <span>{t.hero.primaryCta}</span>
                </button>

                <button
                  onClick={() => setIsPingModalOpen(true)}
                  className="btn-editorial-outline w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer border-[#C73E28]/40 text-[#C73E28] hover:bg-[#C73E28]/10"
                >
                  <Activity className="w-3.5 h-3.5 text-[#C73E28]" />
                  <span>{t.hero.testPing}</span>
                </button>

                <button
                  onClick={() => setCurrentView('pricing')}
                  className="btn-editorial-outline w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
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
              className="lg:col-span-6 min-w-0"
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
          className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-6 py-8 border-t border-b border-[#1C1C1C]/15 divide-y lg:divide-y-0 lg:divide-x divide-[#1C1C1C]/15"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="min-w-0 space-y-1 text-center lg:text-left lg:px-4"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">
              <NumberTicker value={MODEL_ROUTE_COUNT} suffix={` ${t.hero.routeUnit}`} duration={1.2} />
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">{t.hero.statRoutes}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag break-words">{MODEL_FAMILY_LABEL}</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="min-w-0 space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">
              {t.hero.liveValue}
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">{t.hero.statRateCard}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">{t.hero.contractReview}</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="min-w-0 space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#C73E28] font-mono-tag tracking-tight">
              <NumberTicker value={MODEL_FAMILY_COUNT} suffix={` ${t.hero.familyUnit}`} duration={1.2} />
            </div>
            <div className="text-xs font-semibold text-[#1C1C1C]">{t.hero.familiesLabel}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag break-words">{MODEL_FAMILY_LABEL}</div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
            }}
            className="min-w-0 space-y-1 text-center lg:text-left lg:px-4 pt-4 lg:pt-0"
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#1C1C1C] font-mono-tag tracking-tight">{t.hero.contractValue}</div>
            <div className="text-xs font-semibold text-[#1C1C1C]">{t.hero.contractSubline}</div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-mono-tag">{t.hero.contractReview}</div>
          </motion.div>
        </motion.div>
      </ScrollRevealSection>

      {/* Live Continuous Horizontal Marquee Stream */}
      <HorizontalMarqueeStream
        openApiKeyModal={openApiKeyModal}
        currency={currency}
      />

      {/* Exaggerated Promotional Standalone Site Showcase Section */}
      <HorizontalSlideSection direction="alternate" distance={140} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExaggeratedShowcaseSection
          openApiKeyModal={openApiKeyModal}
          openContractModal={openContractModal}
        />
      </HorizontalSlideSection>

      {/* 2.5 Keynote Scroll Narrative Storytelling (Jobs Design Philosophy) */}
      <HorizontalSlideSection direction="left" distance={120} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="story-section">
          <KeynoteScrollStory
            openApiKeyModal={openApiKeyModal}
            openContractModal={openContractModal}
          />
        </div>
      </HorizontalSlideSection>

      {/* Interactive Horizontal Comparison Split View */}
      <HorizontalSlideSection direction="right" distance={120} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <HorizontalSlideSection direction="left" distance={140} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* 6. Usage Planner */}
      <ScrollRevealSection>
        <div id="usage-planner-section">
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
            text={t.hero.finalTitle}
            type="words"
            direction="left"
            stagger={0.04}
            as="h2"
            className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
          />
          <KineticText
            text={t.hero.finalSubtitle}
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
            <span>{t.hero.primaryCta}</span>
          </button>

          <button
            onClick={openContractModal}
            className="btn-editorial-outline w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{t.hero.secondaryCta}</span>
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
