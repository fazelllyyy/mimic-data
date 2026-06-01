import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_KN: LocaleDefinition = {
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
    'Williams', 'Thomas', 'Francis', 'Joseph', 'Clarke', 'Brown', 'James', 'Harris',
    'Davis', 'Edwards', 'Mills', 'Stevens', 'Martin', 'Jackson', 'Lewis',
    'Llewellyn', 'Liburd', 'Wilkin', 'Maynard', 'Hanley',
    'Brandt', 'Carty', 'Rogers', 'Bart', 'Hazel', 'Maitland', 'Caines', 'Pemberton', 'Christmas', 'Hendrickson'
  ],
  streets: [
    'Bay Road', 'Port Street', 'Fort Street', 'Victoria Road',
    'Bransby Street', 'Liverpool Row', 'Central Street',
    'St. Kitts Main Road', 'Island Road', 'Horsford Road',
    'College Street', 'Frigate Bay Road', 'Dr. William Connor Road',
    'Caines Industrial Estate', 'Wellington Road'
  ],
  cities: [
    'Basseterre', 'Charlestown', 'Sandy Point Town', 'Cayon', 'Old Road Town',
    'Tabernacle', 'Dieppe Bay Town', 'Sadlers', 'Mansion', 'St. Paul\'s',
    'Half Way Tree', 'Spooners', 'Monkey Hill', 'Boyd\'s', 'Phillips',
    'Cox\' Village', 'Gingerland', 'Cotton Ground', 'Newcastle', 'Market Shop'
  ],
  states: [
    'Saint George Basseterre', 'Saint John Figtree', 'Saint Paul Charlestown',
    'Saint Thomas Middle Island', 'Saint Anne Sandy Point',
    'Saint Peter Basseterre', 'Saint James Windward', 'Saint Mary Cayon',
    'Christ Church Nichola Town', 'Trinity Palmetto Point',
    'Saint John Capisterre'
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
    '+1-869 ###-####',
    '(869) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'stkitts.net', 'caribsurf.com', 'flowstkitts.com', 'digicelstkitts.com'
  ],

  companyNames: [
    'St. Kitts Tourism Authority', 'Royal Bank of Canada St. Kitts',
    'St. Kitts Electricity Company', 'Park Hyatt St. Kitts',
    'Marriott St. Kitts', 'St. Kitts Port Authority',
    'Galloway Holdings', 'Skinner\'s Ltd', 'TDC Group', 'Triple C Distributors'
  ],

  industries: [
    'Tourism', 'Finance', 'Telecommunications', 'Construction', 'Healthcare',
    'Education', 'Agriculture', 'Transportation', 'Retail', 'Real Estate'
  ],

  catchPhrases: [
    'Land of the beautiful waves', 'Excellence through service',
    'Building a brighter St. Kitts', 'Commitment to quality',
    'Pride in our twin islands', 'Innovation for growth',
    'Together for prosperity', 'A Caribbean jewel'
  ]
};
