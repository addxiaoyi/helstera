import React, { useState } from 'react';
import { COMPLIANCE_DOCS } from '../data/complianceData';
import { X, FileText, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContractModal: React.FC<ContractModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const copy = t.ui.modals.contract;
  const [activeTab, setActiveTab] = useState<'documents' | 'request'>('documents');
  const [requestNotice, setRequestNotice] = useState<string | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    requirements: '',
    docType: 'DPA'
  });
  const documents = COMPLIANCE_DOCS.map((doc) => ({
    ...doc,
    ...(t.content.complianceDocs[doc.id] ?? {}),
  }));

  if (!isOpen) return null;

  const handleDocumentSelect = (title: string) => {
    setFormData((current) => ({
      ...current,
      requirements: `${copy.selectionRequirement} "${title}"`,
    }));
    setActiveTab('request');
    setRequestNotice(`${copy.requestPrepared} "${title}"`);
    setTimeout(() => setRequestNotice(null), 3000);
  };

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base font-bold text-white font-mono">{copy.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-800 bg-slate-950/50 px-6 pt-3">
          <button
            onClick={() => setActiveTab('documents')}
            className={`pb-3 px-4 font-mono text-xs font-semibold transition border-b-2 cursor-pointer ${
              activeTab === 'documents'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {copy.tabs.documents}
          </button>
          <button
            onClick={() => setActiveTab('request')}
            className={`pb-3 px-4 font-mono text-xs font-semibold transition border-b-2 cursor-pointer ${
              activeTab === 'request'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            {copy.tabs.request}
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {requestNotice && (
            <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{requestNotice} {copy.noticeSuffix}</span>
            </div>
          )}

          {activeTab === 'documents' ? (
            <div className="space-y-4">
              <p className="text-xs text-slate-300 leading-relaxed">
                {copy.description}
              </p>

              <div className="grid grid-cols-1 gap-3">
                {documents.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-cyan-400" />
                        <span className="font-semibold text-sm text-white">{doc.title}</span>
                      </div>
                      <p className="text-xs text-slate-400">{doc.description}</p>
                      <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500 pt-1">
                        <span>{copy.category} {doc.category}</span>
                        <span>•</span>
                        <span className="text-emerald-400">{copy.availability}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDocumentSelect(doc.title)}
                      className="shrink-0 px-3 py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 font-medium text-xs transition flex items-center gap-1.5 cursor-pointer shadow"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{copy.requestCopy}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {requestSent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">{copy.submittedTitle}</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    {copy.submittedDescription} <span className="text-cyan-300">{formData.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitRequest} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">{copy.fullName}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={copy.namePlaceholder}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">{copy.company}</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={copy.companyPlaceholder}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">{copy.email}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={copy.emailPlaceholder}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 font-mono mb-1">{copy.documentType}</label>
                      <select
                        value={formData.docType}
                        onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-sans"
                      >
                        <option value="DPA">{copy.documentOptions.DPA}</option>
                        <option value="MSA">{copy.documentOptions.MSA}</option>
                        <option value="ServiceSchedule">{copy.documentOptions.ServiceSchedule}</option>
                        <option value="Enterprise">{copy.documentOptions.Enterprise}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-mono mb-1">{copy.requirements}</label>
                    <textarea
                      rows={3}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder={copy.requirementsPlaceholder}
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-cyan-500 font-sans resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                    >
                      {copy.cancel}
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{copy.submit}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
