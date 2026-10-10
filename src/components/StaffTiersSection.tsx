'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { staffTiers } from '@/data/staffTiers';
import { StaffTier } from '@/types';
import { Stethoscope, Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface StaffTiersSectionProps {
  onSelectTierToBook: (tier: StaffTier) => void;
}

export const StaffTiersSection: React.FC<StaffTiersSectionProps> = ({ onSelectTierToBook }) => {
  const { language } = useLanguage();

  const labels = {
    si: {
      badge: 'කාර්ය මණ්ඩල සුදුසුකම් සහ නිපුණතා මට්ටම්',
      heading: 'ඔබේ රෝගියාගේ තත්ත්වයට ගැළපෙන සුදුසුම කාර්ය මණ්ඩලය තෝරාගන්න',
      subheading: 'වෛද්‍යවරුන්ගේ සිට NVQ සහතිකලත් හෙද කාර්ය මණ්ඩලය දක්වා විනිවිදභාවයෙන් යුත් දෛනික ගාස්තු.',
      experience: 'පළපුරුද්ද:',
      ratePrefix: 'රු.',
      responsibilities: 'ප්‍රධාන වගකීම් සහ රාජකාරි:',
      bookTierBtn: 'මෙම මට්ටම තෝරාගන්න'
    },
    en: {
      badge: 'Certified Qualification Tiers',
      heading: 'Select the Exact Caregiver Qualification for Your Loved One',
      subheading: 'From Medical Doctors to NVQ Certified Nurses and Companion Aides with transparent daily rates.',
      experience: 'Experience:',
      ratePrefix: 'LKR',
      responsibilities: 'Core Responsibilities:',
      bookTierBtn: 'Select this Tier'
    },
    ta: {
      badge: 'தகுதி நிலைகள்',
      heading: 'உங்கள் நோயாளியின் நிலைக்கு ஏற்ற தகுதியுள்ள பணியாளரை தேர்வு செய்யவும்',
      subheading: 'மருத்துவர்கள் முதல் NVQ சான்றளிக்கப்பட்ட செவிலியர்கள் வரையிலான வெளிப்படையான கட்டணங்கள்.',
      experience: 'அனுபவம்:',
      ratePrefix: 'ரூ.',
      responsibilities: 'முக்கிய பொறுப்புகள்:',
      bookTierBtn: 'இந்த நிலையை தேர்வு செய்'
    }
  }[language];

  const getTierIcon = (tierId: StaffTier['id']) => {
    switch (tierId) {
      case 'doctor':
        return <Stethoscope className="w-6 h-6 text-emerald-600" />;
      case 'nvq_5_nurse':
        return <Award className="w-6 h-6 text-teal-600" />;
      case 'nvq_4_caregiver':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'nurse_assistant':
        return <HeartHandshake className="w-6 h-6 text-indigo-600" />;
      case 'basic_aide':
        return <HeartHandshake className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="staff-tiers" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-700 bg-emerald-100/70 px-3.5 py-1 rounded-full">
            {labels.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-3 tracking-tight">
            {labels.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            {labels.subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffTiers.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Rate */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    {getTierIcon(tier.id)}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                      {labels.ratePrefix}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {tier.dailyRateLKR.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      {tier.shiftTypeNote[language]}
                    </span>
                  </div>
                </div>

                {/* Title & Badge */}
                <span className="inline-block px-2.5 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 mb-2">
                  {tier.titleBadge[language]}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {tier.name[language]}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {tier.qualifications[language]}
                </p>

                {/* Experience Pill */}
                <div className="text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 mb-5">
                  <span className="text-slate-400">{labels.experience}</span> {tier.experienceYears}
                </div>

                {/* Responsibilities list */}
                <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                  <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {labels.responsibilities}
                  </p>
                  {tier.responsibilities[language].map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTierToBook(tier)}
                className="w-full py-3 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{labels.bookTierBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
