import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const dv_MV: LocaleDefinition = {
  firstNamesMale: [
    'Ahmed', 'Mohamed', 'Ali', 'Ibrahim', 'Hussain', 'Abdulla', 'Hassan', 'Ismail',
    'Yoosuf', 'Shaheem', 'Adam', 'Riyaz', 'Naseem', 'Fazeel', 'Shihab', 'Hisham',
    'Amjad', 'Imthiyaz', 'Rilwan', 'Mujtaba', 'Shamoon', 'Anees', 'Fathuhulla', 'Moosa',
    'Shifan', 'Ijad', 'Naif', 'Zayan', 'Ayaan', 'Inaaz'
  ],
  firstNamesFemale: [
    'Aminath', 'Fathimath', 'Mariyam', 'Hawwa', 'Aishath', 'Safoora', 'Nafeesa', 'Zeeniya',
    'Shahidha', 'Mizna', 'Shaheema', 'Rifqa', 'Nashidha', 'Haifa', 'Lubna', 'Samah',
    'Rifqa', 'Zahiya', 'Shahinda', 'Amira', 'Nusaiba', 'Shafiya', 'Haleema', 'Sausan',
    'Nadhiya', 'Wafaa', 'Shamha', 'Malaak', 'Shazly', 'Rashda'
  ],
  lastNames: [
    'Didie', 'Hassan', 'Mansoor', 'Saeed', 'Hussain', 'Moosa', 'Saleem', 'Naseem',
    'Shihab', 'Ahmed', 'Wakeel', 'Ibrahim', 'Latheef', 'Shakir', 'Adam', 'Fahmy',
    'Riyaz', 'Jaleel', 'Mohamed', 'Jameel', 'Shahid', 'Bashir', 'Hameed', 'Yoosuf',
    'Ali', 'Ismail', 'Sattar', 'Majeed', 'Kaleem', 'Wajih'
  ],
  streets: [
    'Majeedhee Magu', 'Farudhee Magu', 'Ameeru Ahmed Magu', 'Chandhanee Magu',
    'Boduthakurufaanu Magu', 'Husnu Hemna Magu', 'Edhuru Magu', 'Raha Magu',
    'Kalaa Magu', 'Maafannu Magu', 'Henveiru Magu', 'Fuvahmulah Ring Road',
    'Ibrahim Nasir Road', 'Kandholhudhoo Magu', 'Miskiy Magu', 'Orchid Magu',
    'Sosun Magu', 'Veli Magu'
  ],
  cities: [
    'Male', 'Addu City', 'Fuvahmulah', 'Kulhudhuffushi', 'Thinadhoo', 'Naifaru',
    'Hinnavaru', 'Dhidhdhoo', 'Eydhafushi', 'Viligili', 'Maafushi', 'Hulhumale',
    'Hulhule', 'Fonadhoo', 'Kudahuvadhoo', 'Mahibadhoo', 'Funadhoo', 'Manadhoo'
  ],
  states: [
    'Male Atoll', 'Addu Atoll', 'Fuvahmulah Atoll', 'Haa Alif Atoll',
    'Haa Dhaalu Atoll', 'Shaviyani Atoll', 'Noonu Atoll', 'Raa Atoll',
    'Baa Atoll', 'Lhaviyani Atoll', 'Kaafu Atoll', 'Alif Alif Atoll',
    'Alif Dhaalu Atoll', 'Vaavu Atoll', 'Meemu Atoll', 'Faafu Atoll',
    'Dhaalu Atoll', 'Thaa Atoll', 'Laamu Atoll', 'Gaafu Alif Atoll',
    'Gaafu Dhaalu Atoll', 'Gnaviyani Atoll'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer', 'Operations Manager',
    'Business Analyst', 'Product Manager', 'System Administrator', 'Quality Engineer'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'IT', 'Research and Development', 'Legal', 'Administration'
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
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+960 ###-####',
    '+960 (0)###-####',
    '7##-####',
    '9##-####',
    '3##-####',
    '+960 7## ####',
    '+960 9## ####',
    '+960 3## ####',
    '+960 79# ####',
    '+960 72# ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'dhivehinet.net.mv',
    'uplus.mv', 'odul.mv', 'raajje.mv', 'haveeru.com', 'sun.mv'
  ],

  companyNames: [
    'Bank of Maldives', 'Maldives Islamic Bank', 'Seylan Bank Maldives', 'Allied Insurance',
    'Maldives Airports Company', 'Island Aviation Services', 'Maldives Air Taxi',
    'Dhiraagu Telecom', 'Ooredoo Maldives', 'Manta Air',
    'Sun Siyam Resorts', 'Constance Group Maldives', 'Universal Enterprises',
    'Villa Group', 'SR Group', 'Soneva Hotels',
    'Four Seasons Maldives', 'Maldives Transport and Contracting'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Tourism', 'Fisheries'
  ],

  catchPhrases: [
    'Innovation in paradise', 'Your trusted financial partner', 'Building the Maldives together',
    'Excellence in hospitality', 'Quality service across the islands', 'Sustainable tourism',
    'Your gateway to the Indian Ocean'
  ]
};
