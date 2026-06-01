import { LocaleDefinition } from '../types';
import { Random } from '../core/random';

export const en_BW: LocaleDefinition = {
  firstNamesMale: [
    'Tshepo', 'Itumeleng', 'Mpho', 'Olebogeng', 'Boitumelo', 'Katlego',
    'Kabelo', 'Thuso', 'Lesego', 'Kgosi', 'Gofaone', 'Goitseone',
    'Moagi', 'Morwa', 'Tebogo', 'Mogorosi', 'Pako', 'Thato', 'Letsogile',
    'Reginah', 'Michael', 'David', 'John', 'Peter', 'William', 'Samuel',
    'James', 'Joseph', 'Charles', 'Daniel'
  ],
  firstNamesFemale: [
    'Boitumelo', 'Mpho', 'Tshegofatso', 'Keitumetse', 'Kgomotso',
    'Refilwe', 'Tebogo', 'Bontle', 'Thuto', 'Lesedi', 'Onalenna',
    'Tshenolo', 'Olorato', 'Gomolemo', 'Gaone', 'Lorato', 'Nametso',
    'Lorato', 'Kelebogile', 'Dineo', 'Mary', 'Grace', 'Sarah',
    'Rebecca', 'Elizabeth', 'Margaret', 'Ruth', 'Esther', 'Alice',
    'Patience'
  ],
  lastNames: [
    'Modise', 'Mokgosi', 'Molefe', 'Mokgethi', 'Ketshabile', 'Mothobi',
    'Sebego', 'Botlhole', 'Mokgweetsi', 'Moalosi', 'Motshegwa',
    'Moroka', 'Ndlovu', 'Moyo', 'Sibanda', 'Dube', 'Tshireletso',
    'Batlokwa', 'Mmadisakwane', 'Kgaswane', 'Matswe',
    'Ramogotsi', 'Sebolai', 'Mokonyane', 'Maposa', 'Pilane',
    'Keatlholetswe', 'Rantao', 'Pheto', 'Mogotsi'
  ],
  streets: [
    'Molepolole Road', 'Kweneng Road', 'Tshekedi Road',
    'Nyerere Road', 'Botswana Road', 'Independence Avenue',
    'Khama Crescent', 'Boseja Street', 'Hudson Street',
    'Modiri Glen', 'Queens Road', 'Palapye Road',
    'Macheng Way', 'Mokgosi Way', 'Matante Drive',
    'Ngwaketse Way', 'Gaborone International Commerce Park',
    'Main Mall', 'Station Road', 'Railway Road'
  ],
  cities: [
    'Gaborone', 'Francistown', 'Molepolole', 'Maun',
    'Mogoditshane', 'Serowe', 'Kanye', 'Mahalapye', 'Palapye',
    'Tlokweng', 'Lobatse', 'Mochudi', 'Ramotswa', 'Selibe Phikwe',
    'Kasane', 'Ghanzi', 'Jwaneng', 'Masunga', 'Orapa', 'Tsabong'
  ],
  states: [
    'South-East District', 'Southern District', 'Kweneng District',
    'Kgatleng District', 'Central District', 'Ngamiland District',
    'Chobe District', 'North-East District', 'Ghanzi District',
    'Kgalagadi District'
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
    const plot = Random.int(1, 9999);
    return `Plot ${plot}, ${street}, P.O. Box ${Random.int(100, 9999)}, ${city}, ${state} ${zipCode}`;
  },

  generateZipCode(): string {
    return String(Random.int(10000, 99999));
  },

  phoneFormats: [
    '+267 ## ### ###',
    '+267 71# ### ###',
    '+267 72# ### ###',
    '+267 73# ### ###',
    '+267 74# ### ###',
    '+267 75# ### ###',
    '+267 76# ### ###',
    '+267 77# ### ###',
    '+267 31# ### ###',
    '0## ### ###',
    '07# ### ###'
  ],

  emailDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
    'icloud.com', 'mail.com', 'protonmail.com', 'btmail.co.bw',
    'bwmail.co.bw', 'itwebb.co.bw', 'mega.bw', 'live.com',
    'yahoobotswana.co.bw'
  ],

  companyNames: [
    'Botswana Telecommunications Corporation',
    'Mascom Wireless', 'BMC Botswana', 'Orange Botswana',
    'Bank of Botswana', 'Standard Chartered Bank Botswana',
    'First National Bank Botswana', 'Barclays Bank Botswana',
    'Access Bank Botswana', 'Bigfive Holdings',
    'Debswana Diamond Company', 'Botswana Ash',
    'Botswana Meat Commission', 'Botswana Oil Limited',
    'Dangote Botswana', 'SELEBI PHIKWE NICKEL MINE',
    'South African Breweries Botswana', 'Botswana Railways'
  ],

  industries: [
    'Technology', 'Finance', 'Healthcare', 'Education', 'Retail',
    'Manufacturing', 'Media', 'Telecommunications', 'Energy', 'Transport',
    'Real Estate', 'Consulting', 'Hospitality', 'Mining', 'Agriculture',
    'Diamond', 'Tourism'
  ],

  catchPhrases: [
    'Innovating for a prosperous Botswana',
    'Your success is our priority',
    'Building Botswana together',
    'Excellence and quality always',
    'Committed to national development',
    'Your trusted partner in progress',
    'Leading with vision and integrity'
  ]
};
