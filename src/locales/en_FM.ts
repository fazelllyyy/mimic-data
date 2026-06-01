import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_FM: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Manny', 'Ricky', 'Joseph', 'Albert', 'Edwin', 'Patten', 'France', 'Sepe',
    'Isao', 'Lawrence', 'Simon', 'Tony', 'Tosiwo', 'John', 'Kun'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Maria', 'Rita', 'Loretta', 'Gemima', 'Leilani', 'Rosita', 'Tina',
    'Catherine', 'Nancy', 'Anna', 'Luisa', 'Serphina', 'Margarita', 'Eulalia', 'Consuelo'
  ],
  lastNames: [
    'Mori', 'Yamada', 'Santos', 'Taman', 'Wichep', 'Nena', 'Tellei', 'Simina',
    'Moses', 'Sam', 'Sohl', 'Hadley', 'Olter', 'Falcam', 'Tosiwo',
    'Nakayama', 'Palik', 'Siroma', 'Jonathan', 'O\'Brien',
    'Edwards', 'Beck', 'Yoma', 'Killion', 'Perman', 'Neff', 'Tasipi', 'Higashi', 'Shimizu', 'Falcam'
  ],
  streets: [
    'Pohnpei Island Main Road', 'Kolonia Town Road', 'Palikir Road',
    'Weno Main Street', 'Sokehs Ridge Road', 'Mesenieng Road',
    'Kitti Road', 'Madolenihmw Road', 'Nett Road',
    'Yap Main Road', 'Chuuk Main Road', 'Kosrae Main Road',
    'Lelu Road', 'Tonoas Road', 'Dublon Road'
  ],
  cities: [
    'Palikir', 'Kolonia', 'Weno', 'Tofol', 'Lelu',
    'Nett', 'Madolenihmw', 'Sokehs', 'Kitti', 'U',
    'Moen', 'Tonoas', 'Fefan', 'Dublon', 'Eot',
    'Ruo', 'Sapwuahfik', 'Nukuoro', 'Kapingamarangi', 'Mokil'
  ],
  states: [
    'Chuuk', 'Kosrae', 'Pohnpei', 'Yap'
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
    '+691 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'fsm.net', 'mail.fm', 'live.com', 'telecom.fm'
  ],

  companyNames: [
    'FSM Telecommunications Corporation', 'Bank of the Federated States of Micronesia',
    'FSM Petroleum Corporation', 'Caroline Windward', 'Micronesian Airlines',
    'Pacific RISA', 'PPL FSM', 'Island Tropic', 'Truk Stop', 'Kosrae Nautilus Resort'
  ],

  industries: [
    'Telecommunications', 'Finance', 'Fisheries', 'Tourism', 'Agriculture',
    'Construction', 'Transportation', 'Education', 'Healthcare', 'Retail'
  ],

  catchPhrases: [
    'Building our federation together', 'Excellence through service',
    'Unity in diversity', 'Commitment to quality',
    'Strength in our islands', 'Progress for Micronesia',
    'Innovation for growth', 'Pacific heritage and pride'
  ]
};
