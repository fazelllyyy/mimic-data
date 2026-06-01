import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_JM: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'Andrew', 'David', 'Carlton', 'Paul', 'Richard', 'Mark', 'Peter',
    'Christopher', 'Brian', 'Kevin', 'Patrick', 'Jason', 'Anthony', 'Keith',
    'Wayne', 'Ian', 'Andre', 'Dwayne', 'Kareem', 'Winston', 'Owen',
    'Lincoln', 'Derrick', 'Barrington', 'Michael', 'Howard', 'Lloyd', 'Samuel', 'Daniel'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Paula', 'Sandra', 'Donna', 'Carol', 'Sharon',
    'Marsha', 'Beverley', 'Janet', 'Angela', 'Lisa', 'Ann-Marie', 'Jacqueline',
    'Yvonne', 'Patrice', 'Nadine', 'Denise', 'Andrea', 'Cheryl', 'Tamara',
    'Katherine', 'Stephanie', 'Shelly-Ann', 'Simone', 'Kimberly', 'Rochelle', 'Renee', 'Tracy'
  ],
  lastNames: [
    'Campbell', 'Brown', 'Williams', 'Thompson', 'Smith', 'Johnson', 'Clarke',
    'McKenzie', 'Robinson', 'Graham', 'Henry', 'Davis', 'Wright', 'Gordon',
    'Anderson', 'Wilson', 'Green', 'Reid', 'Walker', 'Hall',
    'Allen', 'Francis', 'Jackson', 'Morrison', 'Lewis', 'Foster', 'Miller', 'Martin', 'Lee', 'Edwards'
  ],
  streets: [
    'King Street', 'Port Royal Street', 'East Street', 'Upper Waterloo Road',
    'Half Way Tree Road', 'Constant Spring Road', 'Hagley Park Road',
    'Spanish Town Road', 'Tredegar Park Road', 'Red Hills Road',
    'Molynes Road', 'Dunrobin Avenue', 'Barbican Road', 'Hope Road', 'Mountain View Avenue'
  ],
  cities: [
    'Kingston', 'Montego Bay', 'Spanish Town', 'Portmore', 'May Pen',
    'Mandeville', 'Ocho Rios', 'Savanna-la-Mar', 'Negril', 'Port Antonio',
    'St. Ann\'s Bay', 'Christiania', 'Lucea', 'Falmouth', 'Morant Bay',
    'Black River', 'Santa Cruz', 'Linstead', 'Bog Walk', 'Old Harbour'
  ],
  states: [
    'Kingston', 'St. Andrew', 'St. Catherine', 'St. James', 'Manchester',
    'Clarendon', 'St. Elizabeth', 'Westmoreland', 'St. Ann', 'Hanover',
    'Trelawny', 'Portland', 'St. Mary', 'St. Thomas'
  ],
  zipCodePattern: 'JM####',
  jobTitles: [
    'Software Engineer', 'Accountant', 'Teacher', 'Nurse', 'Lawyer',
    'Business Manager', 'Marketing Executive', 'Financial Analyst',
    'Customer Service Representative', 'Engineer', 'Architect', 'Sales Representative'
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
    return `JM${String(Random.int(1000, 9999))}`;
  },

  phoneFormats: [
    '+1-876 ###-####',
    '(876) ###-####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'jm.com', 'cwjamaica.com', 'flowja.com', 'digiceljamaica.com'
  ],

  companyNames: [
    'GraceKennedy', 'Sagicor Group Jamaica', 'National Commercial Bank Jamaica',
    'Digicel Jamaica', 'Flow Jamaica', 'Caribbean Cement Company',
    'Jamaica Public Service', 'Red Stripe Jamaica', 'Scotia Group Jamaica',
    'Pulse Investments'
  ],

  industries: [
    'Finance', 'Technology', 'Tourism', 'Manufacturing', 'Agriculture',
    'Telecommunications', 'Healthcare', 'Education', 'Construction', 'Transportation'
  ],

  catchPhrases: [
    'Out of many, one people', 'Building a better Jamaica',
    'Excellence through service', 'Together we thrive',
    'Innovation for growth', 'Commitment to quality',
    'Strength in unity', 'Progress through partnership'
  ]
};
