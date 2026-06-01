import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GY: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Brian', 'Kevin', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Rajendra', 'Deoraj', 'Vishnu', 'Shamdeo', 'Carl', 'Samuel',
    'Patrick', 'Leonard', 'Roger', 'Ian', 'Richard', 'Dale', 'Winston', 'Clive', 'Ronald'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Shanti', 'Anita', 'Lakshmi', 'Uma', 'Devi', 'Patricia', 'Cheryl',
    'Katherine', 'Nalini', 'Kamini', 'Roshni', 'Stephanie', 'Nicole', 'Tracy', 'Wendy'
  ],
  lastNames: [
    'Persaud', 'Mohamed', 'Williams', 'Singh', 'Khan', 'Ali', 'Bacchus', 'Ramnarine',
    'John', 'Thomas', 'Grant', 'Thompson', 'King', 'Green', 'Wilson',
    'Rampersaud', 'Ramdass', 'Rambaran', 'Lall', 'Bissoondath',
    'Seeram', 'Phagoo', 'Banwarie', 'Haniff', 'Sukhai', 'Parris', 'Latchman', 'David', 'Joseph', 'Deen'
  ],
  streets: [
    'High Street', 'Main Street', 'Water Street', 'Regent Street', 'Camp Street',
    'Hadfield Street', 'Brickdam', 'Church Street', 'King Street', 'Aubrey Barker Road',
    'New Market Street', 'Quamina Street', 'Durban Street', 'South Road', 'Lamaha Street'
  ],
  cities: [
    'Georgetown', 'Linden', 'New Amsterdam', 'Bartica', 'Lethem',
    'Vreed-en-Hoop', 'Rose Hall', 'Corriverton', 'Mahdia', 'Parika',
    'Anna Regina', 'Charity', 'Beterverwagting', 'Mahaicony', 'Fort Wellington',
    'Mocha', 'D\'Edward Village', 'Bush Lot', 'La Grange', 'Enmore'
  ],
  states: [
    'Demerara-Mahaica', 'Essequibo Islands-West Demerara', 'East Berbice-Corentyne',
    'Mahaica-Berbice', 'Upper Demerara-Upper Berbice', 'Pomeroon-Supenaam',
    'Cuyuni-Mazaruni', 'Potaro-Siparuni', 'Upper Takutu-Upper Essequibo', 'Barima-Waini'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Engineer', 'Business Manager', 'Marketing Executive',
    'Financial Analyst', 'Customer Service Representative', 'Sales Representative', 'Manager'
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
    const number = Random.int(1, 9999);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+592 ###-####',
    '###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'guy.net', 'telemediahub.com', 'sdnp.com', 'networksgy.com'
  ],

  companyNames: [
    'Guyana Goldfields', 'Guyana Telephone and Telegraph Company',
    'Demerara Distillers Limited', 'Banks DIH Limited', 'Republic Bank Guyana',
    'Guyana Oil Company', 'Edward B. Beharry Group', 'DIH Services',
    'International Biscuits Limited', 'Corporation Soleil'
  ],

  industries: [
    'Mining', 'Agriculture', 'Forestry', 'Manufacturing', 'Telecommunications',
    'Finance', 'Construction', 'Transportation', 'Education', 'Healthcare'
  ],

  catchPhrases: [
    'One Guyana, One People', 'Building a prosperous nation',
    'Excellence in service', 'Innovation for development',
    'Gateway to South America', 'Commitment to quality',
    'Together for growth', 'Strength through diversity'
  ]
};
