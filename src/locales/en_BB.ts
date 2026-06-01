import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_BB: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Ronald', 'Trevor', 'Graham', 'Ian', 'Winston', 'Clive', 'Samuel',
    'Roger', 'Errol', 'Hartley', 'Stephen', 'Adrian', 'Shane', 'Richard', 'Dale'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Patricia', 'Yvonne', 'Arlene', 'Cheryl', 'Cynthia', 'Esther', 'Mona',
    'Marcia', 'Stephanie', 'Sonia', 'Gloria', 'Evelyn', 'Monique', 'Janice', 'Shirley'
  ],
  lastNames: [
    'Williams', 'Smith', 'Jones', 'Brown', 'Johnson', 'Thompson', 'Grant', 'Clarke',
    'Green', 'Foster', 'Hinds', 'Barrow', 'Marshall', 'Carter', 'Jordan',
    'Bayley', 'Holder', 'Worrell', 'Bromfield', 'Bynoe',
    'Gittens', 'Prescod', 'Inniss', 'Daisley', 'Hunte', 'Skeete', 'Moe', 'Bratwaite', 'Yearwood', 'Sealy'
  ],
  streets: [
    'Broad Street', 'Bay Street', 'Bridgetown Main Road', 'Highway 1',
    'Spring Garden Highway', 'St. Michael\'s Row', 'Belmont Road',
    'Pine Road', 'Husbands Gap', 'University Row',
    'Welches Road', 'Warrens Road', 'Rendezvous Road', 'Holetown Road', 'Oistins Main Road'
  ],
  cities: [
    'Bridgetown', 'Speightstown', 'Oistins', 'Holetown', 'Crane Beach',
    'Bathsheba', 'Hastings', 'Rockley', 'Worthing', 'Saint Lawrence',
    'Black Rock', 'Wanstead', 'Gibbes', 'Cave Hill', 'Belleville',
    'Newton Terrace', 'Bishops Court', 'Thornbury', 'Pine Plantation', 'Greenland'
  ],
  states: [
    'Christ Church', 'Saint Andrew', 'Saint George', 'Saint James', 'Saint John',
    'Saint Joseph', 'Saint Lucy', 'Saint Michael', 'Saint Peter', 'Saint Philip',
    'Saint Thomas'
  ],
  zipCodePattern: 'BB#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Hotel Manager', 'Financial Analyst', 'Marketing Executive',
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
    return `BB${String(Random.int(10000, 99999))}`;
  },

  phoneFormats: [
    '+1-246 ###-####',
    '(246) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'caribsurf.com', 'sunbeach.net', 'barbados.net', 'live.com'
  ],

  companyNames: [
    'Sagicor Financial', 'Barbados Tourism Marketing Inc.',
    'Barbados Port Authority', 'CIBC FirstCaribbean Bank', 'Banks Holdings',
    'Lime Barbados', 'Barbados Light and Power', 'A.S. Bryden & Sons',
    'Roberts Manufacturing', 'Barbados National Bank'
  ],

  industries: [
    'Tourism', 'Finance', 'Real Estate', 'Manufacturing', 'Telecommunications',
    'Agriculture', 'Construction', 'Healthcare', 'Education', 'Transportation'
  ],

  catchPhrases: [
    'Pride and industry', 'Where paradise awaits', 'Service excellence',
    'Building Barbados together', 'Innovation and growth',
    'Commitment to quality', 'A beautiful island adventure',
    'Strength through partnership'
  ]
};
