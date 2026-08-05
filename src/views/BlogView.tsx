import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogsData';
import { BlogPost, PageView } from '../types';
import { ScrollRevealHeading } from '../components/ScrollRevealHeading';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Search, Tag, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface BlogViewProps {
  setCurrentView: (view: PageView) => void;
  openContractModal: () => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ setCurrentView, openContractModal }) => {
  const { t } = useLanguage();
  const blogCopy = t.ui.blog;
  const posts = BLOG_POSTS.map((post) => {
    const copy = t.content.blog[post.id];
    return {
      ...post,
      ...copy,
      author: { ...post.author, role: copy.authorRole },
    };
  });
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#F8F7F4] text-[#1C1C1C]">
      {/* Editorial Header */}
      <ScrollRevealHeading className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1C1C1C]/15 text-[#C73E28] font-mono-tag text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-[#C73E28]" />
          {blogCopy.eyebrow}
        </span>
        <h1 className="font-serif-title text-4xl sm:text-6xl font-semibold text-[#1C1C1C] tracking-tight">
          {blogCopy.heroTitle}
        </h1>
        <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-sans">
          {blogCopy.heroSubtitle}
        </p>
      </ScrollRevealHeading>

      {/* Editorial Search Bar */}
      <div className="max-w-md mx-auto relative">
        <Search className="w-4 h-4 text-[#1C1C1C]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={blogCopy.searchPlaceholder}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1C1C1C]/20 rounded-full text-xs font-mono-tag text-[#1C1C1C] focus:outline-none focus:border-[#C73E28] shadow-2xs"
        />
      </div>

      {/* Selected Article Reader Modal */}
      {selectedPost && (
        <div className="p-8 rounded-2xl bg-white border border-[#1C1C1C]/20 space-y-6 shadow-md relative animate-fadeIn">
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#F8F7F4] border border-[#1C1C1C]/15 text-[#1C1C1C]/70 hover:text-[#1C1C1C] transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-3xl">
            <span className="px-3 py-1 rounded-full bg-white border border-[#1C1C1C]/15 text-[#C73E28] text-xs font-mono-tag font-bold">
              {selectedPost.category}
            </span>
            <h2 className="font-serif-title text-2xl sm:text-4xl font-semibold text-[#1C1C1C]">{selectedPost.title}</h2>
            <div className="flex items-center gap-3 text-xs text-[#1C1C1C]/60 font-mono-tag">
              <span>{blogCopy.byPrefix} {selectedPost.author.name} ({selectedPost.author.role})</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-[#1C1C1C]/80 space-y-4 leading-relaxed border-t border-[#1C1C1C]/15 pt-6 font-sans">
            <p className="font-semibold text-[#1C1C1C] text-sm font-serif-title">
              {selectedPost.summary}
            </p>
            <p>
              {blogCopy.articleLead}
            </p>
            <p>
              {blogCopy.articleBody}
            </p>
            <div className="p-4 bg-[#F8F7F4] rounded-xl border border-[#1C1C1C]/15 font-mono-tag text-xs text-[#1C1C1C] space-y-2">
              <p className="font-bold text-[#C73E28]">{blogCopy.takeawaysTitle}</p>
              {Object.values(blogCopy.takeaways).map((takeaway, index) => <p key={takeaway}>{index + 1}. {takeaway}</p>)}
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between border-t border-[#1C1C1C]/15">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-xs font-mono-tag text-[#1C1C1C]/60 hover:text-[#1C1C1C] cursor-pointer"
            >
              ← {blogCopy.backToArticles}
            </button>
            <button
              onClick={openContractModal}
              className="btn-editorial-primary text-xs"
            >
              {blogCopy.requestDpa}
            </button>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-b border-[#1C1C1C]/15 py-8 divide-y md:divide-y-0 md:divide-x divide-[#1C1C1C]/15">
        {filteredPosts.length === 0 ? (
          <div className="col-span-full py-10 text-center text-xs text-[#1C1C1C]/60 font-mono-tag">
            {blogCopy.noResults} "{searchQuery}".
          </div>
        ) : filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="py-6 md:px-6 first:pl-0 space-y-4 flex flex-col justify-between cursor-pointer group hover:bg-white rounded-xl transition p-4 -m-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono-tag">
                <span className="text-[#C73E28] font-semibold">{post.category}</span>
                <span className="text-[#1C1C1C]/50">{post.readTime}</span>
              </div>

              <h3 className="font-serif-title text-xl font-semibold text-[#1C1C1C] group-hover:text-[#C73E28] transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-xs text-[#1C1C1C]/75 line-clamp-3 font-sans leading-relaxed">
                {post.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between text-xs font-mono-tag text-[#1C1C1C]/60">
              <span>{post.date}</span>
              <span className="text-[#C73E28] font-semibold group-hover:underline inline-flex items-center gap-1">
                {blogCopy.readArticle} <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
