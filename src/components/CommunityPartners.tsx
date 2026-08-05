import React from 'react';
import { KineticText } from './KineticText';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const CommunityPartners: React.FC = () => {
  const { t } = useLanguage();
  const community = t.ui.community;
  const partners = [
    { id: 'deepseek', name: 'DeepSeek AI' },
    { id: 'qwen', name: 'Alibaba Qwen' },
    { id: 'moonshot', name: 'Moonshot AI' },
    { id: 'zhipu', name: 'Zhipu AI' },
    { id: 'gateway', name: 'Helstera Gateway' },
    { id: 'governance', name: 'Account governance' },
  ];

  return (
    <div className="space-y-10">
      {/* Ecosystem Kinetic Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-xs font-mono-tag font-semibold uppercase tracking-wider text-[#C73E28]">
          {community.eyebrow}
        </span>
        <KineticText
          text={community.title}
          type="words"
          direction="left"
          stagger={0.04}
          as="h2"
          className="font-serif-title text-2xl sm:text-4xl font-semibold text-[#1C1C1C]"
        />
      </div>

      {/* Partner Logo Strip with Hairline Dividers */}
      <div className="border-t border-b border-[#1C1C1C]/15 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[#1C1C1C]/15">
        {partners.map((p, idx) => (
          <div
            key={idx}
            className="py-4 sm:px-4 text-center space-y-1"
          >
            <div className="font-serif-title text-lg font-semibold text-[#1C1C1C] tracking-tight">
              {p.id === 'governance' ? community.governanceName : p.name}
            </div>
            <div className="text-[10px] text-[#1C1C1C]/60 font-sans">{community.partners[p.id].category}</div>
            <div className="text-[10px] font-mono-tag font-semibold text-[#C73E28] pt-0.5">
              {community.partners[p.id].tag}
            </div>
          </div>
        ))}
      </div>

      {/* Developer Community Strip */}
      <div className="py-4 border-b border-[#1C1C1C]/15 text-[#1C1C1C] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif-title text-2xl font-semibold text-[#1C1C1C]">{community.joinTitle}</h3>
          <p className="text-xs text-[#1C1C1C]/75 font-sans">
            {community.joinDescription}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-primary px-4 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{community.joinCommunity}</span>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-editorial-outline px-4 py-2.5 text-xs flex items-center gap-1.5 cursor-pointer"
          >
            <span>{community.githubSdks}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

