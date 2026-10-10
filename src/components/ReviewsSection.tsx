'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { googleReviews } from '@/data/reviews';
import { Star, ShieldCheck, MapPin, Heart, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'elderly' | 'child' | 'overseas'>('all');

  const filteredReviews = googleReviews.filter((rev) => {
    if (filter === 'all') return true;
    if (filter === 'elderly') return rev.category === 'elderly_care' || rev.category === 'live_in';
    if (filter === 'child') return rev.category === 'child_care';
    if (filter === 'overseas') {
      const loc = rev.authorLocation.en.toLowerCase();
      return loc.includes('australia') || loc.includes('uk') || loc.includes('dubai') || loc.includes('uae');
    }
    return true;
  });

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {/* Google 5-Star Official Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-2xs mb-3">
            {/* Google Multi-Color G Icon */}
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="text-xs font-bold text-slate-800">{t.reviews.badge}</span>
            <span className="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-1.5 py-0.5 rounded">
              ⭐ 4.9 / 5.0
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.reviews.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2.5 leading-relaxed">
            {t.reviews.subheading}
          </p>

          {/* Quick Stats Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4 text-xs font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">{t.reviews.googleRating}</span>
            </div>
            <span className="text-slate-300">•</span>
            <span>{t.reviews.reviewsCount}</span>
            <span className="text-slate-300">•</span>
            <span className="text-emerald-700 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Police Verified
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.reviews.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setFilter('elderly')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'elderly'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.reviews.filterElderly}
          </button>
          <button
            type="button"
            onClick={() => setFilter('child')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'child'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.reviews.filterChild}
          </button>
          <button
            type="button"
            onClick={() => setFilter('overseas')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              filter === 'overseas'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t.reviews.filterOverseas}
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top: Reviewer Info & Google Icon */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-2xs">
                      {rev.authorName.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 leading-tight">
                        {rev.authorName}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span>{rev.authorLocation[language]}</span>
                      </p>
                    </div>
                  </div>

                  {/* Google G logo + Star count */}
                  <div className="flex flex-col items-end">
                    <svg className="w-4 h-4 shrink-0 mb-1" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {rev.timeAgo[language]}
                    </span>
                  </div>
                </div>

                {/* Stars & Service Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-white text-slate-700 text-[10px] font-bold border border-slate-200">
                    {rev.serviceUsed[language]}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.text[language]}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer: Verification Badge & Caregiver */}
              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{t.reviews.verifiedClient}</span>
                </div>

                {rev.caregiverMentioned && (
                  <span className="text-slate-500 text-[10px] font-medium bg-white px-2 py-0.5 rounded border border-slate-200">
                    {rev.caregiverMentioned}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              {language === 'si'
                ? 'ඔබත් ප්‍රයිම් ලයිෆ් කෙයාර් සේවාව ලබාගත් පවුලක්ද?'
                : language === 'ta'
                ? 'நீங்களும் எங்கள் சேவையைப் பெற்ற குடும்பமா?'
                : 'Are you a family supported by Prime Life Care?'}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'si'
                ? 'ඔබගේ සැබෑ අත්දැකීම ගූගල් (Google) හරහා සටහන් කර අනෙක් පවුල් වලටත් නිවැරදි තීරණයක් ගැනීමට සහාය වන්න.'
                : language === 'ta'
                ? 'உங்கள் அனுபவத்தை Google இல் பகிர்ந்து மற்ற குடும்பங்களுக்கும் உதவுங்கள்.'
                : 'Share your sincere experience on Google to help other families find dependable care.'}
            </p>
          </div>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs border border-slate-300 shadow-2xs flex items-center gap-1.5 shrink-0 transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>
              {language === 'si'
                ? 'ගූගල් ඇගයීමක් එක්කරන්න'
                : language === 'ta'
                ? 'Google மதிப்பாய்வு இடுக'
                : 'Write a Google Review'}
            </span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
