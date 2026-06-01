import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_DM: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Ronald', 'Trevor', 'Graham', 'Ian', 'Winston', 'Clive', 'Samuel',
    'Roger', 'Errol', 'Stephen', 'Dale', 'Shane', 'Leonard', 'Edwin', 'Patrick'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Patricia', 'Yvonne', 'Cheryl', 'Marcia', 'Sonia', 'Esther', 'Gloria',
    'Evelyn', 'Monique', 'Stephanie', 'Janice', 'Cynthia', 'Shirley', 'Diane', 'Mavis'
  ],
  lastNames: [
    'Joseph', 'Williams', 'Thomas', 'John', 'James', 'George', 'Benjamin', 'Samuel',
    'David', 'Charles', 'Francis', 'Lewis', 'Edwards', 'Jackson', 'Harris',
    'Charles', 'Felix', 'Hyacinth', 'Winston', 'Durant',
    'Tapley', 'Warrington', 'Baptiste', 'Lawrence', 'Dupigny', 'Shillingford', 'Cuffy', 'Regis', 'Baron', 'Astaphan'
  ],
  streets: [
    'High Street', 'Federal Street', 'Kensington Street', 'King George V Street',
    'Roseau Street', 'Castle Bruce Road', 'Pointe Michel Road',
    'Grand Bay Road', 'Scotts Head Road', 'Vieille Case Road',
    'Portsmouth Road', 'Marigot Road', 'Loubiere Road', 'Bataka Road', 'St. Joseph Road'
  ],
  cities: [
    'Roseau', 'Portsmouth', 'Canefield', 'Castle Bruce', 'Grand Bay',
    'La Plaine', 'Marigot', 'Mahaut', 'St. Joseph', 'Salisbury',
    'Wesley', 'Woodford Hill', 'Calibishie', 'Berekua', 'Pointe Michel',
    'Scotts Head', 'Vieille Case', 'Capuchin', 'Hampstead', 'Petite Savanne'
  ],
  states: [
    'Saint George', 'Saint John', 'Saint Andrew', 'Saint Patrick', 'Saint David',
    'Saint Paul', 'Saint Peter', 'Saint Joseph', 'Saint Luke', 'Saint Mark'
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
    '+1-767 ###-####',
    '(767) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'cwdom.dm', 'dominica.net', 'live.com', 'flowdominicana.com'
  ],

  companyNames: [
    'Dominica Tourism Authority', 'Digicel Dominica', 'Flow Dominica',
    'National Bank of Dominica', 'Dominica Port Authority',
    'Fort Young Hotel', 'Cabrits Resort Kempinski', 'InterContinental Dominica',
    'Dominica Coconut Products', 'Roseau Cooperative Credit Union'
  ],

  industries: [
    'Tourism', 'Finance', 'Agriculture', 'Telecommunications', 'Construction',
    'Healthcare', 'Education', 'Transportation', 'Retail', 'Real Estate'
  ],

  catchPhrases: [
    'The nature island of the Caribbean', 'Excellence through service',
    'Building a resilient future', 'Commitment to quality',
    'Pride in our heritage', 'Embracing innovation',
    'Strength through community', 'Paradise truly found'
  ]
};
