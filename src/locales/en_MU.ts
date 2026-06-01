import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_MU: LocaleDefinition = {
  firstNamesMale: [
    'Jean', 'David', 'Michael', 'Kevin', 'Ashwin', 'Ravi', 'Sunil', 'Patrick',
    'Stephane', 'Rajesh', 'Vikash', 'Ryan', 'Nishal', 'Yash', 'Avinash', 'Dev',
    'Sandeep', 'Daniel', 'Jonathan', 'Christopher', 'Anil', 'Mohit', 'Rohan',
    'Akshay', 'Ritish', 'Keshav', 'Navin', 'Arvind', 'Ritesh', 'Kishan'
  ],
  firstNamesFemale: [
    'Marie', 'Sarah', 'Priya', 'Anita', 'Neha', 'Shalini', 'Nathalie', 'Vanessa',
    'Sunita', 'Kavita', 'Deepa', 'Shamina', 'Rita', 'Savita', 'Yashika', 'Aisha',
    'Pooja', 'Sangeeta', 'Sharmila', 'Bhavna', 'Nisha', 'Rekha', 'Lina', 'Anjali',
    'Shivani', 'Kiran', 'Mona', 'Usha', 'Geeta', 'Rani'
  ],
  lastNames: [
    'Ramdin', 'Rampersad', 'Bhugaloo', 'Goordeen', 'Seebarun', 'Beeharry', 'Bundhoo',
    'Chinien', 'Daby', 'Dookhee', 'Fowdar', 'Gopaul', 'Hossen', 'Jugnauth',
    'Koonjoo', 'Laljee', 'Mamet', 'Nathoo', 'Nowbuth', 'Pillay', 'Ragoo',
    'Ramphul', 'Seedoyal', 'Teeluck', 'Unmole', 'Varma', 'Woochit', 'Yadallee',
    'Ramo', 'Soodhun'
  ],
  streets: [
    'Sir Seewoosagur Ramgoolam Street', 'Royal Road', 'Queen Street',
    'Farquhar Street', 'Edith Cavell Street', 'Catherine Street',
    'Bourbon Street', 'La Chaussée', 'Dr. J. B. Duval Street',
    'Mauritius Street', 'Pope Hennessy Street', 'St. Jean Road',
    'Coastal Road', 'Sunset Boulevard', 'Vallee des Pretres Road',
    'Allee Brillant', 'Abattoir Road', 'Camp de Masque Road'
  ],
  cities: [
    'Port Louis', 'Beau Bassin-Rose Hill', 'Vacoas-Phoenix', 'Curepipe',
    'Quatre Bornes', 'Triolet', 'Goodlands', 'Centre de Flacq', 'Bel Air',
    'Mahébourg', 'Pamplemousses', 'Moka', 'Flic en Flac', 'Grand Baie',
    'Pereybère', 'Tamarin', 'Chemin Grenier', 'Souillac', 'Rivière du Rempart',
    'Plaine Magnien', 'Bambous', 'Albion', 'Balaclava', 'Cap Malheureux'
  ],
  states: [
    'Port Louis District', 'Flacq District', 'Pamplemousses District',
    'Rivière du Rempart District', 'Moka District', 'Savanne District',
    'Grand Port District', 'Rivière Noire District', 'Plaines Wilhems District'
  ],
  zipCodePattern: '#####',
  jobTitles: [
    'Software Engineer', 'Project Manager', 'Data Analyst', 'Marketing Manager',
    'Sales Representative', 'Accountant', 'HR Manager', 'Graphic Designer',
    'Operations Manager', 'Business Analyst', 'Financial Analyst', 'Network Administrator'
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
    '+230 #### ####',
    '#### ####',
    '+230 5### ####',
    '5### ####',
    '+230 2### ####',
    '+230 4### ####',
    '+230 6### ####',
    '+230 7### ####'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
    'orange.mu', 'intnet.mu', 'myt.mu'
  ],

  companyNames: [
    'State Bank of Mauritius', 'MCB Group', 'Air Mauritius', 'Mauritius Telecom',
    'Rogers Group', 'ENL Group', 'IBL Group', 'Cim Financial Services',
    'LUX Star Resorts', 'La Sentinelle', 'Gamma Civic', 'Mauritius Breweries',
    'Curepipe Biscuit', 'Compagnie Mauricienne de Textile', 'Omnicane',
    'Alteo Group', 'Mon Desert Alma'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Telecommunications', 'Energy', 'Transport',
    'Tourism', 'Agriculture', 'Textiles', 'Real Estate', 'Banking'
  ],

  catchPhrases: [
    'Innovating for Mauritius', 'Your trusted partner in business',
    'Building a brighter tomorrow', 'Committed to excellence',
    'Driving growth and innovation', 'Your success is our mission'
  ]
};
