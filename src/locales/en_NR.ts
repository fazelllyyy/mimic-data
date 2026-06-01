import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_NR: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Marcus', 'Sprent', 'Rene', 'Baron', 'Valdon', 'Frederick', 'Godfrey',
    'Ludwig', 'Kindred', 'Rykers', 'Aloysius', 'David', 'Kennan', 'Jasha', 'Cawley'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Ruby', 'Maya', 'Evelyn', 'Priscilla', 'Renee', 'Violet', 'Sylvia',
    'Angeline', 'Catherine', 'Josephine', 'Bernadette', 'Theresa', 'Monica', 'Florence', 'Louise'
  ],
  lastNames: [
    'Adeang', 'DeRoburt', 'Stephen', 'Kun', 'Dowiyogo', 'Harris', 'Detenamo', 'Namaduk',
    'Atsi', 'Bop', 'Gadabu', 'Ika', 'Itsimaera', 'Jim', 'Jeremiah',
    'Kaierua', 'Kein', 'Mackenzie', 'Moses', 'Naboua',
    'Olo', 'Ponifasio', 'Ramanlal', 'Stephen', 'Tau', 'Thoma', 'Uera', 'Waidabu', 'Weilou', 'Willy'
  ],
  streets: [
    'Aiwo Main Road', 'Denigomodu Road', 'Boe Road', 'Buada Road',
    'Anibare Bay Road', 'Yaren Main Road', 'Meneng Road',
    'Baitsi Road', 'Ewa Road', 'Anetan Road',
    'Nibok Road', 'Uaboe Road', 'Ijuw Road', 'Anabar Road', 'Menen Road'
  ],
  cities: [
    'Yaren', 'Aiwo', 'Boe', 'Denigomodu', 'Nibok',
    'Meneng', 'Buada', 'Baitsi', 'Uaboe', 'Ewa',
    'Anetan', 'Anibare', 'Anabar', 'Ijuw', 'Baiti',
    'Capelle', 'Menen', 'Yangor', 'Lokono', 'Orro'
  ],
  states: [
    'Aiwo', 'Anabar', 'Anetan', 'Anibare', 'Baitsi',
    'Boe', 'Buada', 'Denigomodu', 'Ewa', 'Ijuw',
    'Meneng', 'Nibok', 'Uaboe', 'Yaren'
  ],
  zipCodePattern: 'NR####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Engineer', 'Manager', 'Marketing Executive',
    'Customer Service Representative', 'Financial Analyst', 'Sales Manager', 'Administrator'
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
    const number = Random.int(1, 200);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return `NR${String(Random.int(1000, 9999))}`;
  },

  phoneFormats: [
    '+674 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'nauru.net', 'cenpac.net.nr', 'live.com', 'naurugov.nr'
  ],

  companyNames: [
    'Nauru Phosphate Corporation', 'Republic of Nauru Hospital',
    'Nauru Airlines', 'Capelle & Partner', 'OD-N-Aiwo Hotel',
    'Nauru Fisheries and Marine Resources', 'Nauru Maritime',
    'Meneng Hotel', 'Nauru Cooperative', 'Detenamo Holdings'
  ],

  industries: [
    'Mining', 'Fisheries', 'Finance', 'Telecommunications', 'Construction',
    'Transportation', 'Tourism', 'Education', 'Healthcare', 'Retail'
  ],

  catchPhrases: [
    'Building our island nation', 'Excellence through service',
    'Pride in Nauru', 'Commitment to quality',
    'Strength in our people', 'Progress for Nauru',
    'Innovation for sustainability', 'A resilient Pacific nation'
  ]
};
