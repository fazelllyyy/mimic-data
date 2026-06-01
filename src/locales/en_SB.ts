import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SB: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Manasseh', 'Gordon', 'Jeremiah', 'Matthew', 'Samuel', 'Stephen', 'Martin',
    'Dennis', 'Philip', 'Benedict', 'Joses', 'Leni', 'Hudson', 'Collin', 'Edward'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Mary', 'Rose', 'Grace', 'Esther', 'Ruth', 'Sarah', 'Helen',
    'Deborah', 'Nancy', 'Julie', 'Anna', 'Catherine', 'Margaret', 'Elizabeth', 'Eva'
  ],
  lastNames: [
    'Williams', 'Thomas', 'Smith', 'John', 'Brown', 'James', 'Peter', 'David',
    'Joseph', 'Saeni', 'Maenu\'u', 'Kiloe', 'Taro', 'Hou', 'Iroga',
    'Kapini', 'Chua', 'Kuira', 'Sanga', 'Kua',
    'Ngali', 'Suve', 'Anisi', 'Tipitamua', 'Salmon', 'Leinga', 'Sovola', 'Pala', 'Sike', 'Omeki'
  ],
  streets: [
    'Mendana Avenue', 'Kukunau Street', 'Hibiscus Avenue', 'Chinatown Street',
    'Ranandi Street', 'Lengakiki Road', 'Ports Way',
    'Vara Creek Road', 'White River Road', 'King George Street',
    'Panatina Street', 'Malaita Drive', 'Kola\'a Ridge Road', 'Burns Creek Road', 'Honiara Main Street'
  ],
  cities: [
    'Honiara', 'Auki', 'Gizo', 'Kirakira', 'Buala',
    'Lata', 'Taro', 'Munda', 'Tulagi', 'Noro',
    'Yandina', 'Tingoa', 'Rinbi', 'Avuavu', 'Fiu',
    'Selwyn', 'Tatamba', 'Suava', 'Malu\'u', 'Dala'
  ],
  states: [
    'Guadalcanal', 'Malaita', 'Western', 'Choiseul', 'Isabel',
    'Central', 'Temotu', 'Makira', 'Rennell and Bellona'
  ],
  zipCodePattern: '#####',
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
    const number = Random.int(1, 500);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+677 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'solomon.com.sb', 'webbie.com.sb', 'live.com', 'telekom.com.sb'
  ],

  companyNames: [
    'Solomon Telekom', 'Biliki Trading', 'Solomon Islands National Bank',
    'Solomon Airlines', 'Guadalcanal Plains', 'Soltuna',
    'HeliSolutions', 'Solomon Farms', 'Gold Ridge Mining', 'STO Group'
  ],

  industries: [
    'Telecommunications', 'Agriculture', 'Forestry', 'Finance', 'Fisheries',
    'Tourism', 'Construction', 'Mining', 'Transportation', 'Retail'
  ],

  catchPhrases: [
    'Building our future together', 'Excellence through service',
    'Unity in our islands', 'Commitment to quality',
    'Strength in our community', 'Progress for Solomon Islands',
    'Innovation for growth', 'A Pacific paradise'
  ]
};
