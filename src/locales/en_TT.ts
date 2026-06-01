import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_TT: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'Christopher', 'James', 'John', 'Richard', 'Anthony', 'Kevin',
    'Brian', 'Jason', 'Andrew', 'Peter', 'Mark', 'Daniel', 'Patrick',
    'Roger', 'Kurt', 'Dennis', 'Wayne', 'Ronald', 'Graham', 'Ian',
    'Stephen', 'Carl', 'Samuel', 'Steven', 'Dale', 'Adrian', 'Winston', 'Nigel'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Jackie',
    'Katherine', 'Beverley', 'Yvonne', 'Patricia', 'Cheryl', 'Deborah', 'Nicole',
    'Stephanie', 'Renee', 'Tracy', 'Wendy', 'Diane', 'Rose', 'Fiona', 'Shirley'
  ],
  lastNames: [
    'Mohammed', 'Williams', 'Joseph', 'Thompson', 'Brown', 'Ali', 'Singh', 'James',
    'John', 'Garcia', 'Hosein', 'Rampersad', 'Graham', 'Grant', 'Wilson',
    'Pierre', 'Ramkissoon', 'Edwards', 'Chan', 'Mitchell',
    'Seepersad', 'Chang', 'Boodram', 'Andrews', 'Harris', 'Narine', 'Mahabir', 'Wood', 'Douglas', 'Carrington'
  ],
  streets: [
    'Eastern Main Road', 'Western Main Road', 'St. Vincent Street', 'Charlotte Street',
    'Tragarete Road', 'Saddle Road', 'Maraval Road', 'Ariapita Avenue',
    'Edward Street', 'Independence Square', 'Frederick Street',
    'Wrightson Road', 'Beetham Highway', 'Churchill Roosevelt Highway', 'Lady Young Road'
  ],
  cities: [
    'Port of Spain', 'San Fernando', 'Chaguanas', 'Arima', 'Point Fortin',
    'Couva', 'Tunapuna', 'Scarborough', 'Diego Martin', 'Princes Town',
    'Siparia', 'San Juan', 'Arouca', 'St. Joseph', 'Curepe',
    'Tacarigua', 'Piarco', 'La Romain', 'Gasparillo', 'Valsayn'
  ],
  states: [
    'Port of Spain', 'San Fernando', 'Arima', 'Chaguanas', 'Couva-Tabaquite-Talparo',
    'Diego Martin', 'Mayaro-Rio Claro', 'Penal-Debe', 'Princes Town', 'San Juan-Laventille',
    'Sangre Grande', 'Siparia', 'Tunapuna-Piarco', 'Tobago'
  ],
  zipCodePattern: '######',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Lawyer', 'Nurse',
    'Business Analyst', 'Marketing Manager', 'Civil Engineer',
    'Customer Service Manager', 'Financial Advisor', 'Manager', 'Sales Executive'
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
    const number = Random.int(1, 9999);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(100000, 999999));
  },

  phoneFormats: [
    '+1-868 ###-####',
    '(868) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'tstt.net.tt', 'flowtrinidad.com', 'digiceltt.com', 'live.com'
  ],

  companyNames: [
    'Republic Bank Limited', 'Massy Holdings', 'ANSA McAL', 'Guardian Group',
    'Trinidad and Tobago Electricity Commission', 'BHP Billiton Trinidad',
    'Petrotrin', 'TSTT', 'Caribbean Airlines', 'Neal & Massy'
  ],

  industries: [
    'Energy', 'Finance', 'Manufacturing', 'Telecommunications', 'Construction',
    'Tourism', 'Transportation', 'Healthcare', 'Education', 'Retail'
  ],

  catchPhrases: [
    'Together we aspire, together we achieve', 'Strength in diversity',
    'Excellence in everything we do', 'Building a brighter Trinidad and Tobago',
    'Innovation and enterprise', 'Commitment to community',
    'Quality service guaranteed', 'Leading with integrity'
  ]
};
