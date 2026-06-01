import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_BZ: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'William', 'Robert', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Wilfred', 'Orlando', 'Dylan', 'Shane', 'Evan', 'Dennis', 'Leonard',
    'Patrick', 'Roger', 'Ian', 'Kurt', 'Raymond', 'Earl', 'Henry', 'Ronald'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Marisa', 'Janine', 'Leticia', 'Melissa', 'Kimberly', 'Patricia', 'Cheryl',
    'Stephanie', 'Vanessa', 'Sherry', 'Tracy', 'Roxanne', 'Diane', 'Fiona', 'Shirley'
  ],
  lastNames: [
    'Garcia', 'Williams', 'Smith', 'Brown', 'Johnson', 'Jones', 'Miller', 'Davis',
    'Thomas', 'Chin', 'Thompson', 'White', 'Harris', 'Martin', 'Lewis',
    'Burgos', 'Catzim', 'Rhaburn', 'Mortis', 'Trapp',
    'Musa', 'Bol', 'Leslie', 'Tillett', 'Griffith', 'Usher', 'Augustine', 'Mahler', 'Rice', 'Neal'
  ],
  streets: [
    'Albert Street', 'Coney Drive', 'Belize City Road', 'Haulover Creek',
    'Freetown Road', 'Newtown Barracks', 'Central American Boulevard',
    'Prince Street', 'Queen Street', 'King Street',
    'San Ignacio Town Airstrip Road', 'Caye Caulker Road', 'Placencia Road',
    'Marine Parade', 'St. Joseph Street'
  ],
  cities: [
    'Belize City', 'San Ignacio', 'Orange Walk', 'Belmopan', 'Dangriga',
    'Corozal Town', 'Punta Gorda', 'San Pedro', 'Benque Viejo del Carmen',
    'Ladyville', 'Trial Farm', 'Hope Creek', 'Santa Elena', 'Orange Walk Town',
    'Valley of Peace', 'Roaring Creek', 'Spanish Lookout', 'Sarteneja', 'Placencia', 'Caye Caulker'
  ],
  states: [
    'Belize', 'Cayo', 'Orange Walk', 'Corozal', 'Stann Creek',
    'Toledo'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Tour Guide', 'Hotel Manager', 'Marketing Executive',
    'Financial Analyst', 'Civil Engineer', 'Customer Service Representative', 'Sales Manager'
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
    return `${number} ${street}, ${city} City, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+501 ###-####',
    '###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'btl.net', 'belizemail.net', 'live.com', 'belize.net'
  ],

  companyNames: [
    'Belize Bank', 'Tropica Travel', 'Belize Electricity Limited',
    'Maya Island Air', 'Belize Telecommunications Limited',
    'Bowen and Bowen', 'Beliger Group', 'Brodies',
    'Caye International Bank', 'Belize Tourist Board'
  ],

  industries: [
    'Tourism', 'Finance', 'Agriculture', 'Telecommunications', 'Construction',
    'Transportation', 'Healthcare', 'Education', 'Fisheries', 'Retail'
  ],

  catchPhrases: [
    'Mother Nature\'s best kept secret', 'Building Belize together',
    'Excellence in tourism', 'Quality service guaranteed',
    'A Caribbean paradise', 'Commitment to community',
    'Innovation for sustainability', 'Preserving our heritage'
  ]
};
