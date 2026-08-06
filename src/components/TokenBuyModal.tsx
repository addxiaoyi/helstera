import React, { useState } from 'react';
import { X, CreditCard, ArrowRight, Check, Sparkles, RefreshCw, ShieldCheck, DollarSign } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface TokenBuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  openApiKeyModal?: () => void;
}

export const TokenBuyModal: React.FC<TokenBuyModalProps> = ({
  isOpen,
  onClose,
  openApiKeyModal
}) => {
  const { t } = useLanguage();
  const copy = t.ui.modals.tokenBuy;
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'WIRE' | 'CRYPTO'>('CARD');
  const [depositAmount, setDepositAmount] = useState<number>(100);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulateTopup = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-lg max-w-[calc(100vw-1.5rem)] max-h-[calc(100dvh-1.5rem)] overflow-y-auto p-4 sm:p-8 text-white space-y-6 shadow-2xl relative min-w-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex min-w-0 items-start justify-between gap-3 border-b border-slate-800 pb-4 relative z-10">
          <div className="min-w-0 flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white break-words">{copy.title}</h3>
              <p className="text-[11px] text-slate-400 break-words">{copy.description}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Success View */
          <div className="space-y-5 text-center py-4 relative z-10">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h4 className="text-xl font-extrabold text-white">{copy.successTitle}</h4>
              <p className="text-xs text-slate-300">
                {copy.addedCredits} <span className="text-blue-400 font-bold">${depositAmount} USD</span>.
              </p>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-emerald-400">
              {copy.liveRateNotice}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="w-1/2 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition cursor-pointer"
              >
                {copy.close}
              </button>
              {openApiKeyModal && (
                <button
                  onClick={() => { onClose(); openApiKeyModal(); }}
                  className="w-1/2 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{copy.getApiKey}</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Top up Form */
          <div className="space-y-5 relative z-10">
            {/* Payment Method Tabs */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 block">{copy.paymentMethod}</label>
            <div className="grid grid-cols-1 min-[360px]:grid-cols-3 gap-2">
                <button
                  onClick={() => setPaymentMethod('CARD')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    paymentMethod === 'CARD'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {copy.creditCard}
                </button>
                <button
                  onClick={() => setPaymentMethod('WIRE')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    paymentMethod === 'WIRE'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {copy.wire}
                </button>
                <button
                  onClick={() => setPaymentMethod('CRYPTO')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    paymentMethod === 'CRYPTO'
                      ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  {copy.crypto}
                </button>
              </div>
            </div>

            {/* Deposit presets */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{copy.depositAmount}</span>
                <span>{copy.onboardingTerms}</span>
              </div>
              <div className="grid grid-cols-2 min-[420px]:grid-cols-4 gap-2">
                {[50, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setDepositAmount(amt)}
                    className={`py-2 rounded-lg text-xs font-mono font-bold border transition cursor-pointer ${
                      depositAmount === amt
                        ? 'bg-blue-500/20 text-blue-400 border-blue-500'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
              </div>
            </div>

            {/* Account credit terms */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2">
              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-2 text-xs">
                <span className="text-slate-400">{copy.currentRate}</span>
                <span className="text-blue-400 font-mono font-extrabold text-base">{copy.liveRateNotice}</span>
              </div>
              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-2 text-[10px] text-slate-500">
                <span>{copy.balanceTerms}</span>
                <span className="text-emerald-400 font-semibold">{copy.serviceTerms}</span>
              </div>
            </div>

            <button
              onClick={handleSimulateTopup}
              disabled={isProcessing}
              className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-lg shadow-blue-600/20"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{copy.processing}</span>
                </>
              ) : (
                <>
                  <span>{copy.requestCredit} · ${depositAmount}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
