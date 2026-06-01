import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_TV: LocaleDefinition = {
  firstNamesMale: [
    'Michael', 'David', 'James', 'John', 'Robert', 'William', 'Mark', 'Christopher',
    'Kevin', 'Brian', 'Andrew', 'Paul', 'Anthony', 'Jason', 'Peter',
    'Enele', 'Kausea', 'Maatia', 'Saufatu', 'Taukelina', 'Apineru', 'Lala',
    'Sirilo', 'Kamuta', 'Falava', 'Pule', 'Samuelu', 'Penisimani', 'Feleti', 'Tavita'
  ],
  firstNamesFemale: [
    'Michelle', 'Susan', 'Karen', 'Jennifer', 'Sandra', 'Lisa', 'Paula', 'Donna',
    'Carol', 'Sharon', 'Janet', 'Angela', 'Andrea', 'Denise', 'Beverley',
    'Salamina', 'Siliva', 'Luisa', 'Pasepa', 'Moe', 'Malia', 'Salota',
    'Futi', 'Laua', 'Fala', 'Tusa', 'Lili', 'Vasa', 'Tina', 'Lapunia'
  ],
  lastNames: [
    'Seluka', 'Paeniu', 'Puapua', 'Sopoanga', 'Teo', 'Pese', 'Tulaga', 'Tepa',
    'Lausea', 'Taupo', 'Melei', 'Malua', 'Panapa', 'Fala', 'Tofinga',
    'Niu', 'Loto', 'Sami', 'Tausi', 'Vai',
    'Ionel', 'Letasi', 'Napoe', 'Tulaga', 'Siale', 'Alesana', 'Teke', 'Toloa', 'Temaki', 'Kilisone'
  ],
  streets: [
    'Funafuti Main Road', 'Vaiaku Road', 'Fakaifou Street', 'Alapi Street',
    'Senala Street', 'Teone Street', 'Lofeagai Street',
    'Tausoa Beach Road', 'Amatuku Road', 'Nukulaelae Road',
    'Vaitupu Road', 'Nanumea Street', 'Niutao Street', 'Nui Street', 'Nanumaga Street'
  ],
  cities: [
    'Funafuti', 'Vaiaku', 'Asau', 'Tanrake', 'Vaiaku Village',
    'Savae', 'Kulia', 'Alapi', 'Fakaifou', 'Senala',
    'Lofeagai', 'Tekavatoetoe', 'Teone', 'Tausoa', 'Amatuku',
    'Savave', 'Matanuku', 'Tonga', 'Niutao', 'Nukulaelae'
  ],
  states: [
    'Funafuti', 'Nanumea', 'Niutao', 'Nui', 'Nukufetau',
    'Nukulaelae', 'Vaitupu', 'Nanumaga', 'Niulakita'
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
    const number = Random.int(1, 200);
    return `${number} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+688 ### ####',
    '### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'tuvalu.tv', 'timeless.com', 'live.com', 'tcc.net.tv'
  ],

  companyNames: [
    'Tuvalu Telecommunications Corporation', 'National Bank of Tuvalu',
    'Air Tuvalu', 'Tuvalu Electricity Corporation', 'Tuvalu Fisheries Corporation',
    'Tuvalu Cooperative', 'U-Sky Airlines', 'Alofa Resort',
    'Tuvalu Maritime Training', 'Funafuti Lagoon Resort'
  ],

  industries: [
    'Telecommunications', 'Fisheries', 'Finance', 'Tourism', 'Agriculture',
    'Construction', 'Transportation', 'Education', 'Healthcare', 'Retail'
  ],

  catchPhrases: [
    'Building our future together', 'Excellence through service',
    'Pride in our islands', 'Commitment to quality',
    'Strength in our community', 'Progress for Tuvalu',
    'Innovation for growth', 'A Pacific treasure'
  ]
};
