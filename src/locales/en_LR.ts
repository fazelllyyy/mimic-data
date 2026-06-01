import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_LR: LocaleDefinition = {
  firstNamesMale: [
    'Amos', 'James', 'Samuel', 'John', 'David', 'Joseph', 'Daniel',
    'William', 'George', 'Thomas', 'Robert', 'Emmanuel', 'Edwin',
    'Richard', 'Peter', 'Michael', 'Stephen', 'Charles', 'Paul',
    'Henry', 'Mohamed', 'Alhaji', 'Sekou', 'Varney', 'Jallah',
    'Musa', 'Momolu', 'Lardner', 'Pierre', 'Francis'
  ],
  firstNamesFemale: [
    'Mary', 'Martha', 'Elizabeth', 'Sarah', 'Rebecca', 'Ruth', 'Grace',
    'Margaret', 'Helen', 'Catherine', 'Alice', 'Jane', 'Agnes',
    'Julia', 'Susanna', 'Miatta', 'Macrina', 'Noni', 'Zubah',
    'Garmai', 'Korto', 'Yatta', 'Lorpu', 'Massah', 'Lily',
    'Juliet', 'Pearl', 'Joyce', 'Roseline', 'Benedicta'
  ],
  lastNames: [
    'Gayflor', 'Wolo', 'Tarpeh', 'Sumo', 'Kollie', 'Sherman', 'Johnson',
    'Freeman', 'Dorley', 'Tarr', 'Doe', 'Dweh', 'Zawolo', 'Toe',
    'Gaye', 'Sawyer', 'Horton', 'Kennedy', 'Roberts', 'Thompson',
    'Gbenyon', 'Blama', 'Nyehn', 'Klopeh', 'Barchue', 'Nagbe',
    'Kenneh', 'Tubman', 'Wehye', 'Gbollie'
  ],
  streets: [
    'Broad Street', 'Careysburg Road', 'Tubman Boulevard',
    'Randall Street', 'Ashmun Street', 'McDonald Street',
    'Center Street', 'Benson Street', 'Water Street',
    'Russell Avenue', 'Sekou Toure Avenue', 'UN Drive',
    'Deception Road', 'Paynesville Road', 'Lynch Street',
    'Buchanan Road', 'Robertsfield Highway', 'Sinkor Road',
    'Congo Town Road', 'Gardnersville Road'
  ],
  cities: [
    'Monrovia', 'Gbarnga', 'Buchanan', 'Kakata', 'Zwedru', 'Harper',
    'Tubmanburg', 'Voinjama', 'Robertsport', 'Sanniquellie',
    'Greenville', 'Bensonville', 'Cestos City', 'Barclayville',
    'Fishtown', 'Foya', 'Zorzor', 'Tappita', 'Bopolu', 'Pleebo'
  ],
  states: [
    'Montserrado County', 'Margibi County', 'Bong County',
    'Lofa County', 'Grand Bassa County', 'Grand Cape Mount County',
    'Nimba County', 'Maryland County', 'Grand Gedeh County',
    'River Gee County', 'Rivercess County', 'Sinoe County',
    'Gbarpolu County', 'Grand Kru County', 'Lofa County'
  ],
  zipCodePattern: '####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst',
    'Marketing Manager', 'Sales Representative', 'Accountant',
    'HR Manager', 'Designer', 'Operations Manager', 'Business Analyst',
    'Product Manager', 'System Administrator'
  ],
  departments: [
    'Engineering', 'Marketing', 'Sales', 'Human Resources', 'Finance',
    'Operations', 'Customer Service', 'IT', 'Research and Development',
    'Legal', 'Administration'
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
    return String(Random.int(1000, 9999));
  },

  phoneFormats: [
    '+231 ### ### ####',
    '+231 77# ### ###',
    '+231 88# ### ###',
    '+231 55# ### ###',
    '+231 22# ### ###',
    '+231 33# ### ###',
    '+231 66# ### ###',
    '0### ### ###',
    '077# ### ###',
    '088# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'liberia.net',
    'datax.lr', 'touchnet.lr', 'live.com', 'aol.com'
  ],

  companyNames: [
    'Liberia Telecommunications Corporation',
    'Cellcom Liberia', 'Lonestar Cell MTN', 'Novafone',
    'Ecobank Liberia', 'Liberian Bank for Development and Investment',
    'International Bank Liberia', 'AccessBank Liberia',
    'ArcelorMittal Liberia', 'Firestone Liberia',
    'Golden Veroleum Liberia', 'Sime Darby Liberia',
    'Buchanan Renewables', 'Liberia Coca-Cola Bottling Company',
    'Breweries of Liberia', 'Euro Liberia',
    'MambaPoint Realty', 'Dugbe Chemical'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Rubber', 'Fisheries'
  ],

  catchPhrases: [
    'Innovating for a better Liberia',
    'Your success is our commitment',
    'Building Liberia together',
    'Excellence in every endeavour',
    'Committed to service and growth',
    'Your trusted partner in development',
    'Leading with hope and determination'
  ]
};
