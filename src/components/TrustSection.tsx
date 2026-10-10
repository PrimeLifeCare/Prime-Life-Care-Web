'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  Stethoscope,
  Eye,
  RefreshCw,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <ShieldCheck key="shield" className="w-5 h-5 text-blue-600" />,
    <Stethoscope key="steth" className="w-5 h-5 text-slate-700" />,
    <Eye key="eye" className="w-5 h-5 text-indigo-600" />,
    <RefreshCw key="refresh" className="w-5 h-5 text-rose-500" />
  ];

  const iconBgClasses = [
    'bg-blue-50 border-blue-100',
    'bg-slate-100 border-slate-200',
    'bg-indigo-50 border-indigo-100',
    'bg-rose-50 border-rose-100'
  ];

  return (
    <section id="trust" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{t.nav.whyUs}</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-3.5 tracking-tight">
            {t.trust.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {t.trust.subheading}
          </p>
        </div>

        {/* 4 Key Statistics Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {t.trust.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-4 sm:p-5 text-center border border-slate-200/80 hover:border-slate-300 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Visual & Pillars Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Authentic Nursing Photo */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-lg border-2 border-slate-200 relative aspect-4/3 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/health_check.jpg"
                alt="Professional caregiver checking senior patient health in Sri Lanka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-600 text-xs font-bold uppercase tracking-wider inline-block mb-1">
                  {t.trust.vitalsBadge}
                </span>
                <h4 className="font-bold text-base sm:text-lg">
                  {t.trust.vitalsHeading}
                </h4>
                <p className="text-xs text-slate-200 mt-0.5">
                  {t.trust.vitalsDesc}
                </p>
              </div>
            </div>

            {/* Overlaid Floating Badge */}
            <div className="absolute -bottom-3 -right-2 sm:right-3 bg-white rounded-2xl p-3 shadow-md border border-slate-200 flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{t.trust.standardBadge}</p>
                <p className="text-[10px] text-slate-500">{t.trust.standardSub}</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
            {t.trust.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all border border-slate-200 hover:border-slate-300 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-3.5 ${iconBgClasses[index % iconBgClasses.length]}`}
                  >
                    {icons[index % icons.length]}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>{t.trust.standardPrefix}{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
