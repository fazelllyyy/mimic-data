import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_AG: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Ronald', 'Trevor', 'Graham', 'Ian', 'Winston', 'Clive', 'Samuel',
    'Roger', 'Errol', 'Stephen', 'Dale', 'Shane', 'Leonard', 'Wilbert', 'Edwin'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Patricia', 'Yvonne', 'Cheryl', 'Marcia', 'Sonia', 'Esther', 'Gloria',
    'Evelyn', 'Monique', 'Stephanie', 'Janice', 'Cynthia', 'Shirley', 'Diane', 'Mavis'
  ],
  lastNames: [
    'Thomas', 'Williams', 'Joseph', 'Joseph', 'Brown', 'Samuel', 'Simon', 'Davis',
    'Harris', 'Martin', 'James', 'Jackson', 'Benjamin', 'George', 'Lewis',
    'Percival', 'Edwards', 'Paynter', 'Dorsett', 'Hazel',
    'Charles', 'Francis', 'Michaels', 'Roberts', 'Abraham', 'Nanton', 'Spencer', 'Tonge', 'Yeates', 'Ferris'
  ],
  streets: [
    'High Street', 'Long Street', 'Market Street', 'All Saints Road',
    'Old Parham Road', 'Sir George Walter Highway', 'Factory Road',
    'Friars Hill Road', 'Temple Street', 'Hughes Street',
    'Independence Avenue', 'Jolly Harbour Road', 'Dickenson Bay Road',
    'English Harbour Road', 'Nelson Street'
  ],
  cities: [
    'St. John\'s', 'All Saints', 'Liberta', 'Potters Village', 'Willikies',
    'Bolans', 'Carlisle', 'Cedar Grove', 'Clare Hall', 'Cobbs Cross',
    'English Harbour', 'Falmouth', 'Freemans Village', 'Glanvilles', 'Grays Farm',
    'Green Bay', 'Jennings', 'John Hughes', 'New Winthorpes', 'Parham'
  ],
  states: [
    'Saint George', 'Saint John', 'Saint Mary', 'Saint Paul', 'Saint Peter',
    'Saint Philip', 'Barbuda'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Hotel Manager', 'Tourism Officer', 'Marketing Executive',
    'Customer Service Manager', 'Real Estate Agent', 'Engineer', 'Sales Representative'
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
    '+1-268 ###-####',
    '(268) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'antigua.net', 'candw.ag', 'apua.ag', 'live.com'
  ],

  companyNames: [
    'Antigua and Barbuda Tourism Authority',
    'LIAT Airlines', 'Royal Bank of Canada Antigua',
    'Sunshine Auto', 'Antigua Commercial Bank', 'Sandals Grande Antigua',
    'The Mill Reef Club', 'Hawksbill Resort', 'Coco Bay Hotel', 'Global Ports Antigua'
  ],

  industries: [
    'Tourism', 'Finance', 'Telecommunications', 'Construction', 'Healthcare',
    'Education', 'Agriculture', 'Transportation', 'Retail', 'Real Estate'
  ],

  catchPhrases: [
    'Once a year, always Antigua', 'Excellence in service',
    'Building a better future', 'Island of perfection',
    'Commitment to quality', 'Pride in our heritage',
    'Creating unforgettable experiences', 'Together for growth'
  ]
};
