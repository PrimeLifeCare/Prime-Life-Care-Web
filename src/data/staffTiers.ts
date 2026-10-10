import { StaffTier } from '@/types';

export const staffTiers: StaffTier[] = [
  {
    id: 'doctor',
    name: {
      en: 'Home Visit Medical Officer (Doctor)',
      si: 'වෛද්‍ය නිවාස පරීක්ෂණ (MBBS වෛද්‍යවරයා)',
      ta: 'வீட்டு வருகை மருத்துவ அதிகாரி (மருத்துவர்)'
    },
    titleBadge: {
      en: 'SLMC Registered MBBS Doctor',
      si: 'ශ්‍රී ලංකා වෛද්‍ය සභාවේ (SLMC) ලියාපදිංචි වෛද්‍යවරයා',
      ta: 'SLMC பதிவு பெற்ற எம்பிபிஎஸ் மருத்துவர்'
    },
    qualifications: {
      en: 'MBBS Doctor with active clinical registration and emergency care experience.',
      si: 'ශ්‍රී ලංකා වෛද්‍ය සභාවේ ලියාපදිංචි, සායනික හා හදිසි ප්‍රතිකාර පළපුරුද්ද සහිත MBBS වෛද්‍යවරුන්.',
      ta: 'செயலில் உள்ள மருத்துவ பதிவு மற்றும் அவசர சிகிச்சை அனுபவமுள்ள மருத்துவர்கள்.'
    },
    dailyRateLKR: 6500,
    shiftTypeNote: {
      en: 'Per Home Consultation Visit',
      si: 'නිවාස පරීක්ෂණ පැමිණීමකට',
      ta: 'ஒரு வீட்டு வருகைக்கு'
    },
    idealFor: {
      en: 'Routine chronic illness checkups, blood work reviews, prescription adjustments, and post-discharge consultations.',
      si: 'නිදන්ගත රෝගීන් පරීක්ෂාව, රසායනාගාර වාර්තා බැලීම, ඖෂධ වෙනස් කිරීම සහ රෝහලෙන් නිවසට පැමිණි පසු වෛද්‍ය උපදෙස්.',
      ta: 'வழக்கமான பரிசோதனைகள், இரத்த பரிசோதனை மற்றும் மருந்து மாற்றங்கள்.'
    },
    responsibilities: {
      en: [
        'Detailed clinical examination & diagnosis',
        'Prescription renewal & dosage adjustments',
        'Ordering and review of lab tests & ECGs',
        'Direct consultation with patient family'
      ],
      si: [
        'රෝගියා පරීක්ෂා කර සම්පූර්ණ සායනික තක්සේරුවක් ලබාදීම',
        'නියමිත ඖෂධ සමාලෝචනය සහ මාත්‍රාවන් සකස් කිරීම',
        'රසායනාගාර පරීක්ෂණ නියම කිරීම සහ වාර්තා බැලීම',
        'පවුලේ සාමාජිකයන් සමඟ රෝගී තත්ත්වය පිළිබඳ සාකච්ඡා කිරීම'
      ],
      ta: [
        'விரிவான மருத்துவ பரிசோதனை மற்றும் நோயறிதல்',
        'மருந்து பரிந்துரை மற்றும் மருந்தளவு மாற்றங்கள்',
        'ஆய்வக சோதனைகள் மதிப்பாய்வு',
        'குடும்பத்தினருடன் ஆலோசனை'
      ]
    },
    experienceYears: '5+ Years Clinical Experience'
  },
  {
    id: 'nvq_5_nurse',
    name: {
      en: 'NVQ Level 5 Senior Nursing Officer',
      si: 'NVQ Level 5 ජ්‍යෙෂ්ඨ හෙද නිලධාරී',
      ta: 'NVQ நிலை 5 மூத்த செவிலியர்'
    },
    titleBadge: {
      en: 'NVQ Level 5 Diploma Certified Nurse',
      si: 'NVQ 5 හෙද ඩිප්ලෝමා සහතික ලත් හෙද නිලධාරී',
      ta: 'NVQ 5 நர்சிங் டிப்ளமோ சான்றளிக்கப்பட்ட செவிலியர்'
    },
    qualifications: {
      en: 'Government recognized NVQ Level 5 Nursing Diploma with intensive hospital ward experience.',
      si: 'රජය පිළිගත් NVQ Level 5 උසස් හෙද ඩිප්ලෝමා සුදුසුකම් සහ රෝහල් වාට්ටු පළපුරුද්ද සහිත කාර්ය මණ්ඩලය.',
      ta: 'அரசாங்கத்தால் அங்கீகரிக்கப்பட்ட NVQ நிலை 5 செவிலியர் டிப்ளமோ.'
    },
    dailyRateLKR: 5800,
    shiftTypeNote: {
      en: 'Per 12h Shift (24h available)',
      si: 'පැය 12 සේවයකට (පැය 24 පහසුකම් ඇත)',
      ta: '12 மணி நேர பணிக்கு'
    },
    idealFor: {
      en: 'Complex post-surgical patients, tracheostomy care, catheter insertions, IV medication, and severe stroke rehabilitation.',
      si: 'සංකීර්ණ ශල්‍යකර්ම රෝගීන්, කැතීටර්/නාල හැසිරවීම, IV එන්නත් ලබාදීම සහ බරපතල ආඝාත රෝගී සත්කාරය.',
      ta: 'அறுவை சிகிச்சைக்குப் பின், தீவிர பராமரிப்பு மற்றும் பக்கவாத நோயாளிகள்.'
    },
    responsibilities: {
      en: [
        'Advanced wound dressing & infection control',
        'Catheterization, Ryle’s tube feeding & tracheostomy',
        'IV Cannula care & precise medication timing',
        'Direct coordination with treating specialist doctor'
      ],
      si: [
        'තුවාල විෂබීජ නාශනය කර නිසි පරිදි වෙළුම් දැමීම (Advanced Dressing)',
        'කැතීටර්, නාල (Ryles tube) මඟින් ආහාර ලබාදීම අධීක්ෂණය',
        'නහරගත ඖෂධ (IV) ලබාදීම සහ නිරීක්ෂණය',
        'රෝගියාට ප්‍රතිකාර කරන විශේෂඥ වෛද්‍යවරයා සමඟ සම්බන්ධ වීම'
      ],
      ta: [
        'காய பராமரிப்பு மற்றும் தொற்று கட்டுப்பாடு',
        'கதீட்டர் மற்றும் உணவுக்குழாய் பராமரிப்பு',
        'ஊசி மற்றும் மருந்து நிர்வாகம்',
        'மருத்துவருடன் தொடர் தொடர்பு'
      ]
    },
    experienceYears: '3 - 6 Years Hospital Experience'
  },
  {
    id: 'nvq_4_caregiver',
    name: {
      en: 'NVQ Level 4 Certified Caregiver',
      si: 'NVQ Level 4 පුහුණු සාත්තු සේවක/සේවිකා',
      ta: 'NVQ நிலை 4 சான்றளிக்கப்பட்ட பராமரிப்பாளர்'
    },
    titleBadge: {
      en: 'NVQ Level 4 Certified Geriatric Aide',
      si: 'NVQ 4 වැඩිහිටි සාත්තු සේවා සහතික ලත්',
      ta: 'NVQ 4 முதியோர் பராமரிப்பு சான்றிதழ்'
    },
    qualifications: {
      en: 'Accredited NVQ Level 4 Caregiver training with specialized geriatric and elderly patient modules.',
      si: 'රජය පිළිගත් NVQ Level 4 ආයතනික වැඩිහිටි සත්කාරක සහතිකය සහ ප්‍රායෝගික සාත්තු පුහුණුව.',
      ta: 'அங்கீகரிக்கப்பட்ட NVQ நிலை 4 முதியோர் பராமரிப்பு பயிற்சி பெற்றவர்.'
    },
    dailyRateLKR: 4500,
    shiftTypeNote: {
      en: 'Per 12h Shift (24h available)',
      si: 'පැය 12 සේවයකට (පැය 24 පහසුකම් ඇත)',
      ta: '12 மணி நேர பணிக்கு'
    },
    idealFor: {
      en: 'Bedridden elders, Dementia and Alzheimer’s patients, daily vitals recording, and fall prevention.',
      si: 'ඇඳ විවේකයේ සිටින වැඩිහිටියන්, ඩිමෙන්ෂියා සහ මතකය අඩුවූ රෝගීන්, ඇඳ තුවාල වැළැක්වීම සහ දෛනික රැකවරණය.',
      ta: 'படுக்கையில் உள்ள முதியவர்கள், மறதி நோய் உள்ளவர்கள் மற்றும் தினசரி பராமரிப்பு.'
    },
    responsibilities: {
      en: [
        'Bed turning every 2 hours & pressure sore prevention',
        'Daily vitals monitoring (BP, Blood Glucose, Pulse)',
        'Prescribed medication adherence & record keeping',
        'Full sponge baths, oral hygiene & mobility support'
      ],
      si: [
        'ඇඳ තුවාල වැළැක්වීමට සෑම පැය 2කට වරක් රෝගියාගේ ඉරියව් මාරු කිරීම',
        'දෛනික රුධිර පීඩනය, සීනි මට්ටම සහ උණ සටහන් කිරීම',
        'නියමිත වේලාවට ඖෂධ ලබාදී වාර්තා පොතේ සටහන් කිරීම',
        'ස්නානය, මුඛ පිරිසිදුකම සහ ඇවිදීමට සහාය වීම'
      ],
      ta: [
        'படுக்கைப்புண் தடுப்பு மற்றும் உடலை மாற்றி படுக்க வைத்தல்',
        'இரத்த அழுத்தம், சர்க்கரை அளவு கண்காணிப்பு',
        'மருந்துகள் வழங்குதல் மற்றும் பதிவு செய்தல்',
        'முழுமையான குளியல் மற்றும் தூய்மை உதவி'
      ]
    },
    experienceYears: '2 - 4 Years Elderly Care Experience'
  },
  {
    id: 'nurse_assistant',
    name: {
      en: 'Certified Nurse Assistant (Aide)',
      si: 'හෙද සහායක (Nurse Assistant / Aide)',
      ta: 'செவிலியர் உதவியாளர்'
    },
    titleBadge: {
      en: 'Nurse Aide Certified Training',
      si: 'හෙද සහායක පුහුණු සහතික ලත්',
      ta: 'செவிலியர் உதவியாளர் பயிற்சி சான்றிதழ்'
    },
    qualifications: {
      en: 'Certified nursing aid course completed from private healthcare institutes with clinical exposure.',
      si: 'පුද්ගලික රෝහල් හෝ පිළිගත් හෙද ආයතන මඟින් මූලික හෙද සහායක පුහුණුව ලබා ඇති කාර්ය මණ්ඩලය.',
      ta: 'செவிலியர் உதவியாளர் பயிற்சி முடித்த அனுபவமிக்க பணியாளர்.'
    },
    dailyRateLKR: 3800,
    shiftTypeNote: {
      en: 'Per 12h Shift (24h available)',
      si: 'පැය 12 සේවයකට (පැය 24 පහසුකම් ඇත)',
      ta: '12 மணி நேர பணிக்கு'
    },
    idealFor: {
      en: 'Hospital discharge recovery, elderly assistance, mobility rehabilitation, and routine health supervision.',
      si: 'රෝහලෙන් නිවසට පැමිණි පසු සාමාන්‍ය සුවය ලැබීම, වැඩිහිටියන් රැකබලා ගැනීම සහ දෛනික සෞඛ්‍ය අධීක්ෂණය.',
      ta: 'மருத்துவமனையிலிருந்து திரும்பிய பின் வழக்கமான கவனிப்பு.'
    },
    responsibilities: {
      en: [
        'Assisting with feeding and prescribed meals',
        'Monitoring fluid intake & output',
        'Assisted bathing and clean dressing changes',
        'Gentle joint movements and wheelchair transfer'
      ],
      si: [
        'ආහාර පිසීම, කැවීම සහ පෝෂණය ලබාදීම',
        'දියර ලබාදීම සහ මුත්‍රා ප්‍රමාණය නිරීක්ෂණය කිරීම',
        'ස්නානය කර ඇඳුම් මාරු කර පිරිසිදුව තැබීම',
        'රෝද පුටුවට මාරු කිරීම සහ මෘදු ව්‍යායාම සහාය'
      ],
      ta: [
        'உணவு தயாரிப்பு மற்றும் ஊட்டுதல்',
        'திரவ உட்கொள்ளல் கண்காணிப்பு',
        'குளியல் மற்றும் ஆடை மாற்றுதல்',
        'சக்கர நாற்காலி உதவி'
      ]
    },
    experienceYears: '1 - 3 Years Care Experience'
  },
  {
    id: 'basic_aide',
    name: {
      en: 'Basic Care Assistant & Companion (Entry)',
      si: 'නොපුහුණු / මූලික සාත්තු සහායක (Companion)',
      ta: 'அடிப்படை பராமரிப்பு உதவியாளர் / துணை'
    },
    titleBadge: {
      en: 'Vetted Domestic Caregiver',
      si: 'පසුබිම් පරීක්ෂා කළ සාමාන්‍ය සාත්තු සේවක',
      ta: 'பின்னணி சரிபார்க்கப்பட்ட உதவியாளர்'
    },
    qualifications: {
      en: 'Police cleared, empathetic domestic caregiver trained in basic hygiene and companionship.',
      si: 'පොලිස් වාර්තා මඟින් තහවුරු කළ, මූලික ගෘහස්ථ සාත්තු කටයුතු සහ සහාය ලබාදිය හැකි කරුණාවන්ත සේවකයින්.',
      ta: 'காவல்துறை சான்றிதழ் பெற்ற வீட்டு பராமரிப்பு உதவியாளர்.'
    },
    dailyRateLKR: 3000,
    shiftTypeNote: {
      en: 'Per 12h Shift (24h available)',
      si: 'පැය 12 සේවයකට (පැය 24 පහසුකම් ඇත)',
      ta: '12 மணி நேர பணிக்கு'
    },
    idealFor: {
      en: 'Budget-conscious families seeking warm elder companionship, walking escort, feeding, and light housekeeping support.',
      si: 'අඩු වියදමකින් වැඩිහිටියෙකු තනි නොකර රැකබලා ගැනීමට, කතාබස් කිරීමට, කෑම කැවීමට සහ ගෙදර දොරේ සහායට.',
      ta: 'குறைந்த கட்டணத்தில் முதியோருடன் துணை இருக்க மற்றும் அன்றாட தேவைகளுக்கு.'
    },
    responsibilities: {
      en: [
        'Warm companionship and emotional comfort',
        'Accompanying on short walks & garden sitting',
        'Assisting with routine meals and water',
        'Keeping patient room tidy and organized'
      ],
      si: [
        'තනිකම මකාදමන මිත්‍රශීලී සහ කරුණාවන්ත රැකවරණය',
        'මිදුලේ ඇවිදීමට සහ හිරු එළියට කැඳවාගෙන යාම',
        'ආහාර සහ වතුර වේලාවට ලබාදීම',
        'රෝගියා සිටින කාමරය පිරිසිදුව සහ පිළිවෙළට තැබීම'
      ],
      ta: [
        'அன்பான தோழமை மற்றும் மன அமைதி',
        'நடைப்பயிற்சிக்கு துணை செல்லுதல்',
        'நேரத்திற்கு உணவு மற்றும் தண்ணீர்',
        'அறையை சுத்தமாக வைத்திருத்தல்'
      ]
    },
    experienceYears: 'Police Verified Entry Level'
  }
];
