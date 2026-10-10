import { MedicalItem } from '@/types';

export const initialMedicalItems: MedicalItem[] = [
  {
    id: 'hosp_bed_3f',
    name: {
      en: '3-Function Electric ICU / Home Hospital Bed',
      si: '3-Function විදුලි මෝටර් සහිත රෝහල් ඇඳ',
      ta: '3-செயல்பாடு மின்சார மருத்துவமனை படுக்கை'
    },
    category: 'equipment',
    priceLKR: 185000,
    rentalMonthlyLKR: 18500,
    inStock: true,
    badge: 'Buy or Rent',
    brand: 'Paramount Health',
    description: {
      en: 'Motorized hospital bed with height adjustment, backrest elevation, and knee elevation with safety aluminum side railings.',
      si: 'හිස සහ කකුල් ඉහළ පහළ කළ හැකි, ආරක්ෂිත පැති රේලි සහිත විදුලි මෝටර් පාලිත උසස් රෝහල් ඇඳ.',
      ta: 'உயரத்தை சரிசெய்யக்கூடிய மின்சார மருத்துவமனை படுக்கை.'
    },
    images: [
      '/images/medical_store.jpg',
      '/images/wheelchair.jpg',
      '/images/health_check.jpg',
      '/images/diapers_wipes.jpg'
    ]
  },
  {
    id: 'air_mattress_pump',
    name: {
      en: 'Anti-Bedsore Ripple Air Mattress with Ultra-Quiet Pump',
      si: 'ඇඳ තුවාල වළක්වන රිපල් එයාර් මෙට්ටය සහ නිහඬ පොම්පය',
      ta: 'படுக்கைப்புண் தடுப்பு காற்று மெத்தை மற்றும் பம்ப்'
    },
    category: 'equipment',
    priceLKR: 14500,
    inStock: true,
    badge: 'Essential',
    brand: 'Apex Medical',
    description: {
      en: 'Alternating pressure bubble pad prevents and heals stage 1-2 pressure sores for long-term bedridden patients.',
      si: 'ඇඳ විවේකයේ සිටින රෝගීන්ගේ සිරුරේ පීඩනය මාරු කරමින් ඇඳ තුවාල සෑදීම සම්පූර්ණයෙන්ම වළක්වන වෛද්‍ය මෙට්ටය.',
      ta: 'படுக்கையில் உள்ள நோயாளிகளுக்கு படுக்கைப்புண் வராமல் தடுக்கும் காற்று மெத்தை.'
    },
    images: [
      '/images/medical_store.jpg',
      '/images/health_check.jpg',
      '/images/diapers_wipes.jpg'
    ]
  },
  {
    id: 'folding_wheelchair',
    name: {
      en: 'Lightweight Foldable Chrome Wheelchair with Brake Locks',
      si: 'නැමිය හැකි සැහැල්ලු රෝද පුටුව (බ්‍රේක් සහිත)',
      ta: 'மடிக்கக்கூடிய இலகுரக சக்கர நாற்காலி'
    },
    category: 'mobility',
    priceLKR: 38000,
    rentalMonthlyLKR: 4500,
    inStock: true,
    badge: 'Popular',
    brand: 'Karma Mobility',
    description: {
      en: 'Easy-folding steel chrome frame wheelchair with attendant handbrakes, swing-away footrests, and breathable seat upholstery.',
      si: 'පහසුවෙන් නවා වාහනයක ගෙන යා හැකි, ආරක්ෂිත බ්‍රේක් සහ සුවපහසු ආසනයක් සහිත උසස් රෝද පුටුව.',
      ta: 'எளிதில் மடிக்கக்கூடிய மற்றும் எடுத்துச் செல்லக்கூடிய சக்கர நாற்காலி.'
    },
    images: [
      '/images/wheelchair.jpg',
      '/images/medical_store.jpg',
      '/images/health_check.jpg'
    ]
  },
  {
    id: 'bp_monitor_omron',
    name: {
      en: 'Omron Digital Upper Arm Blood Pressure Monitor',
      si: 'ඔම්රොන් (Omron) ඩිජිටල් රුධිර පීඩන මාපකය',
      ta: 'ஓம்ரான் டிஜிட்டல் இரத்த அழுத்த மானி'
    },
    category: 'monitoring',
    priceLKR: 12500,
    inStock: true,
    badge: 'Certified',
    brand: 'Omron Japan',
    description: {
      en: 'Clinical accuracy upper arm BP monitor with irregular heartbeat indicator, memory storage, and large LCD display.',
      si: 'නිවසේදීම රුධිර පීඩනය සහ හෘද ස්පන්දන වේගය පහසුවෙන් මැනගත හැකි ඉහළම නිරවද්‍යතාවයෙන් යුත් උපකරණය.',
      ta: 'துல்லியமான வீட்டு இரத்த அழுத்த பரிசோதனை கருவி.'
    },
    images: [
      '/images/diapers_wipes.jpg',
      '/images/health_check.jpg',
      '/images/medical_store.jpg'
    ]
  },
  {
    id: 'adult_diapers_xl',
    name: {
      en: 'PrimeCare Premium Adult Diapers (Size L / XL - 10 Pack)',
      si: 'වැඩිහිටි ඩයපර් පැකට් - Premium Ultra Absorption (L / XL 10 pcs)',
      ta: 'பெரியவர்களுக்கான டயப்பர்கள் (L / XL - 10 எண்ணிக்கை)'
    },
    category: 'hygiene',
    priceLKR: 2650,
    inStock: true,
    badge: 'Fast Delivery',
    brand: 'PrimeCare Comfort',
    description: {
      en: 'Super-absorbent leak-proof overnight diapers with odor control and wetness indicator for senior comfort.',
      si: 'පැය 10ක් පුරා තෙතමනය රඳවා නොගන්නා, සුවපහසු වැඩිහිටි ඩයපර් (දිනපතා භාවිතයට සුදුසුයි).',
      ta: 'இரவு முழுவதும் உறிஞ்சும் வசதியான பெரியவர்களுக்கான டயப்பர்கள்.'
    },
    images: [
      '/images/diapers_wipes.jpg',
      '/images/medical_store.jpg',
      '/images/health_check.jpg'
    ]
  },
  {
    id: 'shower_commode_chair',
    name: {
      en: 'Waterproof Commode & Bath Shower Chair with Wheels',
      si: 'රෝද සහිත වැසිකිලි සහ ස්නාන ආධාරක පුටුව (Waterproof)',
      ta: 'சக்கரங்களுடன் கூடிய குளியல் மற்றும் கழிப்பறை நாற்காலி'
    },
    category: 'hygiene',
    priceLKR: 16500,
    inStock: true,
    badge: 'Safety',
    brand: 'CareQuip',
    description: {
      en: 'Rust-resistant aluminum shower commode chair fitting over standard toilets with removable bucket.',
      si: 'මලකඩ නොකන, නාන කාමරයේදී රෝගියා ආරක්ෂිතව ස්නානය කරවීම සඳහා විශේෂයෙන් නිපදවූ ආධාරක පුටුව.',
      ta: 'பாதுகாப்பான குளியல் மற்றும் கழிப்பறை பயன்பாட்டிற்கான நாற்காலி.'
    },
    images: [
      '/images/wheelchair.jpg',
      '/images/medical_store.jpg'
    ]
  },
  {
    id: 'walking_walker_alum',
    name: {
      en: 'Foldable Aluminium Walking Frame (Walker)',
      si: 'නැමිය හැකි ඇලුමිනියම් ඇවිදින ආධාරකය (Walker)',
      ta: 'மடிக்கக்கூடிய அலுமினிய வாக்கர்'
    },
    category: 'mobility',
    priceLKR: 8500,
    inStock: true,
    brand: 'Drive DeVilbiss',
    description: {
      en: 'Height-adjustable lightweight dual-button folding walker providing stable walking support.',
      si: 'උස සකස් කළ හැකි, වැටීම් වළක්වා ආරක්ෂිතව ඇවිදීමට උපකාරී වන සැහැල්ලු ඇවිදින ආධාරකය.',
      ta: 'முதியவர்கள் பாதுகாப்பாக நடக்க உதவும் வாக்கர்.'
    },
    images: [
      '/images/medical_store.jpg',
      '/images/wheelchair.jpg'
    ]
  },
  {
    id: 'adult_wipes_jumbo',
    name: {
      en: 'Anti-Bacterial Extra Large Adult Bed Bath Wipes (Pack of 80)',
      si: 'විෂබීජ නාශක විශාල තෙත පිසදැමුම් පැකට් (Wet Wipes 80 pcs)',
      ta: 'பெரியவர்களுக்கான ஈரமான துடைப்பான்கள் (80 எண்ணிக்கை)'
    },
    category: 'hygiene',
    priceLKR: 950,
    inStock: true,
    brand: 'GentleCare',
    description: {
      en: 'Aloe vera and vitamin E enriched extra thick wipes for rinse-free sponge bathing.',
      si: 'වතුර නැතිව රෝගියාගේ සිරුර පිරිසිදු කිරීමට සහ ආසාදන වැළැක්වීමට සුදුසු ඝනකම් තෙත පිසදැමුම්.',
      ta: 'நோயாளிகளை எளிதாக துடைத்து சுத்தம் செய்ய உதவும் துடைப்பான்கள்.'
    },
    images: [
      '/images/diapers_wipes.jpg',
      '/images/health_check.jpg'
    ]
  }
];
