import React, { useState } from 'react';
import { FAQS_DATA } from '../data/faqsData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';
import { KineticText } from './KineticText';
import { useLanguage } from '../i18n/LanguageContext';

export const FaqAccordion: React.FC = () => {
  const { t } = useLanguage();
  const faqCopy = t.ui.faq;
  const faqs = FAQS_DATA.map((faq) => ({ ...faq, ...t.content.faq[faq.id] }));
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'all' | 'compliance' | 'billing' | 'technical' | 'models'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeTab === 'all' || faq.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Editorial Section Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1C1C1C]/15 text-[#C73E28] font-mono-tag text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5 text-[#C73E28]" /> {faqCopy.eyebrow}
        </span>
        <KineticText
          text={faqCopy.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-3xl sm:text-5xl font-semibold text-[#1C1C1C] tracking-tight"
        />
        <KineticText
          text={faqCopy.subtitle}
          type="words"
          direction="right"
          stagger={0.02}
          delay={0.15}
          as="p"
          className="text-sm text-[#1C1C1C]/75 font-sans"
        />
      </div>

      {/* Category Controls & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#1C1C1C]/10 pb-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1 bg-[#F8F7F4] p-1 rounded-full border border-[#1C1C1C]/10 text-xs font-mono-tag overflow-x-auto w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
              activeTab === 'all'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            {faqCopy.categories.all}
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
              activeTab === 'compliance'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            {faqCopy.categories.compliance}
          </button>
          <button
            onClick={() => setActiveTab('billing')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
              activeTab === 'billing'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            {faqCopy.categories.billing}
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
              activeTab === 'technical'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            {faqCopy.categories.technical}
          </button>
          <button
            onClick={() => setActiveTab('models')}
            className={`px-3 py-1.5 rounded-full transition cursor-pointer whitespace-nowrap ${
              activeTab === 'models'
                ? 'bg-[#1C1C1C] text-[#F8F7F4] font-bold'
                : 'text-[#1C1C1C]/60 hover:text-[#1C1C1C]'
            }`}
          >
            {faqCopy.categories.models}
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-[#1C1C1C]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={faqCopy.searchPlaceholder}
            className="w-full pl-9 pr-3 py-1.5 bg-white border border-[#1C1C1C]/15 rounded-full text-xs text-[#1C1C1C] focus:outline-none focus:border-[#C73E28] transition font-mono-tag"
          />
        </div>
      </div>

      {/* Accordion List with Hairline Dividers */}
      <div className="border-t border-b border-[#1C1C1C]/15 divide-y divide-[#1C1C1C]/15">
        {filteredFaqs.length === 0 ? (
          <div className="py-8 text-center text-xs text-[#1C1C1C]/60 font-mono-tag">
            {faqCopy.noResults} "{searchQuery}".
          </div>
        ) : (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 text-left font-serif-title font-semibold text-[#1C1C1C] text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer hover:text-[#C73E28] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-mono-tag text-xs text-[#C73E28] font-bold">[{String(idx + 1).padStart(2, '0')}]</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#1C1C1C]/40 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#C73E28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 text-xs text-[#1C1C1C]/80 leading-relaxed font-sans pl-7">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

