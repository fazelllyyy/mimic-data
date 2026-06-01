import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_GM: LocaleDefinition = {
  firstNamesMale: [
    'Musa', 'Bakary', 'Lamin', 'Momodou', 'Ousainou', 'Ebrima', 'Sulayman',
    'Baboucarr', 'Demba', 'Mamadou', 'Alhagie', 'Moustapha', 'Bubacarr',
    'Omar', 'Abdoulie', 'Sanna', 'Karamo', 'Amadou', 'Mansour', 'Yaya',
    'John', 'David', 'Michael', 'Peter', 'James', 'Samuel', 'Joseph',
    'Paul', 'William', 'Andrew'
  ],
  firstNamesFemale: [
    'Fatou', 'Ami', 'Mariama', 'Haddijatou', 'Awa', 'Kadijatou', 'Sainabou',
    'Isatou', 'Jarra', 'Amie', 'Kumba', 'Sally', 'Ndey', 'Mbye',
    'Hawa', 'Jahou', 'Maimuna', 'Ramatoulie', 'Adama', 'Sarah',
    'Rebecca', 'Grace', 'Mary', 'Alice', 'Elizabeth', 'Martha',
    'Margaret', 'Helena', 'Rose', 'Claire'
  ],
  lastNames: [
    'Jallow', 'Bah', 'Sanneh', 'Sillah', 'Bojang', 'Ceesay', 'Jobe',
    'Manneh', 'Touray', 'Njie', 'Jammeh', 'Kujabi', 'Badjie',
    'Keita', 'Camara', 'Darboe', 'Sonko', 'Jaiteh', 'Sanyang',
    'Bayo', 'Sey', 'Dampha', 'Danjo', 'Faal', 'Gassama',
    'Kora', 'Saho', 'Top', 'Jeng', 'Mendy'
  ],
  streets: [
    'Independence Drive', 'Banjul-Serrekunda Highway',
    'Bertil Harding Highway', 'Kairaba Avenue',
    'Hagan Street', 'Nelson Mandela Street',
    'Leman Street', 'Russell Street',
    'Doctor Sir Dawda Kairaba Jawara Road',
    'Marina Parade', 'Gloucester Street',
    'Denton Bridge Road', 'Brikama Highway',
    'Serekunda Road', 'Cape Point Road',
    'Wellingara Avenue', 'Sukuta Road',
    'Bakau Road', 'Westfield Road', 'Tujereng Road'
  ],
  cities: [
    'Serekunda', 'Brikama', 'Banjul', 'Bakau', 'Farafenni', 'Lamin',
    'Gunjur', 'Bansang', 'Soma', 'Basse Santa Su', 'Garowol',
    'Kerewan', 'Kuntaur', 'Georgetown', 'Tanji', 'Barra',
    'Brufut', 'Mandina', 'Yundum', 'Sukuta'
  ],
  states: [
    'Greater Banjul Area', 'West Coast Region', 'Lower River Region',
    'Central River Region', 'Upper River Region', 'North Bank Region',
    'Kanifing Municipality', 'Banjul City Council',
    'Kuntaur Local Government Area',
    'Janjanbureh Local Government Area'
  ],
  zipCodePattern: '#####',
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
    const houseNumber = Random.int(1, 999);
    return `${houseNumber} ${street}, P.O. Box ${Random.int(100, 9999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+220 ### ####',
    '+220 2## ####',
    '+220 3## ####',
    '+220 4## ####',
    '+220 5## ####',
    '+220 6## ####',
    '+220 7## ####',
    '+220 8## ####',
    '+220 9## ####',
    '### ####',
    '2## ####',
    '7## ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'qanet.gm',
    'gambia.gm', 'gamnet.gm', 'live.com', 'aol.com'
  ],

  companyNames: [
    'Gamtel', 'QCell Gambia', 'Africell Gambia', 'Comium Gambia',
    'Trust Bank Gambia', 'Standard Chartered Gambia',
    'Ecobank Gambia', 'First International Bank Gambia',
    'Gambia Ports Authority', 'Gambia Civil Aviation Authority',
    'Gambia Ground Handling Corporation',
    'Gambia National Petroleum Company',
    'Gambia Public Utilities Authority',
    'Gambia Telecommunications Company',
    'Gambia Breweries Limited', 'Banjul Breweries',
    'Julbrew Gambia', 'Sosé-Gambia'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Agriculture',
    'Fisheries', 'Tourism', 'Banking'
  ],

  catchPhrases: [
    'Innovating for a brighter Gambia',
    'Your success is our mission',
    'Building the Gambia together',
    'Excellence and hospitality always',
    'Committed to national progress',
    'Your trusted partner in growth',
    'Leading with integrity and vision'
  ]
};
