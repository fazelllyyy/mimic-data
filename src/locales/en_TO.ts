import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_TO: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Sione', 'Tevita', 'Manase', 'Tupou', 'Samiu', 'Latu', 'Pita',
    'Mana', 'Ofa', 'Sosaia', 'Viliami', 'Sitiveni', 'Saimone', 'Malo', 'Siale'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Ana', 'Malia', 'Sela', 'Mele', 'Ofa', 'Lavina', 'Taina',
    'Losaline', 'Tupou', 'Naomi', 'Sina', 'Suliana', 'Eseta', 'Lupe', 'Amelia'
  ],
  lastNames: [
    'Tupou', 'Fifita', 'Mafi', 'Lolohea', 'Moala', 'Pulu', 'Taufa\'ao', 'Tuipulotu',
    'Fakalelu', 'Taione', 'Latu', 'Fotu', 'Mohenoa', 'Koloamatangi', 'Vea',
    'Lavulo', 'Pohiva', 'Utoikamanu', 'Havea', 'Liava\'a',
    'Ufilila', 'Kaulili', 'Mataele', 'Fonua', 'Fekita', 'Aho', 'Fakafanua', 'Momo\'unga', 'Fa\'ao', 'Feke'
  ],
  streets: [
    'Vuna Road', 'Taufa\'ahau Road', 'Pangai Road', 'Fasi Street',
    'Hala Moungaloa', 'Hala Vava\'u', 'Main Street',
    'Railway Road', 'Neiafu Street', 'Wellington Road',
    'Longolongo Road', 'Halaleva Road', 'Vaiola Street', 'Loto Street', 'Tatakamotonga Road'
  ],
  cities: [
    'Nuku\'alofa', 'Neiafu', 'Pangai', 'Haveluloto', 'Mu\'a',
    'Vaini', 'Tofoa', 'Pea', 'Kolomotu\'a', 'Tongatapu',
    'Longoteme', 'Kolovai', 'Niutoua', 'Havelu', 'Fahefa',
    'Nukunuku', 'Masilamea', 'Potutaha', 'Fua\'amotu', 'Lapaha'
  ],
  states: [
    'Tongatapu', 'Vava\'u', 'Ha\'apai', '\'Eua', 'Niuas',
    'Ongo Niua'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Hotel Manager', 'Tourism Officer', 'Marketing Executive',
    'Customer Service Manager', 'Engineer', 'Sales Representative', 'Financial Advisor'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Product Management', 'Design', 'Quality Assurance', 'Administration'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const number = Random.int(1, 500);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+676 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'tonga.net', 'kalianet.to', 'live.com', 'tonic.to'
  ],

  companyNames: [
    'National Bank of Tonga', 'Digicel Tonga', 'Royal Tongan Airlines',
    'Tonga Communications Corporation', 'Tonga Development Bank',
    'Friendly Islands Marketing', 'Shoreline Wholesale', 'Pacific Resort Tonga',
    'Tonga Power', 'Moana Fisheries'
  ],

  industries: [
    'Tourism', 'Finance', 'Agriculture', 'Telecommunications', 'Transportation',
    'Fisheries', 'Construction', 'Healthcare', 'Education', 'Retail'
  ],

  catchPhrases: [
    'Building our kingdom together', 'Excellence through service',
    'Pride in our heritage', 'Commitment to quality',
    'Strength in our islands', 'Innovation for growth',
    'A warm Pacific welcome', 'Unity and progress'
  ]
};
