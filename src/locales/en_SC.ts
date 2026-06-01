import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_SC: LocaleDefinition = {
  firstNamesMale: [
    'James', 'John', 'David', 'Michael', 'Daniel', 'Paul', 'Peter', 'Robert',
    'William', 'Raymond', 'Joseph', 'Patrick', 'George', 'Charles', 'Richard',
    'Thomas', 'Christopher', 'Steven', 'Brian', 'Kevin', 'Roger', 'Mark',
    'Andrew', 'Philip', 'Bernard', 'Duncan', 'Ronnie', 'Guy', 'Louis', 'Clifford'
  ],
  firstNamesFemale: [
    'Marie', 'Mary', 'Patricia', 'Linda', 'Jennifer', 'Elizabeth', 'Margaret',
    'Susan', 'Sarah', 'Catherine', 'Anne', 'Monique', 'Rose', 'Grace', 'Jane',
    'Margaret', 'Colette', 'Josephine', 'Charlotte', 'Elaine', 'Judith',
    'Sharon', 'Michele', 'Louise', 'Sylvette', 'Solange', 'Florence', 'Diana',
    'Therese', 'Georgette'
  ],
  lastNames: [
    'Jumeau', 'Gonthier', 'Mondon', 'Volcère', 'Barra', 'Labrosse', 'Brioche',
    'Lesperance', 'Rose', 'Joubert', 'Balette', 'Fontaine', 'Laurent',
    'Morel', 'Simon', 'Pothin', 'Gébert', 'Quatre', 'Arissol', 'Hoareau',
    'Leslie', 'Morton', 'Rassool', 'Sinon', 'Kurz', 'Mesch', 'Henry',
    'Adam', 'Duncan', 'Williams'
  ],
  streets: [
    'Revolution Avenue', 'Market Street', 'Independence Avenue',
    'Victoria Road', 'Mont Fleuri Road', 'Bel Air Road',
    'Coastal Road', 'Le Chantier Road', 'Pointe Larue Road',
    'Anse Royale Road', 'Sans Souci Road', 'Union Vale Road',
    'Mahe Beach Road', 'Providence Road', 'Perseverance Road',
    'Bois de Rose Avenue', 'Seychelles Main Road', 'Paradise Road'
  ],
  cities: [
    'Victoria', 'Anse Royale', 'Anse Boileau', 'Beau Vallon', 'Cascade',
    'Machabee', 'Baie Lazare', 'Takamaka', 'La Digue', 'Grand Anse',
    'Anse Etoile', 'Au Cap', 'English River', 'Les Mamelles',
    'Mont Buxton', 'Mont Fleuri', 'Plaisance', 'Roche Caïman',
    'Saint Louis', 'Bel Air', 'Bel Ombre', 'Glacis', 'Port Glaud', 'Praslin'
  ],
  states: [
    'Anse Boileau', 'Anse Royale', 'Anse Etoile', 'Au Cap', 'Baie Lazare',
    'Baie Sainte Anne', 'Beau Vallon', 'Bel Air', 'Bel Ombre', 'Cascade',
    'Glacis', 'Grand Anse Mahe', 'Grand Anse Praslin', 'La Digue',
    'Les Mamelles', 'Mont Buxton', 'Mont Fleuri', 'Plaisance',
    'Pointe La Rue', 'Port Glaud', 'Roche Caïman', 'Saint Louis', 'Takamaka'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Graphic Designer',
    'Operations Manager', 'Business Analyst', 'Financial Analyst', 'Resort Manager'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance', 'Operations',
    'Customer Service', 'Information Technology', 'Research and Development', 'Legal'
  ],
  metricSystem: 'metric',

  formatFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  },

  formatAddress(street: string, city: string, state: string, zipCode: string): string {
    const houseNumber = Random.int(1, 9999);
    return `${houseNumber} ${street}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+248 ## ## ##',
    '+248 2### ###',
    '+248 4### ###',
    '+248 6### ###',
    '+248 7### ###',
    '## ## ##',
    '2### ###',
    '4### ###',
    '6### ###',
    '7### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'seychelles.net', 'airseychelles.com', 'cableandwireless.sc'
  ],

  companyNames: [
    'Air Seychelles', 'Bank of Seychelles', 'Nouvobanq', 'Seychelles Telecom',
    'Cable and Wireless Seychelles', 'Seychelles Petroleum Company',
    'Seychelles Breweries', 'Island Development Company',
    'Seychelles Trading Company', 'H Savy Insurance',
    'Creole Travel Services', 'Sunset Beach Hotel',
    'Four Seasons Seychelles', 'North Island Resort',
    'Constance Ephélia Seychelles', 'STC Hypermarket'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Telecommunications', 'Energy', 'Transport', 'Tourism',
    'Construction', 'Agriculture', 'Fishing', 'Hospitality'
  ],

  catchPhrases: [
    'Innovating for Seychelles', 'Your trusted partner in business',
    'Building a better tomorrow', 'Excellence in everything we do',
    'Commitment to quality service', 'Your success is our priority'
  ]
};
