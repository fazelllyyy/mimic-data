import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const am_ET: LocaleDefinition = {
  firstNamesMale: [
    'Abebe', 'Alemayehu', 'Berhanu', 'Dawit', 'Elias', 'Fikru', 'Gebre',
    'Habtamu', 'Isaac', 'Jemal', 'Kebede', 'Lemma', 'Mekonnen', 'Negussie',
    'Tesfaye', 'Wondwossen', 'Yohannes', 'Zewdie', 'Abel', 'Biruk',
    'Chala', 'Daniel', 'Endale', 'Fisseha', 'Getachew', 'Henok',
    'Israel', 'Kassahun', 'Melaku', 'Nebiyu', 'Samuel', 'Tekle'
  ],
  firstNamesFemale: [
    'Abebech', 'Birtukan', 'Chaltu', 'Desta', 'Eden', 'Fikirte', 'Genet',
    'Hanna', 'Iman', 'Jewar', 'Kedija', 'Lemlem', 'Meron', 'Nardos',
    'Roman', 'Saba', 'Tigist', 'Wubet', 'Yeshi', 'Zufan',
    'Aster', 'Betelhem', 'Birtukan', 'Dinknesh', 'Eyerusalem', 'Frehiwot',
    'Gelila', 'Hiwot', 'Mekdes', 'Rediet', 'Selam', 'Tirunesh'
  ],
  lastNames: [
    'Tesfaye', 'Alemayehu', 'Mekonnen', 'Kebede', 'Assefa', 'Tadesse',
    'Berhanu', 'Desta', 'Getachew', 'Lemma', 'Wondimu', 'Hailu',
    'Gebremariam', 'Abate', 'Dagne', 'Fikre', 'Girmay', 'Haile',
    'Kassaye', 'Melese', 'Negash', 'Shiferaw', 'Tefera', 'Wolde',
    'Worku', 'Yimer', 'Zeleke', 'Abebe', 'Bogale', 'Demissie'
  ],
  streets: [
    'Bole Road', 'Churchill Avenue', 'Meskel Square Street',
    'Kazanchis Road', 'Arat Kilo Street', 'Sidist Kilo Street',
    'Gambia Street', 'Haile Gebrselassie Road', 'Fitawrari Street',
    'Debrezeit Road', 'Jimma Road', 'Nazret Road',
    'Ras Abebe Aregay Street', 'Cuba Street', 'Mekanissa Road',
    'Gotera Street', 'Summit Street', 'Winget Road',
    'Mickey Leland Street', 'Ethio-China Street'
  ],
  cities: [
    'Addis Ababa', 'Adama', 'Dire Dawa', 'Gondar', 'Mekelle', 'Bahir Dar',
    'Hawassa', 'Jimma', 'Dessie', 'Jijiga', 'Shashamane', 'Debre Markos',
    'Arba Minch', 'Harar', 'Axum', 'Lalibela', 'Bishoftu', 'Weldiya',
    'Nekemte', 'Kombolcha', 'Bale Robe', 'Dilla', 'Wolaita Sodo', 'Mojo'
  ],
  states: [
    'Addis Ababa', 'Afar', 'Amhara', 'Benishangul-Gumuz', 'Dire Dawa',
    'Gambela', 'Harari', 'Oromia', 'Sidama', 'Somali',
    'South West Ethiopia', 'Southern Nations', 'Tigray'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'የሶፍትዌር መሐንዲስ', 'የፕሮጀክት አስተዳዳሪ', 'የመረጃ ተንታኝ',
    'የግብይት ኃላፊ', 'የሽያጭ ተወካይ', 'አካውንታንት', 'የሰው ሃብት ኃላፊ',
    'ዲዛይነር', 'የኦፕሬሽን ኃላፊ', 'የንግድ ተንታኝ',
    'የፋይናንስ ተንታኝ', 'የምርት ኃላፊ', 'የሲስተም አስተዳዳሪ',
    'የደንበኛ ክትትል ባለሙያ', 'የኔትወርክ መሐንዲስ'
  ],
  departments: [
    'ምህንድስና', 'ግብይት', 'ሽያጭ', 'የሰው ሃብት', 'ፋይናንስ',
    'ኦፕሬሽን', 'የደንበኛ አገልግሎት', 'አይቲ', 'ምርምር እና ልማት',
    'ህጋዊ', 'ምርት አስተዳደር', 'ዲዛይን', 'ጥራት ማረጋገጫ', 'አስተዳደር'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+251 ## ### ## ##',
    '+251 9## ### ###',
    '9## ### ###',
    '91# ### ###',
    '92# ### ###',
    '93# ### ###',
    '94# ### ###',
    '95# ### ###',
    '96# ### ###',
    '97# ### ###',
    '98# ### ###',
    '11# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'live.com',
    'ethionet.et', 'africa.com', 'mail.et', 'ethiomail.et', 'telecom.et'
  ],

  companyNames: [
    'Ethiopian Airlines', 'Ethio Telecom', 'Commercial Bank of Ethiopia',
    'Bank of Abyssinia', 'Dashen Bank', 'Awash Bank', 'Nib International Bank',
    'Habesha Breweries', 'BGI Ethiopia', 'Heineken Breweries',
    'National Oil Company', 'Ethio Cement', 'MIDROC Group',
    'Mohammed International', 'Wegagen Bank', 'Oromia Coffee',
    'Flora Oil', 'Zemen Bank'
  ],

  industries: [
    'ቴክኖሎጂ', 'ፋይናንስ', 'ጤና', 'ትምህርት', 'ችርቻሮ',
    'ማኑፋክቸሪንግ', 'ሚዲያ', 'ቴሌኮሙኒኬሽን', 'ኢነርጂ', 'ትራንስፖርት',
    'ሪል እስቴት', 'አማከር', 'ሆቴል', 'ራስተር', 'ግብርና'
  ],

  catchPhrases: [
    'ለወደፊቱ ፈጠራ', 'ስኬትዎ ሥራችን ነው', 'አንድ ላይ ወደፊት መገንባት',
    'ጥራት እና እምነት', 'የእድገት አጋርዎ', 'ዘላቂ መፍትሄዎች'
  ]
};
