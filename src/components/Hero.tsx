'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  HeartHandshake,
  PhoneCall,
  CheckCircle2,
  Star,
  Clock4,
  Users,
  Zap,
  ArrowRight
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-22">
      {/* Subtle Soft Slate Ambient Glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-slate-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.hero.liveDispatch}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {t.hero.titleStart}{' '}
              <span className="text-blue-600 underline decoration-blue-200 decoration-wavy decoration-2">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titleEnd}
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            {/* Quick Benefits Bullet List with Clean Slate Pills */}
            <div className="grid grid-cols-2 gap-2.5 text-left pt-1 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.stats.verifiedStaff}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.stats.availability}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.stats.familiesServed}</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.hero.stats.districts}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:base shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
              >
                <HeartHandshake className="w-5 h-5 text-white" />
                <span>{t.hero.bookBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 hover:border-slate-400 shadow-2xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.hero.exploreBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase with Photo */}
          <div className="lg:col-span-5 relative">
            {/* Top-Right Floating Review Pill */}
            <div className="absolute -top-3 -right-2 sm:-right-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-slate-200 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t.hero.ratingText}</span>
                <p className="text-[10px] text-slate-500">{t.hero.familiesText}</p>
              </div>
            </div>

            {/* Bottom-Left Floating Express Dispatch Pill */}
            <div className="absolute -bottom-3 -left-2 sm:-left-3 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-lg border border-slate-200 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">{t.hero.rapidResponse}</span>
                <p className="text-[10px] text-slate-500">{t.hero.rapidSubtitle}</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-3 sm:p-4 shadow-xl border border-slate-200 relative">
              {/* Main Photo with gradient overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero.jpg"
                  alt="Compassionate elderly care nurse with smiling grandmother in Sri Lanka"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-slate-900">{t.hero.policeMedicalCleared}</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-blue-200">{t.hero.certifiedNurseAides}</p>
                    <p className="text-sm font-bold">{t.hero.oneOnOneCare}</p>
                  </div>
                  <div className="bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                    <span>4.9 / 5.0</span>
                  </div>
                </div>
              </div>

              {/* Service Features Row */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <Clock4 className="w-4 h-4 text-blue-600 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.hero.shiftsTitle}</p>
                    <p className="text-[10px] text-slate-500">{t.hero.shiftsSubtitle}</p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-700 shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-slate-900">{t.hero.islandwideTitle}</p>
                    <p className="text-[10px] text-slate-500">{t.hero.islandwideSubtitle}</p>
                  </div>
                </div>
              </div>

              {/* Hotline Call Strip - Deep Slate */}
              <div className="mt-2.5 bg-slate-900 text-white rounded-2xl p-3 flex items-center justify-between shadow-xs">
                <div>
                  <p className="text-[10px] text-slate-400 font-semibold">{t.hero.callNow}</p>
                  <p className="text-sm sm:text-base font-bold tracking-wide">{t.phone}</p>
                </div>
                <a
                  href={`tel:${t.phone}`}
                  className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs hover:bg-blue-700 transition-colors cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
