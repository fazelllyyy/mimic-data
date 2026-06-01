import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_FJ: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Ratu', 'Jone', 'Josaia', 'Savenaca', 'Iliesa', 'Samuela', 'Meli',
    'Timoci', 'Aisake', 'Rupeni', 'Mosese', 'Jope', 'Pio', 'Viliame', 'Saimoni'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Adi', 'Makereta', 'Suliana', 'Siteri', 'Venina', 'Asenaca', 'Kalerina',
    'Luisa', 'Mereani', 'Tevita', 'Eleni', 'Susana', 'Marica', 'Ateca', 'Salote'
  ],
  lastNames: [
    'Smith', 'Williams', 'Kumar', 'Singh', 'Patel', 'John', 'Sharma', 'Chand',
    'Thomas', 'Khan', 'Rao', 'Narayan', 'Lal', 'Prasad', 'Nair',
    'Bainimarama', 'Tabakaucoro', 'Mara', 'Seniloli', 'Katonivere',
    'Ravuvu', 'Vuto', 'Baledrokadroka', 'Tuatoka', 'Bogileka', 'Seru', 'Buadromo', 'Cokanasiga', 'Nagalu', 'Savai'
  ],
  streets: [
    'Victoria Parade', 'Queens Road', 'Princes Road', 'Ratu Sukuna Road',
    'Cumming Street', 'Waimanu Road', 'Ghai Street',
    'Foster Street', 'Rodwell Road', 'Burns Avenue',
    'Ratu Marama Road', 'Nabua Road', 'Nasese Road', 'Grantham Road', 'Suva Street'
  ],
  cities: [
    'Suva', 'Nadi', 'Lautoka', 'Labasa', 'Ba',
    'Tavua', 'Rakiraki', 'Savusavu', 'Kadavu', 'Levuka',
    'Nausori', 'Sigatoka', 'Nabouwalu', 'Lomaloma', 'Deuba',
    'Pacific Harbour', 'Korovou', 'Wailevu', 'Serea', 'Taveuni'
  ],
  states: [
    'Central', 'Eastern', 'Northern', 'Western', 'Rotuma'
  ],
  zipCodePattern: '#####',
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
    const number = Random.int(1, 500);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+679 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'connect.com.fj', 'unwired.com.fj', 'live.com', 'fijinet.net.fj'
  ],

  companyNames: [
    'Fiji Airways', 'Westpac Fiji', 'Fiji Sugar Corporation',
    'Fiji Television', 'Vodafone Fiji', 'Airports Fiji Limited',
    'Fiji Ports Corporation', 'Fiji Pine Group', 'Morrison\'s', 'Shell Fiji'
  ],

  industries: [
    'Tourism', 'Finance', 'Agriculture', 'Telecommunications', 'Transportation',
    'Manufacturing', 'Construction', 'Healthcare', 'Education', 'Retail'
  ],

  catchPhrases: [
    'Where happiness finds you', 'Bula spirit of service',
    'Building a better Fiji', 'Excellence in everything',
    'Island hospitality at its best', 'Commitment to quality',
    'Together for a prosperous Fiji', 'Innovation and tradition'
  ]
};
