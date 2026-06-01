import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const mn_MN: LocaleDefinition = {
  firstNamesMale: [
    'Bat', 'Davaa', 'Ganbaatar', 'Sukhbaatar', 'Enkh', 'Tseren', 'Munkh', 'Purev',
    'Temuulen', 'Khaltar', 'Bold', 'Tuguldur', 'Khosbayar', 'Batzorig', 'Bilguun', 'Anand',
    'Naran', 'Zolboo', 'Delger', 'Erdenebat', 'Batbayar', 'Otgonbayar', 'Bayarsaikhan', 'Gantulga',
    'Battulga', 'Mendbayar', 'Myagmar', 'Buren', 'Oyun', 'Khongor'
  ],
  firstNamesFemale: [
    'Oyungerel', 'Tuya', 'Enkhtuya', 'Narantuya', 'Sarangerel', 'Solongo', 'Munkhzul', 'Tungalag',
    'Ariunaa', 'Bolor', 'Gerel', 'Uranchimeg', 'Delgermaa', 'Buyan', 'Khishig', 'Gantugs',
    'Enerel', 'Saikhan', 'Nomin', 'Khulan', 'Anujin', 'Sodoo', 'Munkhzul', 'Turgen',
    'Tegshjargal', 'Altansarnai', 'Misheel', 'Mandakh', 'Saruul', 'Erdenechimgerel'
  ],
  lastNames: [
    'Bold', 'Bat', 'Ganbaatar', 'Enkhbayar', 'Battulga', 'Sukhbaatar', 'Tseren', 'Munkhbayar',
    'Davaajav', 'Batzorig', 'Badarch', 'Bayarsaikhan', 'Dashnyam', 'Gantulga', 'Purevjav',
    'Byambadorj', 'Dashzeveg', 'Erdenebat', 'Nansalmaa', 'Ochirbat', 'Jargalsaikhan', 'Orgil',
    'Tsogtbaatar', 'Mendbayar', 'Demberel', 'Khandsuren', 'Lkhagvasuren', 'Altangerel',
    'Tserendorj', 'Batbayar'
  ],
  streets: [
    'Peace Avenue', 'Enkh Taivan Avenue', 'Chinggis Avenue', 'Sukhbaatar Square',
    'Seoul Street', 'Tokyo Street', 'Olympic Street', 'Narnii Street',
    'Baga Toirog', 'Ikh Toirog', 'Khoroo 1 Street', 'Khoroo 2 Street',
    'University Street', 'Gandan Street', 'Vladivostok Street', 'Amgalan Street',
    'Bayangol District Road', 'Songino Khairkhan Street'
  ],
  cities: [
    'Ulaanbaatar', 'Erdenet', 'Darkhan', 'Choibalsan', 'Khovd', 'Ulgii', 'Bayankhongor',
    'Murun', 'Sainshand', 'Zavkhan', 'Bayan-Ulgii', 'Uvurkhangai', 'Arvaikheer',
    'Tsetserleg', 'Mandalgovi', 'Baruun-Urt', 'Zuunmod', 'Ondorkhaan', 'Bulgan', 'Ulaangom'
  ],
  states: [
    'Ulaanbaatar', 'Arkhangai', 'Bayankhongor', 'Bayan-Ulgii', 'Bulgan',
    'Govi-Altai', 'Dornod', 'Dornogovi', 'Dundgovi', 'Zavkhan', 'Khovd',
    'Khentii', 'Khuvsgul', 'Orkhon', 'Selenge', 'Sukhbaatar', 'Tuv', 'Umnugovi'
  ],
  zipCodePattern: '######',
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
    const khoroo = Random.int(1, 20);
    return `${houseNumber} ${street}, Khoroo ${khoroo}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+976 ## ## ####',
    '+976 (0)## ## ####',
    '99 ## ## ##',
    '88 ## ## ##',
    '77 ## ## ##',
    '66 ## ## ##',
    '11 ## ## ##',
    '011 ### ###',
    '99## ## ##',
    '89## ## ##'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'magicnet.mn',
    'mongol.net', 'mobicom.mn', 'unimel.mn', 'bcm.mn', 'erxes.mn'
  ],

  companyNames: [
    'Erdenet Mining Corporation', 'Mongol Bank', 'Khan Bank', 'Golomt Bank',
    'Trade and Development Bank', 'Mobicom Corporation', 'Unitel Mongolia',
    'Skytel Mongolia', 'MIAT Mongolian Airlines', 'Mongolian Oil Company',
    'Ard Credit', 'Mongolian National Shipping', 'Baganuur JSC',
    'Darkhan Metallurgical Plant', 'Shivee Ovoo JSC', 'Tavan Bogd Group',
    'Monpolymet Group', 'Newcom Group'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transportation',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture'
  ],

  catchPhrases: [
    'Innovation from the steppes', 'Your success is our priority', 'Building Mongolia together',
    'Quality and excellence in everything', 'Sustainable growth for future generations',
    'Your trusted banking partner', 'Leading Mongolian enterprise'
  ]
};
