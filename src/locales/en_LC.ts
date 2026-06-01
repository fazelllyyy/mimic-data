import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_LC: LocaleDefinition = {
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
    'Joseph', 'Williams', 'Thomas', 'James', 'John', 'Lewis', 'Edwards', 'George',
    'Benjamin', 'Samuel', 'David', 'Charles', 'Francis', 'Harris', 'Jackson',
    'Bousquet', 'Gaspard', 'Destang', 'Compton', 'Cenac',
    'Valcin', 'Maurille', 'Charlery', 'Monplaisir', 'Prospere', 'Louis', 'Auguste', 'Floreal', 'Paul', 'George'
  ],
  streets: [
    'Bridge Street', 'Mandela Highway', 'Jeremie Street', 'Choc Road',
    'Vide Bouteille', 'Morne Road', 'Castries Main Road',
    'Waterfront Highway', 'La Toc Road', 'Rodney Bay Road',
    'Gros Islet Highway', 'Marchand Road', 'Bexon Road', 'Micha Street', 'William Peter Boulevard'
  ],
  cities: [
    'Castries', 'Vieux Fort', 'Soufrière', 'Gros Islet', 'Micoud',
    'Dennery', 'Anse La Raye', 'Laborie', 'Choiseul', 'Canaries',
    'Rodney Bay', 'Morne Fortune', 'Ciceron', 'Babonneau', 'Bocage',
    'Bisee', 'Ti Rocher', 'La Caye', 'Jacmel', 'Mongouge'
  ],
  states: [
    'Anse La Raye', 'Canaries', 'Castries', 'Choiseul', 'Dennery',
    'Gros Islet', 'Laborie', 'Micoud', 'Soufrière', 'Vieux Fort'
  ],
  zipCodePattern: 'LC#####',
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
    return `LC${String(Random.int(10000, 99999))}`;
  },

  phoneFormats: [
    '+1-758 ###-####',
    '(758) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'stlucia.net', 'candw.lc', 'flowstlucia.com', 'digicelstlucia.com'
  ],

  companyNames: [
    'St. Lucia Tourism Authority', 'Bay Gardens Resort', 'Sandals St. Lucia',
    'St. Lucia Brewery', 'Royal Bank of Canada St. Lucia',
    'Digicel St. Lucia', 'Flow St. Lucia', 'St. Lucia Electricity Services',
    'BodyHoliday Resort', 'St. Lucia Port Authority'
  ],

  industries: [
    'Tourism', 'Finance', 'Telecommunications', 'Construction', 'Healthcare',
    'Education', 'Agriculture', 'Transportation', 'Retail', 'Real Estate'
  ],

  catchPhrases: [
    'Simply beautiful', 'Excellence through service',
    'Building a prosperous St. Lucia', 'Commitment to quality',
    'A warm Caribbean welcome', 'Innovation for growth',
    'Pride in our island nation', 'Together for success'
  ]
};
