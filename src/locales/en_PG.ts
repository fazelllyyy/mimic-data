import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_PG: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Kila', 'Moses', 'Larry', 'Samson', 'Steven', 'James', 'Don', 'Charles',
    'Wilson', 'Gari', 'Tau', 'Ricky', 'Peter', 'Joe', 'Kepas'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Mary', 'Rose', 'Grace', 'Esther', 'Ruth', 'Sarah', 'Helen',
    'Deborah', 'Nancy', 'Julie', 'Anna', 'Catherine', 'Margaret', 'Elizabeth', 'Eva'
  ],
  lastNames: [
    'Thomas', 'John', 'Williams', 'Peter', 'Joseph', 'Smith', 'James', 'Brown',
    'Samuel', 'David', 'Philip', 'Simon', 'Luke', 'Mark', 'Martin',
    'Kepas', 'Marape', 'O\'Neill', 'Wena', 'Puling',
    'Wari', 'Rarua', 'Polye', 'Kaupa', 'Duma', 'Hubert', 'Kua', 'Toro', 'Kanawi', 'Laufa'
  ],
  streets: [
    'Waigani Drive', 'Hunter Street', 'Musgrave Street', 'Braun Street',
    'Port Moresby Road', 'Lae Main Street', 'Independence Drive',
    'Section Street', 'Angau Drive', 'Paga Hill Road',
    'Koki Beach Road', 'Gerehu Road', 'Gordons Road', 'Bomana Road', 'Hohola Road'
  ],
  cities: [
    'Port Moresby', 'Lae', 'Mount Hagen', 'Madang', 'Kokopo',
    'Goroka', 'Wewak', 'Rabaul', 'Daru', 'Bulolo',
    'Kimbe', 'Kavieng', 'Kerema', 'Popondetta', 'Arawa',
    'Mendi', 'Kundiawa', 'Lorengau', 'Tari', 'Vanimo'
  ],
  states: [
    'National Capital District', 'Morobe', 'Eastern Highlands', 'East New Britain',
    'Madang', 'West New Britain', 'Bougainville', 'Enga', 'Western Highlands',
    'Chimbu', 'Southern Highlands', 'New Ireland', 'Oro', 'Manus', 'Milne Bay'
  ],
  zipCodePattern: '###',
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
    return String(Random.int(100, 999));
  },

  phoneFormats: [
    '+675 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'png.net', 'daltron.com.pg', 'global.net.pg', 'online.net.pg'
  ],

  companyNames: [
    'Ok Tedi Mining', 'Bank of Papua New Guinea', 'PNG Air',
    'Steamships Trading Company', 'Kumul Petroleum', 'Telikom PNG',
    'Digicel PNG', 'Bmobile-Vodafone PNG', 'Lihir Gold', 'Niugini Power'
  ],

  industries: [
    'Mining', 'Telecommunications', 'Agriculture', 'Finance', 'Energy',
    'Transportation', 'Construction', 'Healthcare', 'Education', 'Retail'
  ],

  catchPhrases: [
    'Unity in diversity', 'Building our nation together',
    'Excellence through service', 'Progress for Papua New Guinea',
    'Commitment to quality', 'Strength in our heritage',
    'Innovation for development', 'Together for prosperity'
  ]
};
