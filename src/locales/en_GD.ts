import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GD: LocaleDefinition = {
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
    'James', 'Williams', 'Thomas', 'Joseph', 'John', 'Brown', 'George', 'Benjamin',
    'Samuel', 'David', 'Charles', 'Francis', 'Lewis', 'Edwards', 'Jackson',
    'Ferguson', 'McQueen', 'Antoine', 'Radix', 'Redhead',
    'Boatswain', 'De Gale', 'Thomas-Strachan', 'Cormack', 'Bourne', 'Charles', 'Douglas', 'Phillip', 'Black', 'Goodridge'
  ],
  streets: [
    'Church Street', 'Halifax Street', 'Grenada Street', 'River Road',
    'Lagoon Road', 'Grand Anse Road', 'True Blue Road',
    'Lance Aux Epines Road', 'Point Salines Road', 'Morne Rouge Road',
    'St. Paul\'s Road', 'Willis Road', 'Paradise Road', 'Gouyave Road', 'Sauteurs Road'
  ],
  cities: [
    'St. George\'s', 'Gouyave', 'Grenville', 'Victoria', 'Sauteurs',
    'St. David\'s', 'Dans Spence', 'Calliste', 'Crochu', 'La Force',
    'Morne Jaloux', 'Lance Aux Epines', 'Grand Anse', 'Fontenoy', 'Woodlands',
    'Monte Parnassus', 'Tivoli', 'St. Paul\'s', 'Soubis', 'Mama Cannes'
  ],
  states: [
    'Saint George', 'Saint Andrew', 'Saint David', 'Saint John', 'Saint Mark',
    'Saint Patrick', 'Carriacou and Petite Martinique'
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
    '+1-473 ###-####',
    '(473) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'spiceisle.com', 'caribsurf.com', 'flowgrenada.com', 'digicelgrenada.com'
  ],

  companyNames: [
    'St. George\'s University', 'Grenada Breweries', 'Grenada Electricity Services',
    'National Commercial Bank of Grenada', 'Sandals Grenada',
    'Spice Island Beach Resort', 'Grenada Ports Authority',
    'Grenada Cooperative Bank', 'Grenada Tourism Authority', 'Camperdown Holdings'
  ],

  industries: [
    'Tourism', 'Finance', 'Spice Production', 'Telecommunications', 'Construction',
    'Healthcare', 'Education', 'Agriculture', 'Transportation', 'Retail'
  ],

  catchPhrases: [
    'Spice of the Caribbean', 'Building a prosperous Grenada',
    'Excellence through service', 'Pride in our island home',
    'Commitment to quality', 'Innovation for growth',
    'Together we rise', 'Creating bright horizons'
  ]
};
