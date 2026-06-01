import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_BS: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Winston', 'Leonard', 'Walter', 'Charles', 'Alfred', 'Edward', 'Patrick',
    'Samuel', 'Seymour', 'Philip', 'Lloyd', 'Clarence', 'Roosevelt', 'Wilfred', 'Barry'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Patricia', 'Yvonne', 'Princess', 'Juliette', 'Cheryl', 'Raynell', 'Janice',
    'Estelle', 'Monique', 'Stephanie', 'Sheryl', 'Gloria', 'Diane', 'Cynthia', 'Evelyn'
  ],
  lastNames: [
    'Smith', 'Brown', 'Thompson', 'Johnson', 'Williams', 'Jones', 'Davis', 'Miller',
    'Wilson', 'Anderson', 'Taylor', 'Thomas', 'Roberts', 'Turner', 'Phillips',
    'Ferguson', 'Bain', 'Moss', 'Swann', 'Cartwright',
    'Pinder', 'Francis', 'Rolle', 'Darville', 'Moxey', 'Hepburn', 'Evans', 'Wood', 'Ruth', 'Craigg'
  ],
  streets: [
    'Bay Street', 'Shirley Street', 'Marlborough Street', 'Elizabeth Avenue',
    'West Bay Street', 'East Bay Street', 'Independence Drive',
    'Soldier Road', 'Prince Charles Drive', 'Robinson Road',
    'John F. Kennedy Drive', 'Collins Avenue', 'Wulff Road', 'Hilton Drive', 'Ocean Club Drive'
  ],
  cities: [
    'Nassau', 'Freeport', 'West End', 'Coopers Town', 'Marsh Harbour',
    'Duncan Town', 'Alice Town', 'George Town', 'Clarence Town', 'Dunmore Town',
    'Matthew Town', 'Snug Corner', 'Acklins', 'Port Nelson', 'Colonel Hill',
    'Cockburn Town', 'Nicholls Town', 'Andros Town', 'Bahama Village', 'Harbour Island'
  ],
  states: [
    'New Providence', 'Grand Bahama', 'Abaco', 'Andros', 'Eleuthera',
    'Exuma', 'Long Island', 'Inagua', 'Cat Island', 'Mayaguana',
    'Acklins', 'Crooked Island', 'Bimini', 'Harbour Island', 'San Salvador'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Hotel Manager', 'Financial Advisor', 'Marketing Manager',
    'Diving Instructor', 'Tourism Manager', 'Real Estate Agent', 'Sales Executive'
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
    '+1-242 ###-####',
    '(242) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'batelnet.bs', 'bahamas.net', 'coralwave.com', 'live.com'
  ],

  companyNames: [
    'Bahamas Telecommunications Company', 'Royal Bank of Canada Bahamas',
    'Commonwealth Bank', 'Bahair', 'Freeport Harbour Company',
    'Sun International Bahamas', 'Sandals Royal Bahamian',
    'Atlantis Paradise Island', 'Baha Mar', 'Bahamas Power and Light'
  ],

  industries: [
    'Tourism', 'Finance', 'Real Estate', 'Telecommunications', 'Construction',
    'Healthcare', 'Education', 'Transportation', 'Fishing', 'Retail'
  ],

  catchPhrases: [
    'Forward, upward, onward, together', 'Paradise at your doorstep',
    'Excellence in service', 'Building a better Bahamas',
    'Committed to quality', 'Embracing our heritage',
    'Creating opportunities', 'Pride in our islands'
  ]
};
