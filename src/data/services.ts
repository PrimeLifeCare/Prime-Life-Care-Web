import { ServiceItem } from '@/types';

export const initialServices: ServiceItem[] = [
  {
    id: "day_care_12h",
    category: "elderly_care",
    name: {
      en: "12-Hour Day Shift Care",
      si: "පැය 12 දිවා සාත්තු සේවය",
      ta: "12 மணி நேர பகல்நேර பராமரிப்பு"
    },
    shortDescription: {
      en: "07:00 AM - 07:00 PM dedicated daytime care for bedridden or elderly needing daily assistance.",
      si: "උදෑසන 7 සිට සවස 7 දක්වා ඇඳ විවේකයේ සිටින හෝ දෛනික කටයුතුවලට සහාය අවශ්‍ය වැඩිහිටියන් සඳහා.",
      ta: "காலை 07:00 முதல் மாலை 07:00 வரை முதியவர்களுக்கான பகல்நேர பராமரிப்பு."
    },
    description: {
      en: "Comprehensive daytime caregiver support ensuring your loved one receives meals, personal hygiene care, medication on time, and warm companionship throughout the day.",
      si: "ආහාර පිසීම සහ කැවීම, ස්නානය සහ පෞද්ගලික පිරිසිදුකම, නියමිත වේලාවට ඖෂධ ලබාදීම සහ ආරක්ෂාකාරී ඇවිදීමට සහාය වීම ඇතුළත් පූර්ණ දිවා සත්කාරය.",
      ta: "உணவு, தனிப்பட்ட சுகாதாரம், சரியான நேரத்தில் மருந்துகள் மற்றும் பாதுகாப்பான பகல்நேர கவனிப்பு."
    },
    shiftType: "12h_day",
    hours: 12,
    priceLKR: 4500,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "Sun",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["Personal hygiene & sponge bath", "Feeding & meal prep", "Timely medication", "Vitals recording"],
      si: ["ස්නානය සහ පෞද්ගලික පිරිසිදුකම", "ආහාර වේලාවට පිළියෙල කර කැවීම", "නියමිත වේලාවට ඖෂධ ලබාදීම", "දෛනික සෞඛ්‍ය සටහන්"],
      ta: ["தனிப்பட்ட சுகாதாரம்", "உணவு வழங்கல்", "நேரத்திற்கு மருந்துகள்", "ஆரோக்கிய கண்காணிப்பு"]
    },
    tiers: [
      {
        tierId: 'basic_aide',
        tierName: { en: 'Basic Companion', si: 'මූලික සහායක', ta: 'அடிப்படை உதவியாளர்' },
        badge: { en: 'Affordable Companion', si: 'මිත්‍රශීලී රැකවරණය', ta: 'சிக்கனமான துணை' },
        priceLKR: 3000,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Friendly companionship & conversation', 'Assistance with routine meals & water', 'Accompanying on short walks & garden sitting', 'Keeping room neat & tidy'],
          si: ['තනිකම මකාදමන මිත්‍රශීලී රැකවරණය', 'ආහාර සහ වතුර වේලාවට ලබාදීම', 'මිදුලේ ඇවිදීමට කැඳවාගෙන යාම', 'කාමරය පිළිවෙළට තැබීම'],
          ta: ['நட்பான தோழமை', 'உணவு & தண்ணீர் உதவி', 'நடைப்பயிற்சி துணை', 'அறை தூய்மை']
        }
      },
      {
        tierId: 'nurse_assistant',
        tierName: { en: 'Nurse Assistant', si: 'හෙද සහායක', ta: 'செவிலியர் உதவியாளர்' },
        badge: { en: 'Nurse Aide Trained', si: 'හෙද සහායක පුහුණු', ta: 'செவிலியர் பயிற்சி' },
        priceLKR: 3800,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Assisted bathing & sponge baths', 'Feeding & medication reminding', 'Mobility & wheelchair transfer assistance', 'Basic temperature & pulse check'],
          si: ['ස්නානය සහ ඇඟ පිසදැමීම', 'ආහාර කැවීම සහ ඖෂධ ලබාදීම', 'රෝද පුටුවට මාරු කිරීම', 'උණ සහ ස්පන්දනය මැනීම'],
          ta: ['குளியல் உதவி', 'உணவு & மருந்து', 'சக்கர நாற்காலி உதவி', 'வெப்பநிலை பரிசோதனை']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'NVQ 4 Certified', si: 'NVQ 4 පුහුණු සාත්තු', ta: 'NVQ 4 சான்றிதழ்' },
        badge: { en: 'Most Popular ⭐', si: 'වඩාත් ජනප්‍රිය ⭐', ta: 'மிகவும் பிரபலம் ⭐' },
        isRecommended: true,
        priceLKR: 4500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Bed turning every 2h & bedsore prevention', 'Daily vitals recording (BP, Sugar, Pulse)', 'Strict medication adherence & logbook', 'Dementia patient supervision & gentle mobility'],
          si: ['ඇඳ තුවාල වැළැක්වීමට පැය 2කට වරක් ඉරියව් මාරු කිරීම', 'දෛනික රුධිර පීඩනය සහ සීනි මට්ටම මැනීම', 'නියමිත වේලාවට ඖෂධ ලබාදී සටහන් තැබීම', 'මතකය අඩුවූ රෝගීන් ඉවසීමෙන් රැකබලා ගැනීම'],
          ta: ['படுக்கைப்புண் தடுப்பு', 'இரத்த அழுத்தம் & சர்க்கரை அளவு', 'சரியான மருந்து அட்டவணை', 'மறதி நோய் பாதுகாப்பு']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'NVQ 5 Senior Nurse', si: 'NVQ 5 ජ්‍යෙෂ්ඨ හෙද', ta: 'NVQ 5 மூத்த செவிலியர்' },
        badge: { en: 'Diploma Clinical', si: 'උසස් හෙද ඩිප්ලෝමා', ta: 'டிப்ளமோ செவிலியர்' },
        priceLKR: 5800,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Advanced surgical wound dressings', 'Catheterization, Ryle’s tube feeding & care', 'IV cannula monitoring & injections', 'Direct communication with treating specialist doctor'],
          si: ['තුවාල විෂබීජ නාශනය කර වෙළුම් දැමීම (Advanced Dressing)', 'කැතීටර් සහ නාල (Ryles tube) ආහාර අධීක්ෂණය', 'IV නහරගත ඖෂධ නිරීක්ෂණය', 'විශේෂඥ වෛද්‍යවරයාගේ උපදෙස් අනුව ක්‍රියා කිරීම'],
          ta: ['காய பராமரிப்பு & கட்டு', 'கதீட்டர் & உணவுக்குழாய்', 'IV மருந்துகள்', 'மருத்துவருடன் தொடர்பு']
        }
      }
    ],
    isActive: true
  },
  {
    id: "night_care_12h",
    category: "elderly_care",
    name: {
      en: "12-Hour Night Shift Care",
      si: "පැය 12 රාත්‍රී සාත්තු සේවය",
      ta: "12 மணி நேர இரவுநேர பராமரிப்பு"
    },
    shortDescription: {
      en: "07:00 PM - 07:00 AM vigilant nighttime assistance ensuring safety, comfort, and peaceful sleep.",
      si: "සවස 7 සිට උදෑසන 7 දක්වා රාත්‍රී නින්ද, වැසිකිලි යාම සහ හදිසි ආරක්ෂාව තහවුරු කරන සත්කාරය.",
      ta: "மாலை 07:00 முதல் காலை 07:00 வரை பாதுகாப்பு மற்றும் தூக்கத்திற்கான பராமரிப்பு."
    },
    description: {
      en: "Dedicated overnight care for seniors who experience sleep disturbances, frequent night restroom needs, or disorientation, ensuring their safety and family peace of mind.",
      si: "රාත්‍රියට අවදිවන, නිතර වැසිකිලි යාමට අවශ්‍ය හෝ නොසන්සුන් වන වැඩිහිටියන් නිරන්තර අවධානයෙන් සහ ආරක්ෂාවෙන් රැකබලා ගැනීම.",
      ta: "இரவில் விழித்தெழும் அல்லது அடிக்கடி கழிப்பறை செல்ல வேண்டிய முதியவர்களுக்கான பாதுகாப்பு."
    },
    shiftType: "12h_night",
    hours: 12,
    priceLKR: 5000,
    pricingUnit: {
      en: "/ night",
      si: "/ රාත්‍රියකට",
      ta: "/ ஒரு இரவுக்கு"
    },
    icon: "Moon",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["Fall prevention", "Restroom & diaper assistance", "Night medication", "Constant overnight vigil"],
      si: ["රාත්‍රී වැටීම් වැළැක්වීම", "වැසිකිලි යාම සහ ඩයපර් මාරුව", "රාත්‍රී ඖෂධ ලබාදීම", "නිරන්තර අවධානය"],
      ta: ["விபத்து தடுப்பு", "கழிப்பறை உதவி", "இரவு மருந்துகள்", "விழிப்புடன் இருத்தல்"]
    },
    tiers: [
      {
        tierId: 'basic_aide',
        tierName: { en: 'Basic Companion', si: 'මූලික සහායක', ta: 'அடிப்படை உதவியாளர்' },
        badge: { en: 'Night Companion', si: 'රාත්‍රී සහාය', ta: 'இரவு துணை' },
        priceLKR: 3500,
        pricingUnit: { en: '/ night', si: '/ රාත්‍රියකට', ta: '/ ஒரு இரவுக்கு' },
        responsibilities: {
          en: ['Overnight companion presence', 'Assistance with night water & light snacks', 'Helping to sit up and reach bell', 'Alerting family if patient wakes up'],
          si: ['රාත්‍රී කාලයේ ළඟ රැඳී සිටීම', 'වතුර සහ අවශ්‍ය දේ ළඟට දීම', 'නැගිටීමට උදවු කිරීම', 'අවදි වූ විට පවුලේ අයට දැනුම් දීම'],
          ta: ['இரவு நேர இருப்பு', 'தண்ணீர் & உதவி', 'எழுந்திருக்க உதவி', 'குடும்பத்தினரை அழைத்தல்']
        }
      },
      {
        tierId: 'nurse_assistant',
        tierName: { en: 'Nurse Assistant', si: 'හෙද සහායක', ta: 'செவிலியர் உதவியாளர்' },
        badge: { en: 'Nurse Aide Trained', si: 'හෙද සහායක', ta: 'செவிலியர் பயிற்சி' },
        priceLKR: 4200,
        pricingUnit: { en: '/ night', si: '/ රාත්‍රියකට', ta: '/ ஒரு இரவுக்கு' },
        responsibilities: {
          en: ['Restroom escort & diaper changing', 'Administering night medication on schedule', 'Fall prevention vigilance', 'Monitoring sleep calmness'],
          si: ['වැසිකිලි කැඳවාගෙන යාම සහ ඩයපර් මාරුව', 'රාත්‍රී ඖෂධ නියමිත වේලාවට දීම', 'ඇඳෙන් වැටීම් වැළැක්වීම', 'සුව නින්දකට සහාය වීම'],
          ta: ['கழிப்பறை & டயபர் உதவி', 'இரவு மருந்துகள்', 'விபத்து தடுப்பு', 'தூக்க அமைதி']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'NVQ 4 Certified', si: 'NVQ 4 පුහුණු සාත්තු', ta: 'NVQ 4 சான்றிதழ்' },
        badge: { en: 'Recommended ⭐', si: 'නිර්දේශිතයි ⭐', ta: 'பரிந்துரைக்கப்பட்டது ⭐' },
        isRecommended: true,
        priceLKR: 5000,
        pricingUnit: { en: '/ night', si: '/ රාත්‍රියකට', ta: '/ ஒரு இரவுக்கு' },
        responsibilities: {
          en: ['Bed turning every 2 hours to avoid sores', 'Overnight vital signs monitoring', 'Calming disoriented or wandering elders', 'Emergency first response protocol'],
          si: ['පැය 2කට වරක් ඉරියව් මාරු කිරීම', 'රාත්‍රී රුධිර පීඩනය සහ උණ බැලීම', 'නොසන්සුන් වන රෝගීන් සන්සුන් කිරීම', 'හදිසි ප්‍රතිචාර දැක්වීම'],
          ta: ['படுக்கைப்புண் தடுப்பு', 'இரவு நேர பரிசோதனை', 'அமைதிப்படுத்துதல்', 'அவசர சிகிச்சை']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'NVQ 5 Senior Nurse', si: 'NVQ 5 ජ්‍යෙෂ්ඨ හෙද', ta: 'NVQ 5 மூத்த செவிலியர்' },
        badge: { en: 'Critical Overnight', si: 'උසස් සායනික හෙද', ta: 'தீவிர கவனிப்பு' },
        priceLKR: 6200,
        pricingUnit: { en: '/ night', si: '/ රාත්‍රියකට', ta: '/ ஒரு இரவுக்கு' },
        responsibilities: {
          en: ['Night IV antibiotic / saline infusions', 'Tracheostomy suctioning & oxygen monitoring', 'Catheter maintenance', 'Managing post-operative complications'],
          si: ['රාත්‍රී IV සේලයින් සහ එන්නත් ලබාදීම', 'ඔක්සිජන් සහ සෙම ඉවත් කිරීම (Suctioning)', 'කැතීටර් කළමනාකරණය', 'ශල්‍යකර්ම සංකූලතා කළමනාකරණය'],
          ta: ['IV ஊசி & மருந்துகள்', 'ஆக்சிஜன் & சளி உறிஞ்சுதல்', 'கதீட்டர் பராமரிப்பு', 'அறுவை சிகிச்சை சிக்கல்கள்']
        }
      }
    ],
    isActive: true
  },
  {
    id: "live_in_24h",
    category: "elderly_care",
    name: {
      en: "24-Hour Full Live-In Care",
      si: "පැය 24 පූර්ණ නේවාසික සාත්තු සේවය",
      ta: "24 மணி நேர தங்கி செய்யும் முழுநேர பராமரிப்பு"
    },
    shortDescription: {
      en: "Round-the-clock live-in caregiver providing constant care, comfort, and emergency readiness.",
      si: "නිවසේම නේවාසිකව රැඳී සිටින පුහුණු සාත්තු සේවකයෙකුගේ පැය 24 පුරාම සත්කාරය.",
      ta: "வீட்டிலேயே தங்கி 24 மணி நேரமும் தொடர்ச்சியான கவனிப்பு மற்றும் அவசர உதவி வழங்கும் பராமரிப்பாளர்."
    },
    description: {
      en: "Complete 24/7 in-home assistance where a dedicated caregiver stays in your residence to oversee all daily living activities, nutrition, vitals, and companion needs.",
      si: "නිවසේම නැවතී සිටිමින් රෝගියාගේ සියලුම අවශ්‍යතා, ආහාර, ඖෂධ, පිරිසිදුකම සහ හදිසි ආපදා තත්ත්වයන් කළමනාකරණය කරන පූර්ණ නේවාසික සාත්තු සේවය.",
      ta: "வீட்டிலேயே தங்கி அனைத்து அன்றாட தேவைகள், உணவு, மருந்துகள் மற்றும் பாதுகாப்பை உறுதி செய்யும் சேவை."
    },
    shiftType: "24h_full",
    hours: 24,
    priceLKR: 7500,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "Home",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["24/7 in-home presence", "Full meal prep & hygiene", "Vitals record sheet", "Bed sore turning"],
      si: ["පැය 24 පුරාම නිවසේ රැඳී සිටීම", "ආහාර සහ පෞද්ගලික පිරිසිදුකම", "දෛනික සෞඛ්‍ය සටහන්", "ඇඳ තුවාල වැළැක්වීම"],
      ta: ["24 மணி நேர இருப்பு", "முழு உணவு & சுகாதாரம்", "ஆரோக்கிய குறிப்புகள்", "படுக்கைப்புண் தடுப்பு"]
    },
    tiers: [
      {
        tierId: 'basic_aide',
        tierName: { en: 'Basic Companion', si: 'මූලික සහායක', ta: 'அடிப்படை உதவியாளர்' },
        badge: { en: 'Budget Live-in', si: 'අඩු වියදම් නේවාසික', ta: 'சிக்கன தங்குமிடம்' },
        priceLKR: 5500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Full 24h domestic companionship', 'Assistance with all daily meals & hydration', 'Light housekeeping for patient room', 'Constant presence for reassurance'],
          si: ['පැය 24 පුරාම නිවසේ නැවතී සිටින සහාය', 'දෛනික ආහාර සහ වතුර සැපයීම', 'රෝගියාගේ කාමරය පිරිසිදුව තැබීම', 'තනිකම මකාදැමීම'],
          ta: ['24 மணி நேர வீட்டு தோழமை', 'உணவு & தண்ணீர் உதவி', 'அறை பராமரிப்பு', 'தொடர் இருப்பு']
        }
      },
      {
        tierId: 'nurse_assistant',
        tierName: { en: 'Nurse Assistant', si: 'හෙද සහායක', ta: 'செவிலியர் உதவியாளர்' },
        badge: { en: 'Trained Live-in', si: 'පුහුණු නේවාසික සහාය', ta: 'பயிற்சி பெற்றவர்' },
        priceLKR: 6500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Assisted bathing & clothing routines', 'Medication management & tracking', 'Mobility & gentle physical exercises', 'Attending to night and day needs'],
          si: ['දිනපතා ස්නානය සහ ඇඳුම් මාරු කිරීම', 'ඖෂධ වේලාවට ලබාදීම', 'ඇවිදීමට සහ මෘදු ව්‍යායාමවලට උදවු කිරීම', 'දිවා සහ රාත්‍රී අවශ්‍යතා ඉටුකිරීම'],
          ta: ['குளியல் & ஆடை உதவி', 'மருந்து மேலாண்மை', 'உடற்பயிற்சி உதவி', 'இரவு பகல் கவனிப்பு']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'NVQ 4 Certified', si: 'NVQ 4 පුහුණු සාත්තු', ta: 'NVQ 4 சான்றிதழ்' },
        badge: { en: 'Top Choice ⭐', si: 'ඉහළම තේරීම ⭐', ta: 'சிறந்த தேர்வு ⭐' },
        isRecommended: true,
        priceLKR: 7500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Total bedridden elder care protocol', 'Bed turning every 2h & pressure relief', 'Daily vitals charts for family & doctor', 'Dementia, Alzheimer’s & Stroke specialized handling'],
          si: ['ඇඳ විවේකයේ සිටින වැඩිහිටියන්ගේ පූර්ණ සත්කාරය', 'ඇඳ තුවාල වැළැක්වීමට සෑම පැය 2කට වරක් ඉරියව් මාරුව', 'රුධිර පීඩනය සහ සීනි සටහන් පොතක් තැබීම', 'ඩිමෙන්ෂියා සහ ආඝාත රෝගී විශේෂඥ රැකවරණය'],
          ta: ['முழுமையான முதியோர் கவனிப்பு', 'படுக்கைப்புண் தடுப்பு உடலசைவு', 'தினசரி ஆரோக்கிய அட்டவணை', 'மறதி நோய் & பக்கவாத கவனிப்பு']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'NVQ 5 Senior Nurse', si: 'NVQ 5 ජ්‍යෙෂ්ඨ හෙද', ta: 'NVQ 5 மூத்த செவிலியர்' },
        badge: { en: 'Intensive Clinical', si: 'උසස් සායනික නේවාසික', ta: 'தீவிர சிகிச்சை செவிலியர்' },
        priceLKR: 9500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Round-the-clock intensive nursing protocol', 'Catheter, tracheostomy & suction care', 'IV injections & sterile dressings', 'Weekly report directly to treating specialist'],
          si: ['පැය 24 පුරාම ක්‍රියාත්මක වන උසස් සායනික හෙද සත්කාරය', 'කැතීටර්, නාල සහ ඔක්සිජන් කළමනාකරණය', 'IV එන්නත් සහ තුවාල විෂබීජ නාශනය', 'විශේෂඥ වෛද්‍යවරයාට සතිපතා වාර්තා ලබාදීම'],
          ta: ['24 மணி நேர தீவிர சிகிச்சை', 'கதீட்டர் & ஆக்சிஜன் பராமரிப்பு', 'IV ஊசி & கட்டு', 'மருத்துவருக்கு அறிக்கை']
        }
      }
    ],
    isActive: true
  },
  {
    id: "post_surgery_care",
    category: "recovery",
    name: {
      en: "Post-Surgery & Recovery Care",
      si: "ශල්‍යකර්ම හා රෝහල් ප්‍රතිකාර පසු සත්කාරය",
      ta: "அறுவை சிகிச்சைக்குப் பிந்தைய பராமரிப்பு"
    },
    shortDescription: {
      en: "Skilled nursing aid for patients recovering from surgery, fractures, or major medical treatments.",
      si: "ශල්‍යකර්ම, අස්ථි බිඳීම් හෝ බරපතල රෝගාබාධවලින් සුවය ලබන රෝගීන් සඳහා විශේෂ හෙද සත්කාරය.",
      ta: "அறுவை சிகிச்சை அல்லது பெரிய நோய்களிலிருந்து மீண்டு வரும் நோயாளிகளுக்கான பராமரிப்பு."
    },
    description: {
      en: "Focused post-discharge recuperation care helping patients regain independence safely, avoiding infections, and following doctor-prescribed recovery regimens.",
      si: "රෝහලෙන් නිවසට පැමිණි පසු ආසාදනවලින් තොරව ඉක්මනින් සුවය ලැබීමට උපකාරී වන වෛද්‍ය උපදෙස් අනුව සිදුවන විශේෂ සත්කාරය.",
      ta: "மருத்துவமனையிலிருந்து திரும்பிய பிறகு விரைவாக குணமடைய மருத்துவர் வழிகாட்டுதலின் படியான கவனிப்பு."
    },
    shiftType: "12h_day",
    hours: 12,
    priceLKR: 6500,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "HeartPulse",
    defaultTierId: "nvq_5_nurse",
    features: {
      en: ["Wound dressing & sterilization", "Drain & catheter monitoring", "Strict medications", "Recovery exercise"],
      si: ["තුවාල වෙළුම් දැමීම (Dressing)", "කැතීටර් සහ නාල නිරීක්ෂණය", "නිවැරදි ඖෂධ ලබාදීම", "සුවවීමේ ව්‍යායාම"],
      ta: ["காய பராமரிப்பு", "கதீட்டர் கண்காணிப்பு", "மருந்து அட்டவணை", "உடற்பயிற்சி உதவி"]
    },
    tiers: [
      {
        tierId: 'nurse_assistant',
        tierName: { en: 'Nurse Assistant', si: 'හෙද සහායක', ta: 'செவிலியர் உதவியாளர்' },
        badge: { en: 'Basic Recovery', si: 'මූලික සුවය ලැබීම', ta: 'அடிப்படை கவனிப்பு' },
        priceLKR: 4500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Assisted sponge bathing & bed hygiene', 'Medication reminders & pain tracking', 'Assisting with mobility and transfers', 'Nutritious soft recovery meals'],
          si: ['ස්නානය සහ පිරිසිදුකම', 'වේදනා නාශක සහ ඖෂධ ලබාදීම', 'ඇඳෙන් නැගිටීමට සහාය වීම', 'සුවය ලැබීමට අවශ්‍ය පෝෂ්‍යදායී ආහාර'],
          ta: ['குளியல் உதவி', 'வலி நிவாரண மருந்து', 'இயக்க உதவி', 'சத்தான உணவு']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'NVQ 4 Certified', si: 'NVQ 4 පුහුණු සාත්තු', ta: 'NVQ 4 சான்றிதழ்' },
        badge: { en: 'Orthopedic & Fracture', si: 'අස්ථි බිඳීම් සත්කාරය', ta: 'எலும்பு முறிவு கவனிப்பு' },
        priceLKR: 5500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Safe transfer protocol for fracture patients', 'Regular surgical site inspection & cleaning', 'Pain management adherence', 'Preventing deep vein thrombosis (DVT) with limb movements'],
          si: ['අස්ථි බිඳීම් රෝගීන් ආරක්ෂිතව මාරු කිරීම', 'තුවාලය පරීක්ෂා කර පිරිසිදුව තැබීම', 'වේදනා කළමනාකරණය', 'ලේ කැටි ගැසීම් වැළැක්වීමේ මෘදු ව්‍යායාම'],
          ta: ['பாதுகாப்பான இடமாற்றம்', 'காய ஆய்வு & தூய்மை', 'வலி மேலாண்மை', 'இரத்த உறைவு தடுப்பு பயிற்சி']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'NVQ 5 Senior Nurse', si: 'NVQ 5 ජ්‍යෙෂ්ඨ හෙද', ta: 'NVQ 5 மூத்த செவிலියர்' },
        badge: { en: 'Recommended for Surgery ⭐', si: 'ශල්‍යකර්ම සඳහා නිර්දේශිතයි ⭐', ta: 'அறுவை சிகிச்சைக்கு சிறந்தது ⭐' },
        isRecommended: true,
        priceLKR: 6500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Complex surgical dressing & aseptic technique', 'Managing drain tubes, catheters & stomas', 'Injectable & IV medications', 'Monitoring infection signs & suture healing'],
          si: ['සංකීර්ණ ශල්‍ය තුවාල විෂබීජ නාශනය කර වෙළුම් දැමීම', 'කැතීටර් සහ නාල හැසිරවීම', 'IV සහ එන්නත් ඖෂධ ලබාදීම', 'ආසාදන ලක්ෂණ සහ මැහුම් පරීක්ෂා කිරීම'],
          ta: ['சிக்கலான அறுவை சிகிச்சை கட்டு', 'குழாய்கள் & கதீட்டர்', 'IV ஊசி மருந்துகள்', 'தொற்று கண்காணிப்பு']
        }
      }
    ],
    isActive: true
  },
  {
    id: "dementia_stroke_care",
    category: "specialized",
    name: {
      en: "Dementia, Alzheimer's & Stroke Care",
      si: "ඩිමෙන්ෂියා, ඇල්සයිමර් සහ ආඝාත විශේෂිත සත්කාරය",
      ta: "மறதி நோய் மற்றும் பக்கவாத சிறப்பு பராமரிப்பு"
    },
    shortDescription: {
      en: "Specialized, empathetic care for seniors with cognitive decline, paralysis, or memory loss.",
      si: "මතකය අඩුවූ, අංශභාග හෝ විශේෂිත ඉවසීමක් අවශ්‍ය රෝගීන් සඳහා පුහුණු කාර්ය මණ්ඩල සත්කාරය.",
      ta: "நினைவாற்றல் குறைபாடு மற்றும் பக்கவாதத்தால் பாதிக்கப்பட்ட முதியவர்களுக்கான சிறப்பு கவனிப்பு."
    },
    description: {
      en: "Gentle, structured and respectful care designed to manage behavioral changes, cognitive decline, communication difficulties, and physical limitations safely.",
      si: "ඩිමෙන්ෂියා සහ ආඝාත රෝගීන්ගේ චර්යාත්මක වෙනස්කම් සහ සන්නිවේදන අපහසුතා තේරුම් ගෙන කරුණාවෙන් සහ ගෞරවයෙන් සිදුකරන විශේෂ සත්කාරය.",
      ta: "நடத்தை மாற்றங்கள் மற்றும் இயலாமையை கனிவோடு அணுகும் சிறப்பு பயிற்சி பெற்ற பராமரிப்பு."
    },
    shiftType: "12h_day",
    hours: 12,
    priceLKR: 6000,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "Brain",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["Patience & emotional calm", "Stroke rehab assistance", "Anti-wandering safety", "Bed turning every 2h"],
      si: ["අසීමිත ඉවසීම හා කරුණාව", "ආඝාත පුනරුත්ථාපන සහාය", "අනතුරු වැළැක්වීම", "පැය 2කට වරක් ඉරියව් මාරුව"],
      ta: ["பொறுமையான அணுகுமுறை", "பக்கவாத புனர்வாழ்வு", "பாதுகாப்பான சூழல்", "படுக்கைப்புண் தடுப்பு"]
    },
    tiers: [
      {
        tierId: 'nurse_assistant',
        tierName: { en: 'Nurse Assistant', si: 'හෙද සහායක', ta: 'செவிலியர் உதவியாளர்' },
        badge: { en: 'Gentle Support', si: 'මෘදු රැකවරණය', ta: 'மென்மையான கவனிப்பு' },
        priceLKR: 4800,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Constant supervision to prevent wandering', 'Assistance with feeding & hygiene', 'Structured daytime routine maintenance', 'Gentle companionship'],
          si: ['අතුරුදහන් වීම් සහ අනතුරු වැළැක්වීමේ නිරන්තර අවධානය', 'කෑම කැවීම සහ පිරිසිදු කිරීම්', 'දෛනික චර්යාව පවත්වා ගැනීම', 'කරුණාවන්ත සත්කාරය'],
          ta: ['தொடர் கண்காணிப்பு', 'உணவு & தூய்மை உதவி', 'வழக்கமான அட்டவணை', 'அன்பான துணை']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'NVQ 4 Certified', si: 'NVQ 4 පුහුණු සාත්තු', ta: 'NVQ 4 சான்றிதழ்' },
        badge: { en: 'Specialist Choice ⭐', si: 'විශේෂඥ තේරීම ⭐', ta: 'சிறப்பு தேர்வு ⭐' },
        isRecommended: true,
        priceLKR: 6000,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Specialized dementia behavioral de-escalation', 'Bed positioning every 2h for paralyzed stroke patients', 'Speech stimulation & passive physiotherapy exercises', 'Comprehensive vitals & cognitive tracking'],
          si: ['ඩිමෙන්ෂියා රෝගීන්ගේ කලබලකාරී හැසිරීම් සන්සුන් කිරීම', 'අංශභාග රෝගීන්ගේ ඉරියව් පැය 2කට වරක් මාරු කිරීම', 'කතාබස් කිරීමට උනන්දු කිරීම සහ මෘදු භෞතචිකිත්සාව', 'රුධිර පීඩනය සහ සෞඛ්‍ය තත්ත්වය සටහන් කිරීම'],
          ta: ['மறதி நோய் நடத்தை கையாளுதல்', 'பக்கவாத நோயாளிகள் உடல் நிலை மாற்றம்', 'பேச்சு & உடற்பயிற்சி தூண்டுதல்', 'முழு ஆரோக்கிய கண்காணிப்பு']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'NVQ 5 Senior Nurse', si: 'NVQ 5 ජ්‍යෙෂ්ඨ හෙද', ta: 'NVQ 5 மூத்த செவிலியர்' },
        badge: { en: 'Severe Stroke Care', si: 'බරපතල ආඝාත සත්කාරය', ta: 'தீவிர பக்கவாத கவனிப்பு' },
        priceLKR: 7500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Feeding via nasogastric (NG) tube & tracheostomy care', 'Catheter insertion & clinical complication management', 'Intensive stroke rehabilitation coordination', 'Medical liaison with neurologist / physician'],
          si: ['නහය හරහා බටයෙන් (NG Tube) ආහාර ලබාදීම', 'කැතීටර් සහ සායනික සංකූලතා කළමනාකරණය', 'උසස් ආඝාත පුනරුත්ථාපන සහාය', 'ස්නායු විශේෂඥ වෛද්‍යවරයා සමඟ සම්බන්ධ වීම'],
          ta: ['உணவுக்குழாய் & கதீட்டர் பராமரிப்பு', 'மருத்துவ சிக்கல்கள் கையாளுதல்', 'தீவிர பக்கவாத புனர்வாழ்வு', 'மருத்துவருடன் தொடர்பு']
        }
      }
    ],
    isActive: true
  },
  {
    id: "doctor_home_visit",
    category: "specialized",
    name: {
      en: "Home Visit Medical Officer (Doctor)",
      si: "වෛද්‍ය නිවාස පරීක්ෂණ (MBBS වෛද්‍යවරයා)",
      ta: "வீட்டு வருகை மருத்துவ அதிகாரி (மருத்துவர்)"
    },
    shortDescription: {
      en: "SLMC registered medical doctor home visit for complete clinical evaluation and prescriptions.",
      si: "ශ්‍රී ලංකා වෛද්‍ය සභාවේ (SLMC) ලියාපදිංචි MBBS වෛද්‍යවරයෙකු නිවසටම පැමිණ සිදුකරන සම්පූර්ණ පරීක්ෂාව.",
      ta: "SLMC பதிவு பெற்ற எம்பிபிஎஸ் மருத்துவர் வீட்டு வருகை பரிசோதனை."
    },
    description: {
      en: "Comprehensive clinical consultation by an experienced medical officer at your home, reviewing test results, issuing official prescriptions, and examining bedridden elders.",
      si: "රෝහලට රැගෙන යාමට අපහසු ඇඳ විවේකයේ සිටින වැඩිහිටියන් නිවසේදීම පරීක්ෂා කර, රසායනාගාර වාර්තා බලා, නිල බෙහෙත් වට්ටෝරු නිකුත් කිරීම.",
      ta: "மருத்துவமனைக்கு வர முடியாத முதியவர்களை வீட்டிலேயே முழுமையாக பரிசோதித்து மருந்து பரிந்துரைத்தல்."
    },
    shiftType: "short_visit",
    hours: 2,
    priceLKR: 6500,
    pricingUnit: {
      en: "/ visit",
      si: "/ පැමිණීමකට",
      ta: "/ ஒரு வருகைக்கு"
    },
    icon: "HeartPulse",
    defaultTierId: "doctor",
    features: {
      en: ["Full clinical examination", "Prescription renewal & issuance", "Reviewing blood labs & ECG", "Family health advisory"],
      si: ["සම්පූර්ණ ශාරීරික පරීක්ෂාව", "ඖෂධ නියම කිරීම සහ සංශෝධනය", "රුධිර වාර්තා සහ ECG බැලීම", "පවුලේ සාමාජිකයින්ට උපදෙස්"],
      ta: ["முழு மருத்துவ பரிசோதனை", "மருந்து பரிந்துரை", "ஆய்வக அறிக்கைகள் ஆய்வு", "குடும்ப ஆலோசனை"]
    },
    tiers: [
      {
        tierId: 'doctor',
        tierName: { en: 'SLMC MBBS Doctor', si: 'MBBS වෛද්‍යවරයා', ta: 'எம்பிபிஎஸ் மருத்துவர்' },
        badge: { en: 'Certified Physician', si: 'ලියාපදිංචි වෛද්‍යවරයා', ta: 'பதிவு பெற்ற மருத்துவர்' },
        isRecommended: true,
        priceLKR: 6500,
        pricingUnit: { en: '/ visit', si: '/ පැමිණීමකට', ta: '/ ஒரு வருகைக்கு' },
        responsibilities: {
          en: ['Detailed in-home clinical diagnosis', 'Prescription medication renewal & dosage tuning', 'Ordering follow-up investigations', 'Direct medical guidance for family'],
          si: ['නිවසේදීම සම්පූර්ණ සායනික රෝග විනිශ්චය', 'බෙහෙත් වට්ටෝරු නිකුත් කිරීම සහ මාත්‍රා වෙනස් කිරීම', 'අවශ්‍ය රසායනාගාර පරීක්ෂණ නියම කිරීම', 'පවුලේ සාමාජිකයින්ට සෘජු වෛද්‍ය උපදෙස්'],
          ta: ['விரிவான மருத்துவ பரிசோதனை', 'மருந்து பரிந்துரை மற்றும் மாற்றம்', 'ஆய்வக சோதனைகள் குறித்தல்', 'குடும்பத்தினருக்கு நேரடி வழிகாட்டல்']
        }
      }
    ],
    isActive: true
  },
  {
    id: "newborn_mother_care",
    category: "child_care",
    name: {
      en: "Newborn & Post-Natal Mother Care",
      si: "මාතෘ සහ අලුත උපන් බිළිඳු සත්කාරය",
      ta: "புதிதாகப் பிறந்த குழந்தை & தாய் பராமரிப்பு"
    },
    shortDescription: {
      en: "Loving, certified maternity nurse & nanny for infant sponge bathing, umbilical cord care, sleep soothing, and mother recovery.",
      si: "අලුත උපන් බිළිඳාගේ පෙකණි වැල රැකවරණය, ස්නානය, නිසි නින්ද සහ මවගේ සුවය තහවුරු කරන විශ්වාසනීය සාත්තු සේවය.",
      ta: "புதிதாகப் பிறந்த குழந்தையின் பாதுகாப்பு, தொப்புள் கொடி பராமரிப்பு, உணவு மற்றும் தாயின் ஆரோக்கியத்திற்கான பிரத்யேக பராமரிப்பு."
    },
    description: {
      en: "Specialized maternal and newborn support helping new mothers recuperate from childbirth while ensuring the baby receives expert hygienic, feeding, and nighttime care.",
      si: "ප්‍රසූතියෙන් පසු මවට විවේකය සහ පෝෂණය ලබාදෙමින්, බිළිඳාගේ සියලු සත්කාරක අවශ්‍යතා, බෝතල් විෂබීජහරණය සහ රාත්‍රී නින්ද කළමනාකරණය කරන පූර්ණ සත්කාරය.",
      ta: "குழந்தை பிறப்பிற்குப் பின் தாய்க்கான ஓய்வு மற்றும் குழந்தையின் சுகாதாரமான பராமரிப்பு."
    },
    shiftType: "12h_day",
    hours: 12,
    priceLKR: 4800,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "Baby",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["Umbilical cord & skin care", "Infant sponge bath & hygiene", "Sterilization & feeding support", "Maternal rest facilitation"],
      si: ["පෙකණි වැල පිරිසිදු කිරීම සහ සමේ සත්කාර", "බිළිඳා ස්නානය කරවීම සහ ඇඳුම් මාරුව", "බෝතල් විෂබීජහරණය සහ කිරි දීම", "මවගේ සුවය සහ විවේකයට සහාය"],
      ta: ["தொப்புள் கொடி பராமரிப்பு", "குழந்தை குளியல் & சுகாதாரம்", "பால் பாட்டில் கிருமி நீக்கம்", "தாயின் ஓய்வு"]
    },
    tiers: [
      {
        tierId: 'basic_aide',
        tierName: { en: 'Experienced Infant Aide', si: 'පළපුරුදු බිළිඳු සහායිකා', ta: 'அனுபவமுள்ள குழந்தை உதவியாளர்' },
        badge: { en: 'Family Aide', si: 'මිත්‍රශීලී රැකවරණය', ta: 'குடும்ப உதவி' },
        priceLKR: 3800,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Gentle infant sponge bathing & changing', 'Washing & steam sterilizing baby feeding bottles', 'Assisting mother with hydration & healthy meals', 'Soothing baby between routine nap cycles'],
          si: ['බිළිඳා ඇඟ පිසදැමීම සහ ඇඳුම් මාරුව', 'කිරි බෝතල් සෝදා විෂබීජහරණය කිරීම', 'මවට ආහාර සහ වතුර ළඟට ලබාදීම', 'දරුවා නලවා නිදි කරවීම'],
          ta: ['குழந்தை குளியல் உதவி', 'பால் பாட்டில் தூய்மை', 'தாய்க்கு உணவு உதவி', 'தூங்க வைத்தல்']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'Certified Maternity Nurse', si: 'පුහුණු මාතෘ හා බිළිඳු හෙද', ta: 'சான்றளிக்கப்பட்ட தாய்-சேய் செவிலியர்' },
        badge: { en: 'Most Recommended ⭐', si: 'වඩාත් නිර්දේශිත ⭐', ta: 'மிகவும் பரிந்துரைக்கப்பட்டது ⭐' },
        isRecommended: true,
        priceLKR: 4800,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Clinical umbilical cord antiseptic care', 'Colic, gas relief & burping protocol', 'Lactation positioning & feeding scheduling', 'Monitoring infant jaundice signs & weight progress'],
          si: ['පෙකණි වැල විෂබීජ නාශනය කර වියලිව තැබීම', 'බඩ පිපුම (Colic) සහ ගුඩුස් යැවීම', 'මව්කිරි දීමේ ඉරියව් සහ වේලාවන් සටහන් කිරීම', 'සෙංගමාල (Jaundice) ලක්ෂණ සහ උණ පරීක්ෂාව'],
          ta: ['தொப்புள் கொடி சிகிச்சை', 'வயிற்று உப்புசம் குறைப்பு', 'தாய்ப்பால் கொடுக்கும் முறை', 'மஞ்சள் காமாலை கண்காணிப்பு']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'Pediatric Clinical Nurse', si: 'ළමා රෝග ජ්‍යෙෂ්ඨ හෙද', ta: 'குழந்தை நல மூத்த செவிலியர்' },
        badge: { en: 'Premature & Special', si: 'උසස් සායනික ළමා හෙද', ta: 'தீவிர குழந்தை நலம்' },
        priceLKR: 6200,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Care for premature (pre-term) or low birthweight infants', 'Prescribed medication administration & phototherapy liaison', 'Post-cesarean (C-section) surgical incision wound care for mother', 'Direct pediatric specialist communication'],
          si: ['නොමේරූ හෝ බර අඩු බිළිඳුන්ගේ විශේෂ හෙද සත්කාරය', 'වෛද්‍ය උපදෙස් අනුව ඖෂධ ලබාදීම', 'C-Section සිසේරියන් ශල්‍ය තුවාල විෂබීජ නාශනය කර වෙළුම් දැමීම', 'ළමා රෝග විශේෂඥ වෛද්‍යවරයාගේ උපදෙස් අනුව ක්‍රියා කිරීම'],
          ta: ['குறைபிரசவ குழந்தை பராமரிப்பு', 'மருந்து நிர்வாகம்', 'சிசேரியன் அறுவை சிகிச்சை காயம்', 'மருத்துவருடன் தொடர்பு']
        }
      }
    ],
    isActive: true
  },
  {
    id: "child_care_toddler",
    category: "child_care",
    name: {
      en: "Toddler & Child Daytime Care (1-6 Years)",
      si: "දෛනික ළමා සාත්තු සහ පෙරපාසල් සහාය (අවු. 1-6)",
      ta: "குழந்தைகள் பகல்நேர பராமரிப்பு (1-6 வயது)"
    },
    shortDescription: {
      en: "Trustworthy child nanny for working parents: nutritious feeding, safe play, learning activities, and hygiene.",
      si: "රැකියාවට යන මව්පියන් වෙනුවෙන් දරුවාගේ ආරක්ෂාව, පෝෂ්‍යදායී ආහාර, ඉගෙනුම් ක්‍රියාකාරකම් සහ සනීපාරක්ෂාව සහතික කරන සත්කාරය.",
      ta: "பணிபுரியும் பெற்றோருக்காக குழந்தையின் பாதுகாப்பு, சத்தான உணவு மற்றும் கல்வி விளையாட்டுகள்."
    },
    description: {
      en: "Reliable, loving caregiver supervision providing undivided attention, routine development, homework & play support, and healthy meals while parents are at work.",
      si: "දෙමව්පියන් කාර්යාලයේ සිටින වේලාව තුළ දරුවා අනතුරුවලින් තොරව, කාලසටහනකට අනුව ආහාර ගැනීම, අකුරු ලිවීම, සෙල්ලම් කිරීම සහ නිසි නින්ද පවත්වා ගැනීම.",
      ta: "பெற்றோர்கள் வேலையில் இருக்கும் போது குழந்தையின் கல்வி, விளையாட்டு மற்றும் பாதுகாப்பு உறுதி செய்யப்படுகிறது."
    },
    shiftType: "12h_day",
    hours: 12,
    priceLKR: 4200,
    pricingUnit: {
      en: "/ day",
      si: "/ දිනකට",
      ta: "/ ஒரு நாளைக்கு"
    },
    icon: "Smile",
    defaultTierId: "nvq_4_caregiver",
    features: {
      en: ["100% police background verified", "Nutritious meal preparation & feeding", "Preschool activities & story reading", "Strict home safety & child hygiene"],
      si: ["100% පොලිස් වාර්තා මඟින් තහවුරු කළ කාර්ය මණ්ඩලය", "පෝෂ්‍යදායී ආහාර පිළියෙල කර කැවීම", "පෙරපාසල් ඉගෙනුම සහ චිත්‍ර ඇඳීම", "නිවසේ ආරක්ෂාව සහ දරුවාගේ පිරිසිදුකම"],
      ta: ["காவல்துறை அனுமதி பெற்றது", "சத்தான உணவு தயாரிப்பு", "பாதுகாப்பான விளையாட்டு", "சுத்தமான சூழல்"]
    },
    tiers: [
      {
        tierId: 'basic_aide',
        tierName: { en: 'Trained Child Nanny', si: 'ළමා සහායිකා', ta: 'குழந்தை பராமரிப்பாளர்' },
        badge: { en: 'Reliable Nanny', si: 'විශ්වාසනීය රැකවරණය', ta: 'நம்பகமான துணை' },
        priceLKR: 3200,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Constant active supervision indoors & outdoors', 'Serving meals, snacks, and water on schedule', 'Assisting with bathing, dressing, and toilet routines', 'Tidying up children’s play area & toys'],
          si: ['දරුවා ගැන නිරන්තර අවධානයෙන් සිටීම', 'නියමිත වේලාවට ආහාර සහ වතුර ලබාදීම', 'ස්නානය කරවීම සහ වැසිකිලි පුහුණුවට සහාය', 'සෙල්ලම් බඩු සහ කාමරය පිළිවෙළට තැබීම'],
          ta: ['தொடர் கண்காணிப்பு', 'உணவு & தண்ணீர் உதவி', 'குளியல் & ஆடை உதவி', 'விளையாட்டு பகுதி தூய்மை']
        }
      },
      {
        tierId: 'nvq_4_caregiver',
        tierName: { en: 'ECD Certified Child Caregiver', si: 'පෙරපාසල් හා ළමා සංවර්ධන පුහුණු', ta: 'முன்பள்ளி & குழந்தை மேம்பாட்டு பயிற்சி' },
        badge: { en: 'Top Choice for Kids ⭐', si: 'ඉහළම තේරීම ⭐', ta: 'சிறந்த தேர்வு ⭐' },
        isRecommended: true,
        priceLKR: 4200,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Early childhood sensory play & cognitive reading', 'Speech stimulation, rhymes & vocabulary practice', 'Positive discipline & emotional reassurance', 'Child CPR & home first-aid certified'],
          si: ['පෙරපාසල් සංවේදී ක්‍රියාකාරකම් සහ පොත් කියවීම', 'කතාබහ දියුණු කිරීම, කවි සහ ගීත පුහුණුව', 'යහපත් හැදියාව සහ ආදරණීය මඟපෙන්වීම', 'හදිසි ප්‍රථමාධාර (Child First Aid) පුහුණුව'],
          ta: ['கல்வி விளையாட்டுகள் & வாசிப்பு', 'பேச்சுத்திறன் மேம்பாடு', 'நல்லொழுக்க வழிகாட்டல்', 'குழந்தை முதலுதவி பயிற்சி']
        }
      },
      {
        tierId: 'nvq_5_nurse',
        tierName: { en: 'Special Needs / Pediatric Nurse', si: 'විශේෂ අවශ්‍යතා / ළමා හෙද', ta: 'சிறப்பு தேவை / குழந்தை செவிலியர்' },
        badge: { en: 'Medical & Special Needs', si: 'විශේෂ සායනික සත්කාර', ta: 'மருத்துவ கவனிப்பு' },
        priceLKR: 5500,
        pricingUnit: { en: '/ day', si: '/ දිනකට', ta: '/ ஒரு நாளைக்கு' },
        responsibilities: {
          en: ['Care for children with Autism, ADHD, or Down Syndrome', 'Managing asthma inhalers, nebulizers, or seizures', 'Medication logging and therapeutic activity routines', 'Specialist developmental therapist liaison'],
          si: ['ඔටිසම් (Autism) හෝ විශේෂ අවශ්‍යතා සහිත දරුවන්ගේ සාත්තු සේවය', 'ඇදුම (Inhaler/Nebulizer) සහ වලිප්පු තත්ත්වයන් කළමනාකරණය', 'වෛද්‍ය උපදෙස් අනුව ඖෂධ ලබාදීම', 'චිකිත්සක වෛද්‍යවරුන්ගේ උපදෙස් අනුව ක්‍රියා කිරීම'],
          ta: ['சிறப்பு தேவை குழந்தைகள் பராமரிப்பு', 'ஆஸ்துமா & இன்ஹேலர் மேலாண்மை', 'மருந்து அட்டவணை', 'சிகிச்சையாளருடன் தொடர்பு']
        }
      }
    ],
    isActive: true
  }
];

export const districtList = [
  "Colombo (කොළඹ)",
  "Gampaha (ගම්පහ)",
  "Kalutara (කළුතර)",
  "Kandy (මහනුවර)",
  "Galle (ගාල්ල)",
  "Matara (මාතර)",
  "Kurunegala (කුරුණෑගල)",
  "Ratnapura (රත්නපුර)",
  "Anuradhapura (අනුරාධපුර)",
  "Jaffna (යාපනය)",
  "Badulla (බදුල්ල)",
  "Matale (මාතලේ)",
  "Nuwara Eliya (නුවරඑළිය)",
  "Kegalle (කෑගල්ල)",
  "Puttalam (පුත්තලම)",
  "Hambantota (හම්බන්තොට)",
  "Ampara (අම්පාර)",
  "Batticaloa (මඩකලපුව)",
  "Trincomalee (ත්‍රිකුණාමලය)",
  "Monaragala (මොනරාගල)",
  "Polonnaruwa (පොළොන්නරුව)",
  "Vavuniya (වවුනියාව)",
  "Kilinochchi (කිලිනොච්චිය)",
  "Mannar (මන්නාරම)",
  "Mullaitivu (මුලතිව්)"
];
