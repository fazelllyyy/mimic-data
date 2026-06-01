import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_VC: LocaleDefinition = {
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
    'Williams', 'Thomas', 'Joseph', 'James', 'John', 'Lewis', 'Edwards', 'George',
    'Benjamin', 'Samuel', 'David', 'Charles', 'Francis', 'Harris', 'Jackson',
    'Cupid', 'Trimmingham', 'Burgin', 'Goodluck', 'Samuel',
    'Gonsalves', 'De Freitas', 'Dunn', 'Cottle', 'Miller', 'Stapleton', 'Jacks', 'Skecte', 'Cumberbatch', 'Garon'
  ],
  streets: [
    'Larapai Street', 'Granby Street', 'Bedford Street', 'Bay Street',
    'Kingstown Main Road', 'Calliaqua Road', 'Arnos Vale Road',
    'Villa Road', 'Mesopotamia Road', 'Georgetown Road',
    'Biabou Road', 'Layou Road', 'Waterloo Road', 'Sion Hill Road', 'Caribbean Street'
  ],
  cities: [
    'Kingstown', 'Georgetown', 'Byera', 'Questelles', 'Bequia',
    'Chateaubelair', 'Barrouallie', 'Layou', 'Calliaqua', 'Biabou',
    'Villa', 'Arnos Vale', 'Brighton', 'Greiggs', 'Richmond Hill',
    'Paul\'s Avenue', 'Ratho Mill', 'Indian Bay', 'Tower Hill', 'Edinboro'
  ],
  states: [
    'Charlotte', 'Saint George', 'Saint Andrew', 'Saint Patrick', 'Saint David',
    'Grenadines'
  ],
  zipCodePattern: 'VC####',
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
    return `VC${String(Random.int(1000, 9999))}`;
  },

  phoneFormats: [
    '+1-784 ###-####',
    '(784) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'vincysv.com', 'caribsurf.com', 'flowsvg.com', 'digicelsvg.com'
  ],

  companyNames: [
    'St. Vincent and the Grenadines Tourism Authority',
    'Mustique Company', 'Bank of St. Vincent and the Grenadines',
    'Bequia Beach Hotel', 'Sandals St. Vincent',
    'SVG Telecom', 'WInBIS', 'St. Vincent Brewery',
    'Jaden\'s Construction', 'Young Island Resort'
  ],

  industries: [
    'Tourism', 'Finance', 'Telecommunications', 'Construction', 'Healthcare',
    'Education', 'Agriculture', 'Transportation', 'Retail', 'Real Estate'
  ],

  catchPhrases: [
    'Caribbean charm, Vincentian warmth', 'Excellence through service',
    'Building a better SVG', 'Commitment to quality',
    'Pride in our islands', 'Innovation for growth',
    'Together for prosperity', 'A gem of the Caribbean'
  ]
};
