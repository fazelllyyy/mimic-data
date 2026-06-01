import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const ti_ER: LocaleDefinition = {
  firstNamesMale: [
    'Yonas', 'Ephrem', 'Tekle', 'Mebrahtom', 'Yemane', 'Fikre', 'Fesseha',
    'Amanuel', 'Girmay', 'Berhane', 'Asmerom', 'Yohannes', 'Abraha', 'Kibrom',
    'Michele', 'Tesfay', 'Mussie', 'Fikru', 'Kifle', 'Yemane', 'Afewerki',
    'Isaias', 'Zeray', 'Yonatan', 'Simon', 'Dawit', 'Teklemariam', 'Henok',
    'Seyoum', 'Welde'
  ],
  firstNamesFemale: [
    'Mihret', 'Saba', 'Sara', 'Rahwa', 'Yordanos', 'Selam', 'Hana', 'Betlehem',
    'Senait', 'Azeb', 'Mulu', 'Azieb', 'Luul', 'Feven', 'Meron', 'Kisanet',
    'Almaz', 'Letay', 'Tsega', 'Aselefech', 'Hewan', 'Mahder', 'Winta',
    'Belen', 'Sofia', 'Seble', 'Netsanet', 'Lemlem', 'Askale', 'Eden'
  ],
  lastNames: [
    'Gebremeskel', 'Tewolde', 'Tekle', 'Gherghis', 'Berhe', 'Gebremedhin',
    'Araya', 'Yohannes', 'Negash', 'Tesfagabir', 'Woldu', 'Ghebre', 'Haile',
    'Zerai', 'Gebrehiwet', 'Kifle', 'Asgedom', 'Tesfay', 'Andemichael',
    'Kahsay', 'Teka', 'Fessehatzion', 'Mengisteab', 'Ghebrehiwet',
    'Ghebremichael', 'Abraham', 'Gebrehiwot', 'Tesfamariam', 'Yemane',
    'Asfaha'
  ],
  streets: [
    'Freedom Avenue', 'Harnet Avenue', 'Martyrs Avenue', 'Smuti Street',
    'Independence Avenue', 'Bahti Meskerem Square', 'Airport Road',
    'Himbol Street', 'Juba Street', 'Gonder Street', 'Asmara Main Road',
    'Denden Street', 'Sembel Road', 'Tiravollo Street', 'Gheza Warki',
    'Edaga Hamus Street', 'Godhaf Street', 'Arbaete Asmara',
    'Maekel Road', 'Tsetserat Street'
  ],
  cities: [
    'Asmara', 'Mendefera', 'Adi Keyh', 'Adi Quala', 'Keren', 'Barentu',
    'Akordat', 'Tesseney', 'Massawa', 'Assab', 'Dekemhare', 'Segeneity',
    'Ghinda', 'Nakfa', 'Afabet', 'Mai-Mne', 'Adi Tekelezan', 'Hagaz',
    'Kudo Be\'our', 'Teseney', 'Mogolo', 'Shambuko', 'Mersa', 'Zula'
  ],
  states: [
    'Maekel', 'Debub', 'Gash-Barka', 'Anseba', 'Semienawi Keyih Bahri',
    'Debubawi Keyih Bahri'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Mekiner Software', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Designer',
    'Operations Manager', 'Business Analyst', 'System Administrator',
    'Financial Manager'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'Information Technology', 'Research and Development', 'Legal'
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
    '+291 # ## ###',
    '+291 ## ### ###',
    '0# ### ###',
    '0## ### ###',
    '+291 7# ### ###',
    '+291 1# ### ###',
    '+291 2# ### ###',
    '7# ### ###',
    '1# ### ###',
    '2# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'eritrea.er', 'tse.com.er', 'eoc.com.er'
  ],

  companyNames: [
    'Eritrean Telecommunications Corporation', 'Bank of Eritrea',
    'Commercial Bank of Eritrea', 'Housing and Commerce Bank',
    'Red Sea Shipping Lines', 'Eritrean Airlines',
    'Eritrea Breweries', 'Coca-Cola Eritrea',
    'Asmara Power and Water', 'Eritrean Mining Corporation',
    'National Insurance Corporation', 'Eritrean Cement Factory',
    'Bisha Mining Company', 'Sembel Construction',
    'Gash Group', 'Zoba Maekel Trading'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Telecommunications', 'Energy', 'Transport', 'Mining',
    'Agriculture', 'Fishing', 'Construction', 'Hospitality'
  ],

  catchPhrases: [
    'Innovating for Eritrea', 'Your trusted partner in development',
    'Building a better tomorrow', 'Commitment to excellence',
    'Together for progress', 'Quality and dedication'
  ]
};
