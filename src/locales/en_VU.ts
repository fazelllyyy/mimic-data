import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_VU: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Joe', 'Kalkot', 'Edward', 'Philip', 'Joshua', 'Samuel', 'Martin',
    'Jean-Baptiste', 'Frederick', 'Thomas', 'Pierre', 'Sato', 'Job', 'Isaiah', 'Lui'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Mary', 'Rose', 'Grace', 'Esther', 'Ruth', 'Sarah', 'Helen',
    'Deborah', 'Nancy', 'Julie', 'Anna', 'Catherine', 'Margaret', 'Elizabeth', 'Eva'
  ],
  lastNames: [
    'Iauko', 'Watt', 'Taros', 'Matas', 'Worwor', 'Korman', 'Natapei', 'Vohor',
    'Molisa', 'Rarua', 'Tari', 'Masing', 'Tom', 'Jimmy', 'Baptiste',
    'Tabisauv', 'Yawa', 'Malsungai', 'Sapat', 'Yali',
    'Meli', 'Samuel', 'Loughman', 'Tavo', 'Nakou', 'Tasso', 'Cheffy', 'Garae', 'Donald', 'Kalpoi'
  ],
  streets: [
    'Emalus Campus Road', 'Tassiriki Road', 'Saralana Beach Road',
    'Kumul Highway', 'Main Street', 'Antoine Street',
    'Boulevard Hage', 'Rue de Paris', 'Tana Street',
    'Rue de l\'Indépendance', 'Santo Main Road', 'Luganville Coastal Road',
    'Tanna Island Road', 'Epi Street', 'Ambrym Road'
  ],
  cities: [
    'Port Vila', 'Luganville', 'Norsup', 'Isangel', 'Sola',
    'Saratamata', 'Lakatoro', 'Longana', 'Rovo Bay', 'Palikulo',
    'Bushman\'s Bay', 'Walaha', 'Lamap', 'Craig Cove', 'Ulei',
    'Southeast', 'Port Olry', 'Quion Hill', 'White Sands', 'Tautu'
  ],
  states: [
    'Malampa', 'Penama', 'Sanma', 'Shefa', 'Tafea',
    'Torba'
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
    '+678 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'vanuatu.com.vu', 'tvl.net.vu', 'digicelvanuatu.com', 'live.com'
  ],

  companyNames: [
    'Air Vanuatu', 'National Bank of Vanuatu', 'Digicel Vanuatu',
    'Vanuatu Tourism Office', 'Tanna Coffee', 'Vanuatu Coconut Oil',
    'Iririki Island Resort', 'Vanuatu Brewery', 'Unelco Vanuatu', 'Lava Juice'
  ],

  industries: [
    'Tourism', 'Finance', 'Telecommunications', 'Agriculture', 'Construction',
    'Transportation', 'Education', 'Healthcare', 'Retail', 'Fisheries'
  ],

  catchPhrases: [
    'Building our nation together', 'Excellence through service',
    'Unity in diversity', 'Commitment to quality',
    'Strength in our islands', 'Progress for Vanuatu',
    'Innovation for growth', 'Happiness is Vanuatu'
  ]
};
