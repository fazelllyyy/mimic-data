import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_PW: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Tommy', 'Johnson', 'Kuniwo', 'Yutaka', 'Elbuchel', 'Mlib', 'Santos',
    'Thomas', 'Regis', 'Alan', 'Timothy', 'Raynold', 'Shiba', 'Rebeccah', 'Sakius'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Valentina', 'Adeline', 'Brenda', 'Isabel', 'Rose', 'Lorraine', 'Tina',
    'Yvonne', 'Alberta', 'Francisca', 'Margarita', 'Dilber', 'Malia', 'Vivian', 'Clara'
  ],
  lastNames: [
    'Remengesau', 'Toribiong', 'Nakamura', 'Udui', 'Ridrus', 'Sakuma', 'Bells', 'Adachi',
    'Koshiba', 'Kyota', 'Ngoriakl', 'Chin', 'Fritz', 'Mendes', 'Ezekiel',
    'Gibbons', 'Kim', 'Soalablai', 'Okada', 'Tellei',
    'Yano', 'Watanabe', 'Sato', 'Babad', 'Yalap', 'Aichi', 'Iyar', 'Brel', 'Ngirmang', 'Rengulbai'
  ],
  streets: [
    'Main Street', 'Koror Island Main Road', 'Malakal Road',
    'Ngerulmud Road', 'Airai Road', 'Babeldaob Road',
    'Meyuns Road', 'Peleliu Road', 'Angaur Road',
    'Kayangel Road', 'Melekeok Road', 'Ngiwal Road',
    'Ngaraard Road', 'Ngarchelong Road', 'Ngardmau Road'
  ],
  cities: [
    'Ngerulmud', 'Koror', 'Meyuns', 'Airai', 'Malakal',
    'Melekeok', 'Ngerekebesang', 'Ngiwal', 'Ngaraard', 'Ngarchelong',
    'Ngardmau', 'Ngatpang', 'Ngchesar', 'Ngeremlengui', 'Peleliu',
    'Angaur', 'Kayangel', 'Sonsorol', 'Tobi', 'Hatohobei'
  ],
  states: [
    'Koror', 'Airai', 'Melekeok', 'Ngaraard', 'Ngarchelong',
    'Ngardmau', 'Ngatpang', 'Ngchesar', 'Ngeremlengui', 'Ngiwal',
    'Peleliu', 'Angaur', 'Kayangel', 'Sonsorol', 'Hatohobei'
  ],
  zipCodePattern: 'PW#####',
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
    const number = Random.int(1, 300);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return `PW${String(Random.int(10000, 99999))}`;
  },

  phoneFormats: [
    '+680 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'palaunet.com', 'micsurf.com', 'live.com', 'belau.net'
  ],

  companyNames: [
    'Bank of Guam Palau Branch', 'Palau National Communications',
    'Palau Pacific Resort', 'Palau Aquatics',
    'Belau National Museum', 'Sam\'s Tours Palau',
    'Palau Royal Resort', 'Surangel and Sons',
    'Palau Conservation Society', 'Neco Marine Palau'
  ],

  industries: [
    'Tourism', 'Fisheries', 'Telecommunications', 'Finance', 'Construction',
    'Healthcare', 'Education', 'Transportation', 'Retail', 'Agriculture'
  ],

  catchPhrases: [
    'Building our island paradise', 'Excellence through service',
    'Pride in our heritage', 'Commitment to quality',
    'Strength in our community', 'Progress for Palau',
    'Innovation for sustainability', 'A pristine Pacific gem'
  ]
};
